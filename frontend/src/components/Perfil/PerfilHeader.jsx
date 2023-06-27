import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



export default function PerfilHeader() {
    const { perfil, setPerfil, perfilCompleto } = useUserContext();

    useEffect(() => {
        async function fetchPerfil() {
            const response = await fetch(`http://localhost:3000/perfil/${perfilCompleto}`)
            const data = await response.json()
            setPerfil(data)
        }
        if (perfilCompleto) fetchPerfil()

    }, [perfilCompleto])

    if (!Object.keys(perfil).length) return <></>
    const { user, address, images } = perfil
    console.log(perfil, "perfil");
    return (

        <Grid container sx={{ padding: "2rem" }}>
            <Grid item xs={4}>
                <Box sx={{ maxWidth: "100%", img: { borderRadius: "10px" } }}>
                    <img src={`http://localhost:3000/imagenes/${images[0].IMG_NOMBRE}`} />
                </Box>
            </Grid>
            <Grid item xs={6}>
                   
                <Grid container sx={{display:"flex", flexDirection:"column"}}>
                    <Grid item xs={6}>
                        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <Typography variant="h2" component="div">
                                {user[0].NOMBRE}
                                </Typography>
                        </Box>
                                </Grid>
                    <Grid item sx={6}>
                        <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", ul: { margin: 0, minWidth: "max-content", p:"2rem" } }}>
                        
                            <ul>
                                <li>
                                    {user[0].TLF}
                                </li>
                                <li>
                                    {user[0].EMAIL}
                                </li>
                            </ul>

                        {/* <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", ul: { margin: 0, minWidth: "max-content" } }}> */}
                            <ul>
                                <li>
                                    {`${address[0].TIPO_VIA} ${address[0].NOMBRE_VIA} ${address[0].NUMERO}  ${address[0].CP} ${address[0].PROVINCIA}`}
                                </li>
                                <li>
                                    {user[0].URL}
                                </li>
                            </ul>
                        {/* </Box> */}
                        </Box>
                        </Grid>
                </Grid>
                   
            </Grid>
            <Grid item xs={2}>
                <Box sx={{ display: "flex" }}>
                    <Typography >
                        Contacto
                    </Typography>
                    <FacebookIcon />
                    <LinkedInIcon />
                    <WhatsAppIcon />
                </Box>
            </Grid>
        </Grid >


    )
}
