import Buscador from '../../components/Buscador/Buscador'

import {Grid,Avatar,Box} from '@mui/material'

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
                    <Grid>
                        <Avatar>H</Avatar>
                    </Grid>
                </Grid>
        </Box>
    )
}