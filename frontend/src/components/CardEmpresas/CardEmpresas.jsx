import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box, Grid} from '@mui/material'
import {Link} from 'react-router-dom'
export default function CardEmpresas() {
  return (

    <Box width="100%" sx={{ display: "flex", p: "1rem", m: "2rem" }}>

     <Grid container spacing={3}>
      <Grid item xs={6}>
    <Card className="contenedorHover" 
    sx={{ maxWidth: 345,border:"1px solid black", borderRadius:"20px", borderStyle: "groove", boxShadow:"5px 5px"}}>
      <CardMedia
        sx={{ height: 180 }}
        image="../../src/assets/logonuevamente.png"
        title="nuevamente psicologos"
      />
      <CardContent className="contenedorTitle">
        <Typography gutterBottom variant="h5" component="div">
          nuevamente psicólogos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"end"}}>
      <Link to="/perfilView">  <Button  sx={{borderRadius:"10px", mr:1}}variant="contained" size="small">Ver mas</Button></Link>
      </CardActions>
        </Card>
        </Grid>
      <Grid item xs={6}>
        
     <Card className="contenedorHover"
     sx={{ maxWidth: 345,border:"1px solid black", borderRadius:"20px", borderStyle: "groove", boxShadow:"5px 5px"}}>
       <CardMedia
         sx={{ height: 180,".title": {  textAlign: "center" } }}
         image="../../src/assets/logonuevamente.png"
         title="nuevamente psicologos"
       />
       <CardContent className="contenedorTitle">
         <Typography gutterBottom variant="h5" component="div">
           nuevamente psicólogos
         </Typography>
         <Typography variant="body2" color="text.secondary">
           Lizards are a widespread group of squamate reptiles, with over 6,000
           species, ranging across all continents except Antarctica
         </Typography>
       </CardContent>
       <CardActions sx={{justifyContent:"end"}}>
         <Button size="small">Ver mas</Button>
       </CardActions>
      </Card>
      </Grid>

      <Grid item xs={6}>

      <Card className="contenedorHover"
     sx={{ maxWidth: 345,border:"1px solid black", borderRadius:"20px", borderStyle: "groove", boxShadow:"5px 5px"}}>
       <CardMedia
         sx={{ height: 180,".title": {  textAlign: "center" } }}
         image="../../src/assets/logonuevamente.png"
         title="nuevamente psicologos"
       />
       <CardContent className="contenedorTitle">
         <Typography gutterBottom variant="h5" component="div">
           nuevamente psicólogos
         </Typography>
         <Typography variant="body2" color="text.secondary">
           Lizards are a widespread group of squamate reptiles, with over 6,000
           species, ranging across all continents except Antarctica
         </Typography>
       </CardContent>
       <CardActions sx={{justifyContent:"end"}}>
         <Button size="small">Ver mas</Button>
       </CardActions>
      </Card>
    </Grid>
    
    <Grid item xs={6}>
      <Card className="contenedorHover"
     sx={{ maxWidth: 345,border:"1px solid black", borderRadius:"20px", borderStyle: "groove", boxShadow:"5px 5px"}}>
       <CardMedia
         sx={{ height: 180,".title": {  textAlign: "center" } }}
         image="../../src/assets/logonuevamente.png"
         title="nuevamente psicologos"
       />
       <CardContent className="contenedorTitle">
         <Typography gutterBottom variant="h5" component="div">
           nuevamente psicólogos
         </Typography>
         <Typography variant="body2" color="text.secondary">
           Lizards are a widespread group of squamate reptiles, with over 6,000
           species, ranging across all continents except Antarctica
         </Typography>
       </CardContent>
       <CardActions sx={{justifyContent:"end"}}>
         <Button size="small">Ver mas</Button>
       </CardActions>
      </Card>
      </Grid>
      </Grid> 
    </Box>
  );
}