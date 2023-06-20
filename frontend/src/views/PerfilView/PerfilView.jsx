import { Box } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import Perfil from '../../components/Perfil/Perfil';

export default function PerfilView() {

    return (
        <>
            <Box sx={{display:"flex"}}>
                <img className="headerImageView" src="../../src/assets/enelpsicologo.jpeg" />
                <img className="imagenLogoView" src="../../src/assets/logonuevamente.png" />
            </Box>
                <Box >
                   <Perfil/> 
                </Box>
            <Footer />
        </>
    )
}