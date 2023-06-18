import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function CardValoraciones() {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
      
    return (
        <>
            <Box sx={{ display: "flex", p: "1rem", width: "50%"}}>
                <Box sx={{m:"1rem"}}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }}  gutterBottom>
              <Avatar>H</Avatar>
              </Typography>
              <Typography variant="h5" component="div">
               nombre cliente
              </Typography>
              <Typography sx={{ mb: 1.5 }} >
                Gran servicio rápido y con soluciones para todo
              </Typography>
              <Typography variant="body2">
                Sin duda unos grandes profesionales
              </Typography>
            </CardContent>
            <CardActions>
                    <StarBorderIcon></StarBorderIcon>
                    <StarBorderIcon></StarBorderIcon>
                    <StarBorderIcon></StarBorderIcon>
                    <StarBorderIcon></StarBorderIcon>
                    <StarBorderIcon></StarBorderIcon>
            </CardActions>
            </Card>
            </Box>
        
        <Box sx={{ width:"50%", m:"1rem"}}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
            <Avatar>H</Avatar>
            </Typography>
            <Typography variant="h5" component="div">
             nombre cliente
            </Typography>
            <Typography sx={{ mb: 1.5 }} >
              Gran servicio rápido y con soluciones para todo
            </Typography>
            <Typography variant="body2">
              Sin duda unos grandes profesionales
            </Typography>
          </CardContent>
          <CardActions>
                  <StarBorderIcon></StarBorderIcon>
                  <StarBorderIcon></StarBorderIcon>
                  <StarBorderIcon></StarBorderIcon>
                  <StarBorderIcon></StarBorderIcon>
                  <StarBorderIcon></StarBorderIcon>
          </CardActions>
          </Card>
      </Box>
            </Box>
        </>
        );
}