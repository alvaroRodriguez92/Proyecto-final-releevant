import Buscador from '../../components/Buscador/Buscador'

import {Grid,Box} from '@mui/material'
import ToggleButtons from '../ToggleButtons/ToggleButtons'

export default function NavMain() {
    return (
        <Box >
                <Grid container spacing={2}>
                    <Grid item xs={2} sx={{ img: { width: "75%",p:"2rem" } }} >
                        <img src="../../src/assets/Solventum (1).png" />
                    </Grid>
                    <Grid item xs={8} sx={{ display: "flex", alignItems: "center", a: { width: "100%" } }}>
                        <Buscador />
                    </Grid>
                    <Grid item xs={2}>
                        <ToggleButtons/>
                    </Grid>
                </Grid>
        </Box>
    )
}