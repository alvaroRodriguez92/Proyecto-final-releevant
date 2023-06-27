import { useContext, useState, createContext } from "react";

const CardContext = createContext({
 datosEmpresa: () => {},
 empresas: null,
 setEmpresas: () => {},
 raton: false,
 setRaton: () => {},
 ratonOver: () => {},
 ratonOut: () => {}
});

export default function CardContextProvider({ children }) {
    const [empresas,setEmpresas] = useState([])
    const [ raton, setRaton ] = useState(false)
 
    async function datosEmpresa(categoria) {
        const response = await fetch(`http://127.0.0.1:3000/user/categoria/${categoria}`);
        const data = await response.json();
        setEmpresas(data);
    }

    function ratonOver(){
        setRaton(true)
    }
    function ratonOut(){
        setRaton(false)
    }
   
    const value = {
        datosEmpresa,
        empresas,
        setEmpresas,
        raton,
        setRaton,
        ratonOver,
        ratonOut
    };

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export function useCardContext() {
  return useContext(CardContext);
}