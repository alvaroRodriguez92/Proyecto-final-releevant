
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect, useRef} from "react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ChatBot() {
    const [pregunta, setPregunta] = useState({pregunta:"", respuesta:""})
    const [preguntaChat, setPreguntaChat] = useState([])
    const [resultFetchPregunta, setResultFetchPregunta] = useState([])
    const mensajeFinal = useRef(null)

    const ID_PERFIL=14;
    // http://localhost:3000/chatbox/respuestas/1


    useEffect(()=>{
      
      fetchChatbot();
    }, [])

    useEffect(()=>{
      mensajeFinal.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }, [preguntaChat])

    async function fetchChatbot(){
      const response = await fetch("http://localhost:3000/chatbox/preguntas/inicio/"+ID_PERFIL)
      const data = await response.json()
      setResultFetchPregunta(data)
    }

    async function preguntasHijas(){
      const response = await fetch("http://localhost:3000/chatbox/preguntas/ph/"+pregunta.ID)
      if(response.status !== 200) {
        fetchChatbot()
      }else{
        const data = await response.json()
        console.log(data,"esto es data chat")
        setResultFetchPregunta(data)
      }
    }

    // const arrayPreguntas = [{pregunta:"¿Cuanto cuesta una consulta?", respuesta:"yo k se tio xd"}, {pregunta: "¿Que tipo de terapias ofrecéis?", respuesta:"Muchas"}, {pregunta:"¿Que tipo de pago aceptáis?", respuesta:"Criptomonedas solo"}]
    

    async function enviarPregunta(){
        
        const newPreguntaChat={
            pregunta:pregunta.PREGUNTA,
            respuesta:pregunta.RESPUESTA
        }
        const auxPregunta=[...preguntaChat]
        auxPregunta.push(newPreguntaChat)
        setPreguntaChat(auxPregunta)
        setPregunta("")
        preguntasHijas();
    }

     function handlePregunta(e){
          //console.log(e.target.value,"jkgfgf")
         setPregunta(e.target.value)
    }


  return (
    <div className="container" style={{marginBottom: "20px",marginTop: "4.2rem", width:"80%",position:"sticky",top:0}}>
      {/* <h4 className="text-center">ChatBot app</h4> */}
      <div className="media" style={{backgroundColor: "whitesmoke", height:"100px"}}>
        <img src="../../src/assets/chatboticon.png" style={{float:"left",margin: "10px"}} className="rounded-circle float-left img-thumbnail" width="72px" alt="..."/>
        <div className="media-body" style={{float:"left"}}>
        <h5 style={{margin:"15px"}}>ChatBot</h5>
        <span style={{marginLeft:"10px", color:"rgb(32,199,32)"}}>Online</span>
        </div>
      </div>

    <div id="chatContainer" className="container border overflow-auto" style={{height:"500px"}}>
    <h6 className="bienvenida-bot">Bienvenido a nuestro ChatBot! ¿En que podemos ayudarte?</h6>
    <br></br>
    {preguntaChat.map((item, index)=>{
        return(
          <>
            <Box container sx={{display: "flex", flexDirection:"row", m:1}}><Avatar ><AccountCircleIcon sx={{width:"2em", height:"2em"}}/></Avatar><h6 className="pregunta-bot" key={index}>{item.pregunta}</h6></Box>
            <Box container sx={{display: "flex", flexDirection:"row", m:1}}><Avatar><img width="80em" height="50em" src="http://127.0.0.1:3000/imagenes/logonuevamente.png"/></Avatar><h6 className="respuesta-bot" key={index}>{item.respuesta}</h6></Box>
            </>
        )
      })}
      <div ref={mensajeFinal}/>
      
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
  >{resultFetchPregunta?.map((item, id)=>{
    return(
    <MenuItem key ={id} value={item}>{item.PREGUNTA}</MenuItem>
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
