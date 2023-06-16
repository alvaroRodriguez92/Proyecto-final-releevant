
import Footer from "../../components/Footer/Footer";
import { Grid, Box, Avatar } from "@mui/material";
import Registro from "../../components/Registro/Registro";



export default function Home() {
  return (
    <Box sx={{ height: "100vh" }}>
      <header>
      </header>
      <main>
        <Registro/>
      </main>
      <Box sx={{ marginTop: "auto" }} >
        <Footer />
      </Box>
    </Box>
  );
}
