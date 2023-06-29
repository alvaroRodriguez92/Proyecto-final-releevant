import { Typography, Box } from '@mui/material';
import CardValoraciones from '../CardValoraciones/CardValoraciones';
import { useUserContext } from '../../context/UserContext';
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';


export default function PerfilValoraciones() {
    const { valoraciones,setValoraciones, perfil } = useUserContext();

    
    useEffect(() => {
        async function fetchPerfilValoraciones() {
            const id = await perfil.address[0]?.ID_USER || ""
            
            const response = await fetch(`http://127.0.0.1:3000/valoraciones/coment/${id}`)
            const data = await response.json();
    
            setValoraciones(data)
        }
        fetchPerfilValoraciones()
    }, [perfil])

    return (
        
            <Box xs={6}>
                <Typography variant="h5" sx={{ p: "2rem" }}>
                    Valoraciones clientes
            </Typography>
            <Grid container spacing={2}>
                {valoraciones.map((item, i) => <CardValoraciones item={item} />)}
                </Grid>
            </Box>
        
    )

}