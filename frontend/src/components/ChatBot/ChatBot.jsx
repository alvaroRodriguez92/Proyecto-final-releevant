
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function ChatBot() {
    const [pregunta, setPregunta] = useState("")
    const [preguntaChat, setPreguntaChat] = useState([])

   


    const arrayPreguntas = ["¿Cuanto cuesta una consulta?", "¿Que tipo de terapias ofrecéis?", "¿Que tipo de pago aceptáis?"]
    

    async function enviarPregunta(){
        
        const newPreguntaChat={
            pregunta:pregunta
        }
        const auxPregunta=[...preguntaChat]
        auxPregunta.push(newPreguntaChat)
        setPreguntaChat(auxPregunta)
        setPregunta("")
        console.log(preguntaChat)
    }

    async function handlePregunta(e){
        await setPregunta(e.target.value)
    }


  return (
    <div className="container" style={{marginBottom: "20px", width:"30%"}}>
      <h4 className="text-center">ChatBot app</h4>
      <div className="media" style={{backgroundColor: "whitesmoke", height:"100px"}}>
        <img src="../../src/assets/chatboticon.png" style={{float:"left",margin: "10px"}} className="rounded-circle float-left img-thumbnail" width="72px" alt="..."/>
        <div className="media-body" style={{float:"left"}}>
        <h5 style={{margin:"15px"}}>ChatBot</h5>
        <span style={{marginLeft:"10px", color:"rgb(32,199,32)"}}>Online</span>
        </div>
      </div>

    <div id="chatContainer" className="container border overflow-auto" style={{height:"300px"}}>
    {preguntaChat.map((item, index)=>{
        return(
            <h6 style={{margin: "8px"}} key={index}>{item.pregunta}</h6>
        )
    })}
    </div>
    <div className="input-group" >

<FormControl fullWidth>
    <Grid container fullWidth>
        <Grid item xs={10}>
  <InputLabel fullWidth id="demo-simple-select-label">Preguntas</InputLabel>
  <Select
  fullWidth
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={pregunta}
    label="Preguntas"
    onChange={handlePregunta}
  >{arrayPreguntas.map((item, id)=>{
    return(
    <MenuItem key ={id} value={item}>{item}</MenuItem>
    )

  })}
  </Select>
  </Grid>
  <Grid item xs={2}>

  <Button variant="contained" onClick={enviarPregunta} fullWidth sx={{height:"100%"}} >Enviar</Button>
  </Grid>
  </Grid>
</FormControl>

    {/* <div className="input-group-append"> */}
    </div>
    </div>
    // </div>
  );
}
