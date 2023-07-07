import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import WebIcon from "@mui/icons-material/Web";
import EmailIcon from "@mui/icons-material/Email";

export default function PerfilHeader() {
  const { perfil,perfilCompleto, fetchPerfil } = useUserContext();

  useEffect(() => {
    fetchPerfil();
  }, [perfilCompleto]);

  if (!Object.keys(perfil).length) return <></>;
  const { user, address, images } = perfil;
  return (
    <>
    <Grid container sx={{mt:4,display:"flex", flexDirection:"row"}}>
    <Grid item xs={4}>
      <Grid container sx={{pb:5,borderRight:"2px solid grey",borderRadius:"20px", borderBottom:"2px solid grey",display:"flex", flexDirection:"column"}}>
      
      <Grid item xs={8} sx={{heigth: "100%", maxWidth: "100%", maxHeight: "8rem !important", pt: "2rem",pr:"2rem",pb:"2rem", img: { maxHeight: "7rem !important", borderRadius: "10px", width: "60%" } }}>
          {images[0].IMG_NOMBRE ? (<img src={`http://localhost:3000/imagenes/${images[0].IMG_NOMBRE}`} />): null}
      </Grid>
      <Grid sx={{mt:3}} item xs={10}>
                <Box sx={{mt:1}}>
                  <CallIcon sx={{mr:1}}></CallIcon>
                  {user[0]?.TLF}
                </Box>
                <Box sx={{mt:1}}>
                  <EmailIcon sx={{mr:1}}></EmailIcon>
                  {user[0]?.EMAIL}
                </Box>

                <Box sx={{mt:1}}>
                  <HomeIcon sx={{mr:0.5}}></HomeIcon> {`${address[0].TIPO_VIA} ${address[0].NOMBRE_VIA} ${address[0].NUMERO}  ${address[0].CP} ${address[0].PROVINCIA}`}
                </Box>
                <Box sx={{mt:1}}>
                  <WebIcon sx={{mr:1}}></WebIcon>
                  {user[0]?.URL}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", heigth: "100%", justifyContent: "start",mt:3,svg: { fontSize: "2rem" } }}>
          <Typography variant="h6">Redes Sociales</Typography>
          <Box>
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <InstagramIcon />
          </Box>
        </Box>
            </Grid>
            </Grid>
            </Grid>
            
            <Grid item xs={7}>
        <Box sx={{ ml:10,display: "flex", justifyContent: "center", width: "100%" }}>
          <Typography variant="h3" component="div">
            {user[0]?.NOMBRE}
          </Typography>
          </Box>
          <Box sx={{ ml:17.5,display: "flex", justifyContent: "center", pt:"2rem", width: "100%" }}>
      <Typography variant="h5" >
        {user[0]?.DESCRIPCION}
            </Typography>
            </Box>
            </Grid>
            </Grid>

            </>
  );
}
