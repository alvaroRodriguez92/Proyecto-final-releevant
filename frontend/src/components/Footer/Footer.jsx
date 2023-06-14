import { Grid } from "@mui/material";
import Newsletter from "../Newsletter/Newsletter";
import Privacidad from "../Privacidad/Privacidad";


export default function Footer() {
    return (
      <Grid container sx={{ backgroundColor: "#4c4d4e"}}>
        <Grid item xs={6} sx={{ pl: 20, pt: 10, pb: 10 }}>
          <Privacidad size={28} />
        </Grid>
        <Grid item xs={6} sx={{ pl: 28, pt: 10, pb: 10 }}>
          <Newsletter size={52} color={"black"} />
        </Grid>
      </Grid>
    );
}