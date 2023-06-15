import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function CardPerfilView() {
  return (
    <Card sx={{ minWidth: 275 , m:"4rem"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {bull}nuevamente{bull}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ¿Estás pasando por una situación difícil y necesitas ayuda para superarla? Somos el gabinete de psicología de Málaga experto en tratar los
          diferentes problemas y trastornos presentes en la actualidad. Nos encontramos en pleno centro de Málaga (frente a El Corte Inglés).
          El tratamiento psicológico que llevamos a cabo es especializado.
        </Typography>
        <Typography variant="body2">
          {bull}ofrecer a cada paciente una atención psicológica “a medida”, efectiva y adaptada a su problema
          {bull}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

