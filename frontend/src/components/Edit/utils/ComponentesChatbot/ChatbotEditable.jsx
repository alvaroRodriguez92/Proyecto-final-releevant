import { TextField, Box, Grid, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { Formik, FieldArray } from "formik";
import { schemaChatbot } from "../schemaChatbot";

export default function ChatbotEditable({ setEditExitoso, editExitoso, onSubmit, borrarPregunta, setIsEditing, preguntasUser, initialValues }) {
  function cancelarEdit() {
    setIsEditing(false);
    setEditExitoso([false]);
  }

  
  return (
    <>
      <Formik validationSchema={schemaChatbot} initialValues={initialValues} onSubmit={onSubmit}>
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
              <h3 className="titulos-form-direccion">PREGUNTAS Y RESPUESTAS </h3>
              <FieldArray name="CHATBOT">
                {({ push, remove }) => (
                  <>
                    {formik.values.CHATBOT?.map((item, index) => (
                      <Box key={index} sx={{ width: "100%" }}>
                        <Grid
                          container
                          spacing={12}
                          width="100%"
                          sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <Grid item xs={8}>
                            <Grid
                              container
                              sx={{
                                display: "flex",
                                width: "100%",
                                flexDirection: "column",
                              }}
                            >
                              <Grid item xs={12}>
                                <TextField
                                  id={`CHATBOT[${index}].PREGUNTA`}
                                  name={`CHATBOT[${index}].PREGUNTA`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.CHATBOT[index].PREGUNTA}
                                  label="Pregunta"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  id={`CHATBOT[${index}].RESPUESTA`}
                                  name={`CHATBOT[${index}].RESPUESTA`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.CHATBOT[index].RESPUESTA}
                                  label="Respuesta"
                                  size="small"
                                  sx={{ m: 1, width: "100%" }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-select-small-label">Pregunta relacionada</InputLabel>
                              <Select
                                labelId="demo-select-small-label"
                                id={`CHATBOT[${index}].PADRE`}
                                name={`CHATBOT[${index}].PADRE`}
                                value={formik.values.CHATBOT[index].PADRE}
                                label="Pregunta relacionada"
                                onChange={formik.handleChange}
                                fullWidth
                                defaultValue={formik.values.CHATBOT[index].PADRE}
                              >
                                <MenuItem value={0}>Sin pregunta relacionada</MenuItem>
                                {preguntasUser?.map((item, index) => {
                                  return (
                                    <MenuItem key={index} value={item.ID}>
                                      {item.PREGUNTA}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>{" "}
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid item xs={8} sx={{ ml: 6, mb: 5 }}>
                            <Button
                              sx={{ mt: 3, ml: 1, width: "15%" }}
                              variant="contained"
                              onClick={() => {
                                borrarPregunta(formik.values.CHATBOT[index]);
                                remove(index);
                              }}
                            >
                              Borrar
                            </Button>
                            <Button
                              sx={{ mt: 3, ml: 1, mr: 5, width: "15%" }}
                              variant="contained"
                              component="label"
                              onClick={() => onSubmit(item, index)}
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
                        </Grid>
                      </Box>
                    ))}
                    <Button
                      sx={{ ml: "63%", width: "24%" }}
                      variant="contained"
                      onClick={() => {
                        push({
                          PREGUNTA: "",
                          RESPUESTA: "",
                          PADRE: 0,
                        });
                      }}
                    >
                      Añadir preguntas{" "}
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
