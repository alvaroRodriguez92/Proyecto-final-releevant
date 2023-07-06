import Buscador from '../../components/Buscador/Buscador'
import {Grid,Box} from '@mui/material'
import ToggleButtons from '../ToggleButtons/ToggleButtons'
import ModalLogin from '../ModalLogin/ModalLogin'
import { useUserContext } from "../../context/UserContext";

export default function NavMain() {
    const { user } = useUserContext();
    return (
       
            <Box className="navmain">
                <Grid container spacing={2} sx={{backgroundColor:"#efefef"}}>
                    <Grid item xs={2} sx={{ img: { width: "80%", pl:"2rem",pb:"1rem",pt:"1rem" } }} >
                        <img src="../../public/logo2sinfondo.png" />
                    </Grid>
                    <Grid item xs={8} sx={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
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