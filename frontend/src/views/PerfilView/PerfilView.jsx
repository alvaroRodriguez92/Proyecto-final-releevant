import { Box, Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Perfil from "../../components/Perfil/Perfil";
import ChatBot from "../../components/ChatBot/ChatBot";

export default function PerfilView() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <img
          className="headerImageView"
          src="../../src/assets/enelpsicologo.jpeg"
        />
        <img
          className="imagenLogoView"
          src="../../src/assets/logonuevamente.png"
        />
      </Box>
      <Grid container >
        <Grid item xs={9}>
          <Box  sx={{width:"100%"}}>
            <Perfil />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <ChatBot />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
