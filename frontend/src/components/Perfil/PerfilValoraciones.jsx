import { Typography, Box,Grid} from "@mui/material";
import CardValoraciones from "../CardValoraciones/CardValoraciones";
import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';


export default function PerfilValoraciones() {
  const { valoraciones = [], setValoraciones, perfil, nuevaValoracion } = useUserContext();
  const [paginaActual, setPaginaActual] = useState(1);
  const totalPaginas= Math.ceil(valoraciones.length/5)
  const valoracionesPaginas = valoraciones.slice(paginaActual*5-5,paginaActual*5)
  

  
  useEffect(() => {
    async function fetchPerfilValoraciones() {
      const id = perfil?.address[0]?.ID_USER || null;
      const response = await fetch(`http://127.0.0.1:3000/valoraciones/coment/${id}`);
      const data = await response.json();
      setValoraciones(data);
    }
    fetchPerfilValoraciones();
  }, [perfil, nuevaValoracion]);

  function handleChange(e, value) {
    setPaginaActual(value)
    
  }
 
  return (
    <>
    <Grid container className="valoraciones" spacing={2}>
      {valoraciones.length ? valoracionesPaginas.map((item, i) => <CardValoraciones key={i} item={item} />) : <h5>No hay valoraciones en este momento</h5>}
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "center", p: "2rem"}}>
          <Pagination onChange={handleChange} count={totalPaginas} variant="outlined"/>
        </Grid>
    </>
  );
}
