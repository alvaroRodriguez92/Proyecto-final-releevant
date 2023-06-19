import Buscador from '../../components/Buscador/Buscador'

import {Grid,Box} from '@mui/material'
import ToggleButtons from '../ToggleButtons/ToggleButtons'
import ModalLogin from '../ModalLogin/ModalLogin'
import { useUserContext } from "../../context/UserContext";

export default function NavMain() {
    const { user } = useUserContext();
    return (
       
            <Box>
                <Grid container spacing={2} sx={{borderBottom:"0.1rem solid rgba(0,0,0,0.2) ",backgroundColor:"#efefef", boxShadow:"0 0 1px 0 black" }}>
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