import { Typography, Box } from "@mui/material";
import CardValoraciones from "../CardValoraciones/CardValoraciones";
import { useUserContext } from "../../context/UserContext";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";

export default function PerfilValoraciones() {

  const { valoraciones, setValoraciones, perfil } = useUserContext();

  useEffect(() => {
    async function fetchPerfilValoraciones() {
      const id = perfil?.address[0]?.ID_USER || "";
      const response = await fetch(`http://127.0.0.1:3000/valoraciones/coment/${id}`);
      const data = await response.json();
      setValoraciones(data);
    }
    fetchPerfilValoraciones();
  }, [perfil]);

  return (
    <Box>
      <Typography variant="h4" sx={{ pt: "1.5rem" }}>
        Valoraciones clientes
      </Typography>
      <Grid container className="valoraciones" spacing={2}>
        {valoraciones.length ? valoraciones.map((item, i) => <CardValoraciones item={item} />) : <h5>No hay valoraciones en este momento</h5>}
      </Grid>
    </Box>
  );
}
