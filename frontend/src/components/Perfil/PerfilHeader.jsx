import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WebIcon from "@mui/icons-material/Web";

export default function PerfilHeader() {
  const { perfil, setPerfil, perfilCompleto, fetchPerfil } = useUserContext();

  useEffect(() => {
    fetchPerfil();
  }, [perfilCompleto]);

  if (!Object.keys(perfil).length) return <></>;
  const { user, address, images } = perfil;
  return (
    <Grid container sx={{ padding: "2rem", border: "0.1rem solid black" }}>
      <Grid item xs={3}>
        <Box sx={{ heigth: "50px", maxWidth: "100%", maxHeight: "13rem !important", p: "2rem", img: { maxHeight: "9rem !important", borderRadius: "10px", width: "100%" } }}>
          <img src={`http://localhost:3000/imagenes/${images[0].IMG_NOMBRE}`} />
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Grid container sx={{ p: "1rem" }}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "flex-start", width: "100%", m: "0.2rem", pl: "16rem" }}>
              <Typography variant="h2" component="div">
                {user[0].NOMBRE}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ fontSize: "x-large" }}>
            <Grid container>
              <Grid item xs={6} sx={{display:"flex", flexDirection:"column"}}>
                <Box>
                  <CallIcon></CallIcon>
                  {user[0].TLF}
                </Box>
                <Box>
                  <AlternateEmailIcon></AlternateEmailIcon>
                  {user[0].EMAIL}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <HomeIcon></HomeIcon> {`${address[0].TIPO_VIA} ${address[0].NOMBRE_VIA} ${address[0].NUMERO}  ${address[0].CP} ${address[0].PROVINCIA}`}
                </Box>
                <Box>
                  <WebIcon></WebIcon> {user[0].URL}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Box sx={{ display: "flex", flexDirection: "column", heigth: "100%", justifyContent: "center", p: "2rem", pl: "2rem", svg: { fontSize: "3rem" } }}>
          <Typography variant="h5">Redes Sociales</Typography>
          <Box>
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <InstagramIcon />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
