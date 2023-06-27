import * as React from 'react';
import { useUserContext } from "../../context/UserContext";
import {Button, Typography, Grid, Card, Box,CardActions,CardContent} from '@mui/material';
import Caroussel from '../Caroussel/Caroussel';
import CardValoraciones from '../CardValoraciones/CardValoraciones';

import PerfilHeader from './PerfilHeader';
import Footer from '../Footer/Footer'

export default function Perfil() {
  const { perfil } = useUserContext();
  const { user={} } = perfil

  // if (!Object.keys(perfil).length) return <></>

  return (

    <Grid container>
      <Grid item xs={6}>
      <Typography sx={{display:"flex", justifyContent:"flex-start", p:"4rem" }} >
        {user[0]?.DESCRIPCION}
        </Typography>
        <Caroussel />
        </Grid>
    
     
      
     
       
    </Grid>




  );
}

