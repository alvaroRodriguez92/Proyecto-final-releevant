import { Box } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import PerfilView from '../../components/PerfilView/PerfilView';


export default function Perfil() {

    return (
        <>
            <Box sx={{display:"flex"}}>
                <img className="headerImageView" src="../../src/assets/enelpsicologo.jpeg" />
                <img className="imagenLogoView" src="../../src/assets/logonuevamente.png" />
            </Box>
                <Box >
                   <PerfilView/> 
                   
                </Box>
            <Footer />
        </>
    )
}