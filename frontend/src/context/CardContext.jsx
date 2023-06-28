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
 setIndice: () =>{},
 buscarEmpresas: () => {},
 buscar:'',
 setBuscar: () => {}
});

export default function CardContextProvider({ children }) {
    const [ empresas,setEmpresas ] = useState([])
    const [ raton, setRaton ] = useState(false)
    const [ indice,setIndice ] = useState(0)
    const [ buscar, setBuscar ] = useState('')
 
    async function datosEmpresa(categoria) {
        let datos = []
        const response = await fetch(`http://127.0.0.1:3000/user/categoria/${categoria}`);
        const data = await response.json();
        setEmpresas(data)
        data.map((d)=> {
            datos.push({...d,hover:false})
        })
        setEmpresas(datos)
    }

    async function buscarEmpresas(){
        let datos = []
        const response = await fetch(`http://127.0.0.1:3000/buscar/${buscar}`)
        const data = await response.json();
        data.map((d)=> {
            datos.push({...d,hover:false})
        })
        setEmpresas(datos)
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
        setIndice,
        buscarEmpresas,
        buscar,
        setBuscar
    };

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export function useCardContext() {
  return useContext(CardContext);
}