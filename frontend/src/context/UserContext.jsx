import { useContext, useState, createContext } from "react";
import Swal from "sweetalert2";

const UserContext = createContext({
  login: () => { },
  logout: () => { },
  user: null,
  errorMessage: "",
  section: {
    "ID": 8,
    "NOMBRE_SECTOR": "SALUD"
  },
  setSection: () => { },
  tipoServicio: 8,
  setTipoServicio: () => { },
  perfil: {},
  setPerfil: () => { },
  perfilCompleto: null,
  setPerfilCompleto: () => { },
  currentPosition: () => { },
  currentCords: [],
  setCurrentCords: () => { },
  imagenCarrusel: [],
  setImagenCarrusel: () => { },
  valoraciones: {},
  setValoraciones: () => { },
  setErrorMessage: () => { },
  fetchPerfil: () => { },
  nuevaValoracion: false,
  setNuevaValoracion: () => { },
  
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
  const [perfil, setPerfil] = useState({})
  const [perfilCompleto, setPerfilCompleto] = useState(null)
  const [currentCords, setCurrentCords] = useState([]);
  const [imagenCarrusel, setImagenCarrusel] = useState([])
  const [valoraciones, setValoraciones] = useState ([])
  const [nuevaValoracion, setNuevaValoracion] = useState(false);

  
  async function fetchPerfil() {
    const response = await fetch(`http://localhost:3000/perfil/${perfilCompleto}`)
    const data = await response.json()
    setPerfil(data)
    setImagenCarrusel(data.images)
  }
  function currentPosition() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCurrentCords([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    );
  }

  async function login(values, actions) {
    const response = await fetch(`http://127.0.0.1:3000/user/login`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify({ ...data }));
      setUser({ ...data });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Bienvenid@ ${data.NOMBRE}`,
        showConfirmButton: false,
        timer: 1500
      })
      setErrorMessage(null);
      actions.resetForm();
    } 
      setErrorMessage("Los datos introducidos no son correctos, por favor inténtelo de nuevo.");

    
  }

  function logout() {
    localStorage.removeItem("user");
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Hasta pronto`,
      showConfirmButton: false,
      timer: 1500
    })
    setErrorMessage(null)
    setUser(null);
  }

 

  const value = {
    user,
    login,
    logout,
    errorMessage,
    setErrorMessage,
    section,
    setSection,
    tipoServicio,
    setTipoServicio,
    perfil,
    setPerfil,
    perfilCompleto,
    setPerfilCompleto,
    currentPosition,
    currentCords,
    setCurrentCords,
    imagenCarrusel,
    setImagenCarrusel,
    valoraciones,
    setValoraciones,
    fetchPerfil,
    nuevaValoracion,
    setNuevaValoracion
   
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}