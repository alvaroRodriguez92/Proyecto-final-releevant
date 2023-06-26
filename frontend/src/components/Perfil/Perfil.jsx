import * as React from 'react';
import { useUserContext } from "../../context/UserContext";
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Caroussel from '../Caroussel/Caroussel';
import CardValoraciones from '../CardValoraciones/CardValoraciones';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Perfil() {
  const { perfil, setPerfil, perfilCompleto } = useUserContext();

  useEffect(()=>{
    async function fetchPerfil(){
      const response = await fetch(`http://localhost:3000/perfil/${perfilCompleto}`)
      const data = await response.json()
      setPerfil(data)
    }
    fetchPerfil();
  }, [perfilCompleto])

console.log(perfilCompleto,"perfilcompleto");
console.log(perfil,"perfil");

 

  return (
  
      <Box sx={{width:"80%", height:"80%", display:"flex",flexDirection:"column", p:"4rem"}}>
        {perfil[0][0]?.NOMBRE}
        <Typography sx={{p:"1rem"}} variant="h5" component="div" >
         { perfil[0][0]?.NOMBRE }
        </Typography>
        <Typography sx={{ mb:1.5, p:"1rem" }} >
          {perfil[0][0]?.DESCRIPCION}
        </Typography>
        <Typography >
          <ul>
            <li>
          {/* {perfil[1][0].DIRECCION} */}
         </li> 
         <li>
          {perfil[0][0]?.EMAIL}
          </li> 
          <li>
          {perfil[0][0]?.TLF}
          </li> 
          <li>
          {perfil[0][0]?.URL}
          </li> 
          </ul>
        </Typography>
        <Box sx={{p:"2rem"}}>
        <Caroussel/>
        </Box>
        <Typography>
          Valoraciones clientes
      </Typography>
      <CardValoraciones/>
          <Box sx={{display:"flex"}}>
        <Typography >
          Contacto
        </Typography>
        <FacebookIcon/>
        <LinkedInIcon/>
        <WhatsAppIcon/>
          </Box>
      </Box>
      
        
          
    
  );
}

