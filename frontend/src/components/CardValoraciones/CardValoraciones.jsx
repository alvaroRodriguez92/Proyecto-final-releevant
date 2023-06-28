import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import StarBorderIcon  from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useUserContext } from '../../context/UserContext';
import Grid from '@mui/material/Grid';

export default function CardValoraciones({item}) {
  const stars = ["star1", "star2", "star3", "star4", "star5"]
  const rate = Number(item.PUNTUACION)

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
      
    return (
      <Grid item xs={3}>
      <Box sx={{ display: "flex", width: "100%",height:"70%", p: "2rem"}}>
      
          <Card sx={{ minWidth: 275 }}>
          <CardContent sx={{stars: {color:"#ffc526"} }}>
              <Typography sx={{ fontSize: 14 }}  gutterBottom>
              <Avatar>H</Avatar>
              </Typography>
              <Typography variant="h5" component="div">
               {item.ID_COMENTADOR}
              </Typography>
              <Typography sx={{ mb: 1.5 }} >
                {item.COMENTARIO}
              </Typography>
          </CardContent>
     
          <CardActions>
              {stars.map((star, i) => {
           
              if (rate === 0) {
                return <StarBorderIcon></StarBorderIcon>
              }
              if (i <= rate-1) {
                return <StarIcon></StarIcon>
              } 
             
            })}
            </CardActions>
        
              </Card>
            </Box>
      </Grid>
        );
}