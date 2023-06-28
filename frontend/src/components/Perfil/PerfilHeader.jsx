import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function PerfilHeader() {
    const { perfil, setPerfil, perfilCompleto, fetchPerfil } = useUserContext();

    useEffect(() => {
        fetchPerfil()
    }, [perfilCompleto])

    if (!Object.keys(perfil).length) return <></>
    const { user, address, images } = perfil
    return (

        <Grid container sx={{ padding: "2rem" }}>
            <Grid item xs={3}>
                <Box sx={{heigth:"100%", maxWidth: "100%", p: "2rem", img: { borderRadius: "10px" } }}>
                    <img src={`http://localhost:3000/imagenes/${images[0].IMG_NOMBRE}`} />
                </Box>
            </Grid>
            <Grid item xs={7}>

                <Grid container sx={{ p: "1rem" }}>
                    <Grid item xs={12}>
                        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <Typography variant="h2" component="div">
                                {user[0].NOMBRE}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", ul: { margin: 0, minWidth: "max-content", p: "2rem" } }}>

                            <ul>
                                <li>
                                    {user[0].TLF}
                                </li>
                                <li>
                                    {user[0].EMAIL}
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    {`${address[0].TIPO_VIA} ${address[0].NOMBRE_VIA} ${address[0].NUMERO}  ${address[0].CP} ${address[0].PROVINCIA}`}
                                </li>
                                <li>
                                    {user[0].URL}
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={2}>
                <Box sx={{ display: "flex", flexDirection: "column", heigth: "100%", justifyContent: "center", p: "2rem", pl: "2rem" }}>
                    <Typography >
                        Redes Sociales
                    </Typography>
                    <Box>
                        <FacebookIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </Box>
                </Box>
            </Grid>
        </Grid >


    )
}
