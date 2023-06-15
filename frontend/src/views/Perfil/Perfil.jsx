import { Box } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import CardPerfilView from '../../components/CardPerfilView/CardPerfilView';


export default function Perfil() {

    return (
        <>
            <Box sx={{display:"flex"}}>
                <img className="headerImageView" src="../../src/assets/enelpsicologo.jpeg" />
                <img className="imagenLogoView" src="../../src/assets/logonuevamente.png" />
            </Box>
                <Box >
                   <CardPerfilView/> 
                </Box>
            <Footer />
        </>
    )
}