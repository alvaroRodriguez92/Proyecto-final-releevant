import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Caroussel from '../Caroussel/Caroussel';
import CardValoraciones from '../CardValoraciones/CardValoraciones';


export default function PerfilView() {
  return (
        <Box sx={{width:"50%", height:"50%", display:"flex",flexDirection:"column", p:"4rem"}}>
        <Typography sx={{p:"1rem"}} variant="h5" component="div" >
          nuevamente psicólogos
        </Typography>
        <Typography sx={{ mb: 1.5,p:"1rem" }} >
          ¿Estás pasando por una situación difícil y necesitas ayuda para superarla? Somos el gabinete de psicología de Málaga experto en tratar los
          diferentes problemas y trastornos presentes en la actualidad. Nos encontramos en pleno centro de Málaga (frente a El Corte Inglés).
          El tratamiento psicológico que llevamos a cabo es especializado.
        </Typography>
        <Typography >
          <ul>
            <li>
          ofrecer a cada paciente una atención psicológica “a medida”, efectiva y adaptada a su problema
         </li> 
         <li>
          ofrecer a cada paciente una atención psicológica “a medida”, efectiva y adaptada a su problema
          </li> 
          <li>
          ofrecer a cada paciente una atención psicológica “a medida”, efectiva y adaptada a su problema
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
      </Box>
          
      
    
  );
}

