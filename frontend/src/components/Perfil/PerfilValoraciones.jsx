import { Typography, Box } from '@mui/material';
import CardValoraciones from '../CardValoraciones/CardValoraciones';


export default function PerfilValoraciones() {
    
    return (
        <>
        <Box xs={6}>
          <Typography sx={{p:"2rem"}}>
    Valoraciones clientes
        </Typography>
            <CardValoraciones />
            </Box>
            </>
    )

}