import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useUserContext } from "../../context/UserContext";
import NavSectores from '../NavSectores/NavSectores';




export default function Categorias() {
    const [resultCategorias, setResultCategorias] = useState([]);
    const { section, setSection } = useUserContext();

    useEffect(()=>{
    async function categoriaFetch(){
        const response = await fetch(`http://127.0.0.1:3000/sector/${section.ID}`)
        const data = await response.json()
            setResultCategorias(data)
        }
        if (section?.ID) {
            categoriaFetch()
        } else {
            setResultCategorias([])
        }
},[section])
   
    return (
        <>
            {resultCategorias.map((item, i) => 
                <button className="button" key={i}>{item.NOMBRE_CATEGORIA.toLowerCase()}</button>
            )}
           </> 
    )
}
