import { Box, Grid, TextField, Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export default function Valoraciones({ onClose }) {
  const [starsSelected, setStarsSelected] = useState(0);
  const [comments, setCommments] = useState("");
  const { perfilCompleto, setPerfilCompleto, user, setNuevaValoracion, setValoraciones } = useUserContext();
  const [warning, setWarning] = useState(false);

  const estrellas = [
    { nombre: "estrella1", valor: 1 },
    { nombre: "estrella2", valor: 2 },
    { nombre: "estrella3", valor: 3 },
    { nombre: "estrella4", valor: 4 },
    { nombre: "estrella5", valor: 5 },
  ];

  async function enviarDatos() {
    if (comments.length > 8) {
      const response = await fetch(`http://127.0.0.1:3000/valoraciones/coment`, {
        method: "POST",
        body: JSON.stringify({
          ID_COMENTADO: perfilCompleto,
          PUNTUACION: starsSelected,
          COMENTARIO: comments,
          ID_COMENTADOR: user?.ID,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setNuevaValoracion(true);
      setValoraciones(data);
      onClose();
    } else {
      setWarning(true);
    }
  }

  function handleSubmit() {
    enviarDatos();
  }

  function handleChange(e) {
    setCommments(e.target.value);
  }
  return (
    <>
      <Grid container spacing={2} sx={{ width: "40rem", backgroundColor: "white" }}>
        <IconButton onClick={onClose}>
          <CloseIcon> </CloseIcon>
        </IconButton>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Box
            sx={{
              height: "32rem",
              p: "3rem 0.5rem",
            }}
          >
            <h2>Selecciona tu valoración</h2>
            {estrellas?.map((estrella, i) =>
              starsSelected >= estrella.valor ? (
                <StarIcon
                  onClick={() => {
                    setStarsSelected(estrella.valor);
                  }}
                  key={i}
                  sx={{ width: "2em", height: "2em", color: "#ffc526" }}
                ></StarIcon>
              ) : (
                <StarBorderIcon
                  onClick={() => {
                    setStarsSelected(estrella.valor);
                  }}
                  key={i}
                  sx={{ width: "2em", height: "2em", color: "#ffc526" }}
                ></StarBorderIcon>
              )
            )}

            <Grid container sx={{ display: "flex", flexDirection: "column", width: "100%", m: "4rem 0" }}>
              <Grid item xs={12}>
                <h2>Escribe tu comentario</h2>
                <TextField id="DESCRIPCION" multiline row={12} name="DESCRIPCION" onChange={handleChange} value={comments} label="Comentario" sx={{ width: "100%" }} />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
              <Button variant="contained" onClick={handleSubmit} fullWidth sx={{ height: "50px", width: "100px", boxShadow: "6px 6px black" }}>
                Enviar
              </Button>
            </Box>
            <Grid item xs={12} sx={{ mt: "2rem",mb:"8rem" }}>
              {warning ? <span className="spanValoraciones">La valoración debe contener un mínimo de 9 carácteres</span> : ""}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
