import { TextField, Box, Grid, Button } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { Formik, FieldArray } from "formik";
import { schemaDireccion } from "../schemaDireccion";

export default function DireccionEditables({ setIsEditing, initialValues, onSubmit, editExitoso, borrarDireccion, setEditExitoso }) {
  function cancelarEdit() {
    setIsEditing(false);
    setEditExitoso([false]);
  }

  return (
    <>
      <Formik validationSchema={schemaDireccion} initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <form className="form-register" onSubmit={formik.handleSubmit}>
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
              <FieldArray name="DIRECCIONES">
                {({ push, remove }) => (
                  <>
                    {formik.values.DIRECCIONES?.map((_, index) => (
                      <Box key={index}>
                        <Grid key={index} container spacing={12} width="100%" sx={{ width: "100%" }}>
                          <Grid item xs={6}>
                            <TextField
                              id={`DIRECCIONES[${index}].TIPO_VIA`}
                              name={`DIRECCIONES[${index}].TIPO_VIA`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.DIRECCIONES[index].TIPO_VIA}
                              label="Tipo de via"
                              size="small"
                              sx={{ m: 1, width: "95%" }}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              id={`DIRECCIONES[${index}].NOMBRE_VIA`}
                              name={`DIRECCIONES[${index}].NOMBRE_VIA`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.DIRECCIONES[index].NOMBRE_VIA}
                              label="Nombre de la via"
                              size="small"
                              sx={{ m: 1, width: "95%" }}
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={12} width="100%" sx={{ width: "100%" }}>
                          <Grid item xs={6}>
                            <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>
                              <Grid item xs={4}>
                                <TextField
                                  id={`DIRECCIONES[${index}].NUMERO`}
                                  type="number"
                                  name={`DIRECCIONES[${index}].NUMERO`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.DIRECCIONES[index].NUMERO}
                                  label="Numero"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>
                              <Grid item xs={4}>
                                <TextField
                                  id={`DIRECCIONES[${index}].PISO`}
                                  type="number"
                                  name={`DIRECCIONES[${index}].PISO`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.DIRECCIONES[index].PISO}
                                  label="Piso"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>
                              <Grid item xs={4}>
                                <TextField
                                  id={`DIRECCIONES[${index}].PUERTA`}
                                  name={`DIRECCIONES[${index}].PUERTA`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.DIRECCIONES[index].PUERTA}
                                  label="Puerta"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={6}>
                            <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>
                              <Grid item xs={3}>
                                <TextField
                                  id={`DIRECCIONES[${index}].BLOQUE`}
                                  type="number"
                                  name={`DIRECCIONES[${index}].BLOQUE`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.DIRECCIONES[index].BLOQUE}
                                  label="Bloque"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>
                              <Grid item xs={3}>
                                <TextField
                                  id={`DIRECCIONES[${index}].CP`}
                                  type="postal"
                                  name={`DIRECCIONES[${index}].CP`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.DIRECCIONES[index].CP}
                                  label="CP"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  id={`DIRECCIONES[${index}].LOCALIDAD`}
                                  name={`DIRECCIONES[${index}].LOCALIDAD`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.DIRECCIONES[index].LOCALIDAD}
                                  label="Localidad"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container spacing={12} width="100%" sx={{ width: "100%" }}>
                          <Grid item xs={6}>
                            <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>
                              <Grid item xs={6}>
                                <TextField
                                  id={`DIRECCIONES[${index}].LATITUD`}
                                  name={`DIRECCIONES[${index}].LATITUD`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.DIRECCIONES[index].LATITUD}
                                  label="Latitud"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  id={`DIRECCIONES[${index}].LONGITUD`}
                                  name={`DIRECCIONES[${index}].LONGITUD`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.DIRECCIONES[index].LONGITUD}
                                  label="Longitud"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={6}>
                            <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>
                              <Grid item xs={6}>
                                <TextField
                                  id={`DIRECCIONES[${index}].PROVINCIA`}
                                  name={`DIRECCIONES[${index}].PROVINCIA`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.DIRECCIONES[index].PROVINCIA}
                                  label="Provincia"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>

                              <Grid item xs={6}>
                                <TextField
                                  id={`DIRECCIONES[${index}].PAIS`}
                                  name={`DIRECCIONES[${index}].PAIS`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.DIRECCIONES[index].PAIS}
                                  label="Pais"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid item xs={8} sx={{ ml: 6, mb: 5 }}>
                            <Button
                              sx={{ mt: 3, ml: 1, width: "15%" }}
                              variant="contained"
                              onClick={() => {
                                borrarDireccion(formik.values.DIRECCIONES[index]);
                                remove(index);
                              }}
                            >
                              Borrar
                            </Button>
                            <Button
                              sx={{ mt: 3, ml: 1, mr: 5, width: "15%" }}
                              variant="contained"
                              component="label"
                              onClick={() => onSubmit(formik.values.DIRECCIONES[index], index)}
                            >
                              Guardar
                            </Button>

                            {editExitoso[index] ? (
                              <Box container sx={{ mt: 3, ml: 1 }}>
                                <span className="texto-exito">Cambios realizados con éxito</span>
                              </Box>
                            ) : (
                              ""
                            )}
                          </Grid>
                          <Grid item xs={2}></Grid>
                        </Grid>
                      </Box>
                    ))}
                    <Button
                      sx={{ ml: "63%", width: "24%" }}
                      variant="contained"
                      onClick={() => {
                        push({
                          TIPO_VIA: "",
                          NOMBRE_VIA: "",
                          NUMERO: "",
                          PISO: "",
                          PUERTA: "",
                          BLOQUE: "",
                          CP: "",
                          LOCALIDAD: "",
                          PROVINCIA: "",
                          PAIS: "",
                          LONGITUD: "",
                          LATITUD: "",
                        });
                        editExitoso.push(false);
                      }}
                    >
                      Añadir dirección{" "}
                      <AddToPhotosIcon
                        sx={{
                          ml: 1,
                          color: "black",
                          width: "32px",
                          height: "32px",
                        }}
                      />
                    </Button>
                  </>
                )}
              </FieldArray>
              <Button sx={{ ml: "77%", width: "10%", mt: 3 }} variant="contained" component="label" onClick={cancelarEdit}>
                Cancelar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
}
