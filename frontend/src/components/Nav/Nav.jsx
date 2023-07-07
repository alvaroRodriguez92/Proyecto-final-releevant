import { Grid, Box } from "@mui/material";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import ToggleButton2 from "../ToggleButtons/ToggleButtons2"
import { useUserContext } from "../../context/UserContext";
import {Link} from "react-router-dom"


export default function Nav() {
  const { user } = useUserContext();
  return (
    <Box>
      <Grid container spacing={2} sx={{  backgroundColor: "white", justifyContent:"space-between", pl:"7%",pr:"4%",pt:"1rem" }}>
        <Grid item xs={2} sx={{ img: { width: "80%", pl: "2rem" } }}>
          <Link to="/">
          <img src="../../public/logo3serviprosinfondo.png"/>
          </Link>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Grid sx={{ pl: "0.5rem" }}>{user && <ToggleButton2 />}</Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
