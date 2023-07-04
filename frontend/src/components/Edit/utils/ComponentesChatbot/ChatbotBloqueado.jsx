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
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import EditIcon from "@mui/icons-material/Edit";
import { Formik, FieldArray } from "formik";
import { schemaDireccion } from "../schemaDireccion";
import { schemaChatbot } from "../schemaChatbot";

export default function ChatbotBloqueado({setIsEditing, preguntasUser}) {

    console.log(preguntasUser)

  function editarDatos() {
    setIsEditing(true);
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   border:"1px solid black",
          borderRadius: 2,
          width: "90%",
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
        {preguntasUser?.map((item, index) => {
          return (
            <Grid
              container
              spacing={12}
              width="100%"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                mb:8
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
                      disabled
                      label={item.PREGUNTA}
                      size="small"
                      sx={{ m: 1, width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      label={item.RESPUESTA}
                      size="small"
                      sx={{ m: 1, width: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-select-small-label">
                    Pregunta relacionada
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    label="Pregunta relacionada"
                    fullWidth
                    disabled
                  >
                    {preguntasUser?.map((item, index) => {
                      <MenuItem value={index}>{item.PREGUNTAS}</MenuItem>;
                    })}
                  </Select>
                </FormControl>{" "}
              </Grid>
            </Grid>
          );
        })}
        <Button
          sx={{ ml: "81%", mt: 5 }}
          variant="contained"
          component="label"
          onClick={editarDatos}
        >
          <EditIcon />
        </Button>
      </Box>
    </>
  );
}