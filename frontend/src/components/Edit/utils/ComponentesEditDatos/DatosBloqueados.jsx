import {
  TextField,
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function DatosBloqueados({
  usuarioFormik,
  isEditing,
  setIsEditing,
}) {
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
                <Grid
                  container
                  spacing={15}
                  width="100%"
                  sx={{ width: "100%" }}
                >
                  <Grid item xs={6}>
                    <TextField
                      className="input-form-normal"
                      disabled
                      value={item.NOMBRE}
                      // label="Nombre completo"
                      size="small"
                      sx={{ m: 1, width: "100%" }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="EMAIL"
                      //   error={formik.errors.EMAIL && formik.touched.EMAIL}
                      name="EMAIL"
                      disabled
                      value={item.EMAIL}
                      //   onChange={formik.handleChange}
                      //   onBlur={formik.handleBlur}
                      //   value={formik.values.EMAIL}
                      //   helperText={formik.errors.EMAIL}
                      size="small"
                      sx={{ m: 1, width: "100%" }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={15}
                  width="100%"
                  sx={{ width: "100%" }}
                >
                  <Grid item xs={6}>
                    <TextField
                      id="TLF"
                      //   error={formik.errors.TLF && formik.touched.TLF}
                      type="tel"
                      name="TLF"
                      //   onChange={formik.handleChange}
                      //   onBlur={formik.handleBlur}
                      //   value={formik.values.TLF}
                      //   helperText={formik.errors.TLF}
                      disabled
                      value={item.TLF}
                      size="small"
                      sx={{ m: 1, width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="URL"
                      //   error={formik.errors.URL && formik.touched.URL}
                      name="URL"
                      //   onChange={formik.handleChange}
                      //   onBlur={formik.handleBlur}
                      //   value={formik.values.URL}
                      //   helperText={formik.errors.URL}
                      disabled
                      value={item.URL}
                      size="small"
                      sx={{ m: 1, width: "100%" }}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={15}
                  width="100%"
                  sx={{ width: "100%" }}
                >
                  <Grid item xs={6}>
                    <TextField
                      id="DESCRIPCION"
                      multiline
                      rows={4}
                      //   error={formik.errors.DESCRIPCION && formik.touched.DESCRIPCION}
                      name="DESCRIPCION"
                      //   onChange={formik.handleChange}
                      //   onBlur={formik.handleBlur}
                      //   value={formik.values.DESCRIPCION}
                      //   helperText={formik.errors.DESCRIPCION}
                      disabled
                      value={item.DESCRIPCION}
                      size="small"
                      sx={{ m: 1, width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      sx={{ ml: "81%", mt: "25%" }}
                      variant="contained"
                      component="label"
                      onClick={editarDatos}
                    >
                      <EditIcon />
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
