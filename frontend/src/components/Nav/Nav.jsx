import { Grid, Box } from "@mui/material";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import ToggleButton2 from "../ToggleButtons/ToggleButtons2"
import { useUserContext } from "../../context/UserContext";
import {Link} from "react-router-dom"
import ModalLogin from '../ModalLogin/ModalLogin'



export default function Nav() {
  const { user } = useUserContext();
  return (
    <Box >
      <Grid container spacing={2} sx={{pt:2,backgroundColor:"white"}}>
        <Grid item xs={2} sx={{ img: { width: "80%",pb:"1rem",pt:"1rem" } }} >
          <Link to="/">
          <img src="../../public/logo3serviprosinfondo.png"/>
          </Link>
        </Grid>
        <Grid item xs={7}>
        </Grid>
        <Grid item xs={3} sx={{display:"flex", alignItems:"center", justifyContent: "space-around"}}> 
          {user?(null):(<ModalLogin />)}
          <Grid>
              {user && <ToggleButton2 />}
          </Grid>           
        </Grid>
      </Grid>
    </Box>
  );
}
