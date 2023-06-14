import Buscador from '../../components/Buscador/Buscador'

import {Grid,Box} from '@mui/material'
import ToggleButtons from '../ToggleButtons/ToggleButtons'

export default function Layout() {
    return (
        <Box >
                <Grid container spacing={2}>
                    <Grid item xs={2} sx={{ img: { width: "50%" } }} >
                        <img src="../../src/assets/logowebsinfondo.png" />
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