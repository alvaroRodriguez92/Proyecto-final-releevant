import { Box } from '@mui/material';
import { useState, useEffect } from 'react';



export default function Categorias({idCategoria}) {
    const [resultCategorias, setResultCategorias] = useState([]);

    useEffect(()=>{
    async function categoriaFetch(){
        const response = await fetch(`http://127.0.0.1:3000/sector/${idCategoria}`)
        const data = await response.json()
            setResultCategorias(data)
    }
    categoriaFetch()
},[])
    console.log(resultCategorias);
    return (
        
       <>
            {resultCategorias.map((item, i) => 
                <button className="button" key={i}>{item.NOMBRE_CATEGORIA.toLowerCase()}</button>
            )}
            </>
    )
}
