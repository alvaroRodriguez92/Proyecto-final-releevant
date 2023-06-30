import { Button, Box, Grid } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useState, useEffect } from "react";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ClearIcon from "@mui/icons-material/Clear";

export default function EditImagenes({ images }) {
  const [imagenUser, setImagenUser] = useState([]);
  const [imagenesMap, setImagenesMap] = useState();

  useEffect(() => {
    async function setearImagenesMap() {
      setImagenesMap(images);
    }
    setearImagenesMap();
  }, [images]);

  console.log(imagenUser, "IMAGEN USER");
  console.log(imagenesMap, "IMAGENES MAP AL INICIO");

  async function borrarFoto(ID, ID_USER) {
    const response = await fetch("http://127.0.0.1:3000/img/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ID: ID, ID_USER: ID_USER }),
    });
    if (response.status === 200) {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = await response.json();
      setImagenesMap(data);
      alert("DELETE realizado con éxito");
    }
  }

  async function subirImagenes() {
    const ID_USER = images[0].ID_USER;
    console.log("SUBIENDO IMAGENEES");
    const formData = new FormData();
    formData.append("ID_USER", ID_USER);
    formData.append("TIPO", 0);

    imagenUser.map((item) => {
      formData.append("imagen", item);
    });

    console.log(formData, "FORM DATA");
    const response = await fetch("http://127.0.0.1:3000/img/add", {
      method: "POST",
      body: formData,
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log(data, "DATAAA");
      setImagenesMap(data);
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(imagenesMap, "IMAGENES MAP AL FINAL");

      alert("Imagenes subidas con éxito");
    }
  }

  console.log(images);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        //   border:"1px solid black",
        borderRadius: 2,
        width: "90%",
        p: 5,
        margin: "0 auto",
        alignItems: "center",
        mt: 20,
        mb: 20,
        borderLeft: "2px solid #000",
        borderRight: " 2px solid #000",
        borderBottom: " 2px solid #000",
        boxShadow: "1px 1px 3px 1px black",
        position: "relative",
      }}
    >
      <h3 className="titulos-form-imagenes">Imagenes </h3>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <MuiFileInput
            multiple
            className="fileInput"
            id="IMAGEN"
            type="file"
            name="IMAGEN"
            sx={{ mt: 8, ml: "50%", width: "50%" }}
            label="Seleccionar Imagenes"
            value={imagenUser}
            onChange={(file) => {
              setImagenUser(file);
            }}
          />
        </Grid>
        <Grid item xs={4} sx={{ mt: 8 }}>
          <Button
            onClick={subirImagenes}
            sx={{ mr: "80%", width: "50%", mt: 1 }}
            variant="contained"
          >
            Subir imagenes
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ mt: 3, ml: 9, mr: 9 }}>
        {imagenesMap
          ? imagenesMap?.map((item) => {
              if (item.TIPO == 0) {
                return (
                  <Grid item xs={3}>
                    <img
                      className="edit-imagen"
                      width="248px"
                      height="248px"
                      src={`http://localhost:3000/imagenes/${item.IMG_NOMBRE}`}
                    />
                    <Button
                      sx={{
                        position: "relative",
                        top: "-84%",
                        zIndex: "100",
                        left: "66%",
                      }}
                      onClick={() => borrarFoto(item.ID, item.ID_USER)}
                    >
                      <HighlightOffIcon
                        sx={{
                          border: "1px solid white",
                          borderRadius: "20px",
                          background: "whiteSmoke",
                          width: "40px",
                          height: "40px",
                          color: "#e3091e",
                        }}
                      />{" "}
                    </Button>
                  </Grid>
                );
              }
            })
          : null}
      </Grid>
    </Box>
  );
}
