import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardEmpresas() {
  return (
    <Card 
    sx={{ maxWidth: 345,border:"1px solid black", borderRadius:"20px", borderStyle: "groove", boxShadow:"5px 5px"}}>
      <CardMedia
        sx={{ height: 140,".title": {  textAlign: "center" } }}
        image="../../src/assets/logonuevamente.png"
        title="nuevamente psicologos"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          nuevamente psicólogos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver mas</Button>
      </CardActions>
    </Card>
    
  );
}