import { useContext, useState, createContext } from "react";

const CardContext = createContext({
 datosEmpresa: () => {},
 empresas: null,
 setEmpresas: () => {},
 raton: false,
 setRaton: () => {},
 ratonOver: () => {},
 ratonOut: () => {},
 indice: 0,
 setIndice: () =>{}
});

export default function CardContextProvider({ children }) {
    const [empresas,setEmpresas] = useState([])
    const [ raton, setRaton ] = useState(false)
    const [indice,setIndice] = useState(0)
 
    async function datosEmpresa(categoria) {
        let datos = []
        const response = await fetch(`http://127.0.0.1:3000/user/categoria/${categoria}`);
        const data = await response.json();
        setEmpresas(data)
        
        data.map((d)=> {
            
            datos.push({...d,hover:false})
        })
        setEmpresas(datos)
    
        //setEmpresas({...data,hover:false});
        
    }

    async function buscador(text){
        const response = await fetch(`http://127.0.0.1:3000/buscar/${text}`)
        const data = await response.json();
        setEmpresas(data)
    }

    function ratonOver(index){
        setIndice(index)
       const newEmpresas = [...empresas]
       newEmpresas[index].hover = !newEmpresas[index].hover
       setEmpresas(newEmpresas)
        //setRaton(true)
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
        ratonOut,
        indice,
        setIndice
    };

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export function useCardContext() {
  return useContext(CardContext);
}