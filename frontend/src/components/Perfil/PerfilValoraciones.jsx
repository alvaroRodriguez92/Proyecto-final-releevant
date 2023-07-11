import { Typography, Box } from "@mui/material";
import CardValoraciones from "../CardValoraciones/CardValoraciones";
import { useUserContext } from "../../context/UserContext";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";

export default function PerfilValoraciones() {

  const { valoraciones, setValoraciones, perfil,nuevaValoracion } = useUserContext();

  useEffect(() => {
    async function fetchPerfilValoraciones() {
      const id = perfil?.address[0]?.ID_USER || null
      const response = await fetch(`http://127.0.0.1:3000/valoraciones/coment/${id}`);

      const data = await response.json();
      setValoraciones(data);
    }
    fetchPerfilValoraciones();

  }, [perfil,nuevaValoracion]);
   

  return (
    <Box>
      <Typography variant="h4" sx={{ width:"100%", m:"0 auto"}}>
        Valoraciones clientes
      </Typography>
      <Grid container className="valoraciones" spacing={2}>
        {valoraciones.length ? (
          valoraciones.map((item, i) => (
            <CardValoraciones key={i} item={item} />
          ))
        ) : (
          <h5>No hay valoraciones en este momento</h5>
        )}
      </Grid>
    </Box>
  );
}
