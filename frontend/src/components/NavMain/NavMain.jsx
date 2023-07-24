import Buscador from "../../components/Buscador/Buscador";
import { Grid, Box } from "@mui/material";
import ToggleButton2 from "../ToggleButtons/ToggleButtons2";
import ModalLogin from "../ModalLogin/ModalLogin";
import { useUserContext } from "../../context/UserContext";

export default function NavMain() {
  const { user } = useUserContext();

  return (
    <Box className="navmain">
      <Grid container spacing={2} sx={{ pt: 2, backgroundColor: "white" }}>
        <Grid item xs={2} sx={{ img: { width: "80%", pb: "1rem", pt: "1rem" } }}>
          <img src="../../src/assets/logo3serviprosinfondo.png" />
        </Grid>
        <Grid item xs={7} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Buscador />
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          {user ? null : <ModalLogin />}
          <Grid>{user && <ToggleButton2 />}</Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
