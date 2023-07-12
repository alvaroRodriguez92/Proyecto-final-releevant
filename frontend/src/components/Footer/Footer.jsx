import { Grid } from "@mui/material";
import Newsletter from "../Newsletter/Newsletter";
import Privacidad from "../Privacidad/Privacidad";


export default function Footer() {
    return (
      <Grid container sx={{ backgroundColor: "#144944"}}>
        <Grid item xs={6} sx={{ pl: 22, py:4 }}>
          <Privacidad size={28} />
        </Grid>
        <Grid item xs={6} sx={{ pl: 45, py:4 }}>
          <Newsletter  />
        </Grid>
      </Grid>
    );
}