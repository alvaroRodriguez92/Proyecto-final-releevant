import * as React from "react";
import { useUserContext } from "../../context/UserContext";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export default function ToggleButtons2() {
  const { logout, user } = useUserContext();

  return (
    <Grid container sx={{ml:"3rem",width: "100%", height: "100%" }}>
      <Grid item xs={6}>
        <Link
          to={`/perfil/edit/${user.ID}`}
          style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
        >
          <Button variant="outlined" sx={{ fontWeight: 700, p:"0.9rem 0.9rem", borderRadius: "16px", boxShadow:"0 0.2rem 0.2rem" }}>
            <PersonIcon sx={{ mr: 1 }} /> Perfil
          </Button>
        </Link>
      </Grid>
      <Grid item xs={6}>
      <Button
        variant="outlined"
        onClick={logout}
        sx={{ marginLeft: "2rem", fontWeight: 700,p:"0.9rem 0.9rem",borderRadius: "16px", boxShadow:"0 0.2rem 0.2rem"}}
      >
        <LogoutIcon sx={{ mr: 1 }} />
        Logout
      </Button>
    </Grid>
    </Grid>
  );
}