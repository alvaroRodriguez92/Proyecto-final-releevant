import NavMain from "../../components/NavMain/NavMain";
import NavSectores from '../../components/NavSectores/NavSectores'
import Footer from "../../components/Footer/Footer";
import CardEmpresas from "../../components/CardEmpresas/CardEmpresas";
import { Grid,Box,Avatar } from "@mui/material";



export default function Home() {
  return (
    <Box sx={{height:"100vh"}}>
      <header>
        <NavMain />
      </header>
      <main>
        <NavSectores/>
        <h1>home</h1>
       
        <CardEmpresas/>
        
      </main>
      <Box sx={{marginTop:"auto"}} >
        <Footer />
      </Box>
    </Box>
  );
}
