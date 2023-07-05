import NavMain from "../../components/NavMain/NavMain";
import NavSectores from '../../components/NavSectores/NavSectores'
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Map/Map";
import CardEmpresas from "../../components/CardEmpresas/CardEmpresas";
import { Grid, Box, Avatar } from "@mui/material";



export default function Home() {
  return (
    <Box sx={{ height: "100vh", header:{position:"static", top:0, zIndex:"100"}}}>
      <header>
        <NavMain />
        <NavSectores />
      </header>
      <main className="mainWrap">
        <Grid container >
          <Grid item xs={5}>
            <CardEmpresas />
          </Grid>
          <Grid item xs={6} sx={{zIndex:0}}>
            <Map />
          </Grid>
        </Grid>
      </main>
      <Box sx={{ marginTop: "auto" }} >
        <Footer />
      </Box>
      
    </Box>
  );
}
