import { TextField, Box, Grid, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function DatosBloqueados({ usuarioFormik, isEditing, setIsEditing }) {
  function editarDatos() {
    setIsEditing(true);
  }

  return (
    <>
      {usuarioFormik ? (
        <>
          {usuarioFormik.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  alignItems: "center",
                  width: "100%",
                  p: 5,
                  margin: "0 auto",
                  mt: 8,
                  borderLeft: "2px solid #000",
                  borderRight: " 2px solid #000",
                  borderBottom: " 2px solid #000",
                  boxShadow: "1px 1px 3px 1px black",
                  position: "relative",
                }}
              >
                <h3 className="titulos-form-datos">Datos de usuario</h3>
                <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
                  <Grid item xs={6}>
                    <TextField className="input-form-normal" disabled value={item.NOMBRE} size="small" sx={{ m: 1, width: "100%" }} variant="outlined" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField id="EMAIL" name="EMAIL" disabled value={item.EMAIL} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                </Grid>
                <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
                  <Grid item xs={6}>
                    <TextField id="TLF" type="tel" name="TLF" disabled value={item.TLF} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField id="URL" name="URL" disabled value={item.URL} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                </Grid>
                <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
                  <Grid item xs={6}>
                    <TextField id="DESCRIPCION" multiline rows={4} name="DESCRIPCION" disabled value={item.DESCRIPCION} size="small" sx={{ m: 1, width: "100%" }} />
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      sx={{ ml: "72%", mt: "25%" }}
                      variant="contained"
                      component="label"
                      onClick={editarDatos}
                    >
                      <EditIcon sx={{mr:1}}/> Editar

                    </Button>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </>
      ) : null}
    </>
  );
}
