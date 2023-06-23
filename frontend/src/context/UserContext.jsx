import { useContext, useState, createContext } from "react";

const UserContext = createContext({
  login: () => {},
  logout: () => {},
  user: null,
  errorMessage: "",
  section: {
    "ID": 8,
    "NOMBRE_SECTOR": "SALUD"
  },
  setSection: () => { },
  tipoServicio: 8,
  setTipoServicio:()=>{},
});

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) ?? null
  );
  const [errorMessage, setErrorMessage] = useState(null);
  const [section, setSection] = useState({
    "ID": 8,
    "NOMBRE_SECTOR": "SALUD"
  });
  const [tipoServicio, setTipoServicio] = useState(8)

  async function login(values, actions) {
    const response = await fetch(`http://127.0.0.1:3000/user/login`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    //Aqui estaria la llamada a mi API
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify({ ...data }));
      setUser({ ...data });
      setErrorMessage(null);
      actions.resetForm();
    }
    setErrorMessage("Las credenciales no son correctas");
  }

  function logout() {
    localStorage.removeItem(user);
    setUser(null);
  }

  const value = {
    user,
    login,
    logout,
    errorMessage,
    section,
    setSection,
    tipoServicio,
    setTipoServicio

  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
