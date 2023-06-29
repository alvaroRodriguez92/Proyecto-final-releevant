import { Box, Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Perfil from "../../components/Perfil/Perfil";
import ChatBot from "../../components/ChatBot/ChatBot";
import PerfilHeader from "../../components/Perfil/PerfilHeader";
import PerfilValoraciones from "../../components/Perfil/PerfilValoraciones";
import Caroussel from "../../components/Caroussel/Caroussel";

export default function PerfilView() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        
      </Box>
      <Grid container >
      <Grid item xs={12}>
      <PerfilHeader />
      </Grid>
        <Grid item xs={9}>
          <Box  sx={{width:"100%"}}>
            <Perfil />
          </Box>
          <Caroussel/>
          <PerfilValoraciones/>
        </Grid>
        <Grid item xs={3}>
          <ChatBot />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
