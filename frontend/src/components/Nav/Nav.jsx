import { Grid, Box } from "@mui/material";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import { useUserContext } from "../../context/UserContext";
import {Link} from "react-router-dom"


export default function Nav() {
  const { user } = useUserContext();
  return (
    <Box>
      <Grid container spacing={2} sx={{ borderBottom: "0.1rem solid rgba(0,0,0,0.2) ", backgroundColor: "#efefef", boxShadow: "0 0 1px 0 black",justifyContent:"space-between" }}>
        <Grid item xs={2} sx={{ img: { width: "80%", p: "2rem" } }}>
          <Link to="/">
          <img src="../../src/assets/solventumsinfondo.png"/>
          </Link>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Grid sx={{ pl: "0.5rem" }}>{user && <ToggleButtons />}</Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
