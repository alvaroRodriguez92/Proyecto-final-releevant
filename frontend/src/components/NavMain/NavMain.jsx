import Buscador from '../../components/Buscador/Buscador'
import {Grid,Box} from '@mui/material'
import ToggleButtons from '../ToggleButtons/ToggleButtons'
import ModalLogin from '../ModalLogin/ModalLogin'
import { useUserContext } from "../../context/UserContext";

export default function NavMain() {
    const { user } = useUserContext();
    return (
       
            <Box className="navmain">
                <Grid container spacing={2} sx={{pl:"7%",pr:"5%",borderBottom:"0.1rem solid rgba(0,0,0,0.2) ",backgroundColor:"#whiteSmoke", boxShadow:"0 0 1px 0 black" }}>
                    <Grid item xs={3} sx={{ img: { width: "70%",p:"1rem" } }} >
                        <img src="../../src/assets/logo2serviprosinfondo.png" />
                    </Grid>
                    <Grid item xs={7} sx={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
                        <Buscador />
                    </Grid>
                    <Grid item xs={2} sx={{display:"flex", alignItems:"center", justifyContent: "space-around"}}>
                    {user?(null):(<ModalLogin />)}
                    <Grid sx={{pl:"0.5rem"}}>
                        {user && <ToggleButtons />}
                        </Grid>
                    </Grid>
                </Grid>
        </Box>
        
    )
}