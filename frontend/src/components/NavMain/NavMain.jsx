import Buscador from '../../components/Buscador/Buscador'

import {Grid,Box} from '@mui/material'
import ToggleButtons from '../ToggleButtons/ToggleButtons'
import ModalLogin from '../ModalLogin/ModalLogin'
import { useUserContext } from "../../context/UserContext";

export default function NavMain() {
    const { user } = useUserContext();
    return (
       
            <Box>
                <Grid container spacing={2} sx={{backgroundColor:"#e5e1e1"}}>
                    <Grid item xs={2} sx={{ img: { width: "80%",p:"2rem" } }} >
                        <img src="../../src/assets/solventumsinfondo.png" />
                    </Grid>
                    <Grid item xs={8} sx={{ display: "flex", alignItems: "center", a: { width: "100%" } }}>
                        <Buscador />
                    </Grid>
                    <Grid item xs={2} sx={{display:"flex", alignItems:"center"}}>
                    <ModalLogin />
                    {!user && <ToggleButtons />}
                    </Grid>
                </Grid>
        </Box>
        
    )
}