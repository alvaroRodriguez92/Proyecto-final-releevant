import { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
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

export default function EditComentarios() {
  const [comentarios, setComentarios] = useState([]);
  const [respuesta, setRespuesta] = useState("");
  const [respondiendo, setRespondiendo] = useState([false]);
  const [butonDesabilitado, setButonDesabilitado] = useState(false);
  const { user } = useUserContext();

  function onClick(index) {
    seteoRespondiendo(respondiendo, index, true);
    setButonDesabilitado(true);
  }

  function onChange(e, index) {
    setRespuesta(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch("http://127.0.0.1:3000/address/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ID_USER:user.ID, ...values}),
      });
      if (response.status === 200) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await cambioExitoso(editExitoso, index);
        const data = await response.json()
        console.log(data,"RESPUESTA DEL INSERT")
        // setAddressBloqueo(data)  
      }   
    }

  function cancelarRespuesta(index){
    seteoRespondiendo(respondiendo, index, false);
    setButonDesabilitado(false);


  }

  async function seteoRespondiendo(array, indice, boolean) {
    const aux = [...array];
    aux[indice] = boolean;
    setRespondiendo(aux);
  }      

  useEffect(() => {
    async function fetchComentarios() {
      const response = await fetch(
        "http://localhost:3000/valoraciones/responder/" + user.ID
      );
      const data = await response.json();
      setComentarios(data);
    }
    fetchComentarios();
  }, []);

  console.log(comentarios);

  return (
    <form className="form-register" onSubmit={(e)=>handleSubmit(e)}>
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
        <h3 className="titulos-form-direccion">COMENTARIOS </h3>
        <Grid container>
          {comentarios.map((item, index) => {
            return (
              <Grid sx={{ m: 1 }} key={index} item xs={12}>
                <h6>Comentario {index + 1}</h6>
                <TextField
                  disabled
                  multiline
                  rows={3}
                  size="small"
                  value={item.COMENTARIO}
                  sx={{ width: "100%" }}
                />
                {respondiendo[index] ? (
                  <>
                    <TextField
                      label="Responder"
                      multiline
                      rows={3}
                      size="small"
                      value={respuesta}
                      onChange={(e) => onChange(e, index)}
                      sx={{ m: 1, width: "91%", ml: "9%", mt: 3 }}
                    />
                    <Button variant="contained" sx={{ ml: "79%", my: 1, mr: 2 }} type="submit">Enviar</Button>
                    <Button variant="contained" sx={{my: 1}} onClick={()=>cancelarRespuesta(index)}>Cancelar</Button>
                  </>
                ) : butonDesabilitado ? (
                  <Button
                    disabled
                    onClick={() => onClick(index)}
                    variant="contained"
                    sx={{ ml: "88%", my: 1, mr: 2 }}
                  >
                    Responder
                  </Button>
                ) : (
                  <Button
                    onClick={() => onClick(index)}
                    variant="contained"
                    sx={{ ml: "88%", my: 1, mr: 2 }}
                  >
                    Responder
                  </Button>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </form>
  );
}
