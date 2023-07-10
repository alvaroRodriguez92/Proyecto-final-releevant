import Footer from "../../components/Footer/Footer";
import { Box } from "@mui/material";
import Registro from "../../components/Registro/Registro";
import {Link} from "react-router-dom"


export default function Home() {
  return (
    <Box sx={{ height: "100vh" }}>
      <header className="mainWrap">
        <Box sx={{ img: { width: "11%", pb: "1rem", pt: "1rem" } }}>
          <Link to="/"><img src="../../src/assets/logo3serviprosinfondo.png" /></Link>
        </Box>
      </header>
      <main className="mainWrap">
        <Registro />
      </main>
      <Box sx={{ marginTop: "auto" }}>
        <Footer />
      </Box>
    </Box>
  );
}
