import { TextField, Box, Grid, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function DireccionBloqueados({ setIsEditing, addressBloqueo }) {
  function editarDatos() {
    setIsEditing(true);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        width: "100%",
        p: 5,
        alignItems: "center",
        margin: "0 auto",
        mt: 8,
        borderLeft: "2px solid #000",
        borderRight: " 2px solid #000",
        borderBottom: " 2px solid #000",
        boxShadow: "1px 1px 3px 1px black",
        position: "relative",
      }}
    >
      <h3 className="titulos-form-direccion">Direcciones </h3>

      {addressBloqueo?.map((item, index) => {
        return (
          <Box key={index}>
            <h5 className="direccion">Direccion {index + 1}</h5>
            <Grid container spacing={12} width="100%" sx={{ width: "100%" }}>
              <Grid item xs={6}>
                <TextField disabled value={item.TIPO_VIA} size="small" sx={{ m: 1, width: "95%" }} />
              </Grid>
              <Grid item xs={6}>
                <TextField disabled value={item.NOMBRE_VIA} size="small" sx={{ m: 1, width: "95%" }} />
              </Grid>
            </Grid>
            <Grid container spacing={12} width="100%" sx={{ width: "100%" }}>
              <Grid item xs={6}>
                <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>
                  <Grid item xs={4}>
                    <TextField type="number" disabled value={item.NUMERO} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField type="number" disabled value={item.PISO} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField disabled value={"puerta"} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>
                  <Grid item xs={3}>
                    <TextField type="number" disabled value={item.BLOQUE} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField type="postal" disabled value={item.CP} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField disabled value={"localidad"} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={12} width="100%" sx={{ width: "100%" }}>
              <Grid item xs={6}>
                <Grid container spacing={3} width="100%" sx={{ width: "100%", mb: 6 }}>
                  <Grid item xs={6}>
                    <TextField disabled value={item.LONGITUD} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField disabled value={item.LATITUD} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>
                  <Grid item xs={6}>
                    <TextField disabled value={item.PROVINCIA} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField disabled value={item.PAIS} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Box>
        )
        })}
        

        <Button
          sx={{ ml: "67%", mt: 2 }}
          variant="contained"
          component="label"
          onClick={editarDatos}
        >
          <EditIcon sx={{mr:1}}/> Editar
        </Button>
      </Box>
      

  );
}
