import Buscador from "../../components/Buscador/Buscador";
import Footer from "../../components/Footer/Footer";
import { Grid } from "@mui/material";
import Caroussel from "../../components/Caroussel/Caroussel";

export default function Home() {
  return (
    <>
      <header>
        <Grid item xs={6} sx={{ pl: 20, pt: 10, pb: 10 }}>
          <Buscador />
        </Grid>
      </header>
          <main>
              <Caroussel/>
      </main>
      <Grid item xs={6} sx={{ pl: 20, pt: 10, pb: 10}}>
        <Footer />
      </Grid>
    </>
  );
}
