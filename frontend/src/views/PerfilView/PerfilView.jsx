import { Box, Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Perfil from "../../components/Perfil/Perfil";
import ChatBot from "../../components/ChatBot/ChatBot";
import PerfilHeader from "../../components/Perfil/PerfilHeader";
import PerfilValoraciones from "../../components/Perfil/PerfilValoraciones";
import Caroussel from "../../components/Caroussel/Caroussel";
import Nav from "../../components/Nav/Nav"
import ModalValoraciones from "../../components/ModalLogin/ModalValoraciones";



export default function PerfilView() {
 
  
  return (
    <>
      <header className="mainWrap">
        <Nav/>
        </header>
        <main className="mainWrap">
      <Grid container >
        <Grid item xs={12}>
          <PerfilHeader />
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ width: "100%" }}>
            <Perfil />
          </Box>
          <Caroussel />
            <ModalValoraciones/>
            <PerfilValoraciones />
        </Grid>
        <Grid item xs={4}>
          <ChatBot />
        </Grid> 
      </Grid>
      </main>
      <Footer />
    </>
  );
}
