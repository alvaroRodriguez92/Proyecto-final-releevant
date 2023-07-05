import * as React from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button, Typography, Grid, Card, Box, CardActions, CardContent } from "@mui/material";
import CardValoraciones from "../CardValoraciones/CardValoraciones";
import PerfilHeader from "./PerfilHeader";
import Footer from "../Footer/Footer";

export default function Perfil() {
  const { perfil} = useUserContext();
  const { user = {} } = perfil;
  const navigate = useNavigate();
 
  if (!Object.keys(perfil).length) return <></>;

  return (
    <Grid item xs={12} >
      <Typography variant="h4" sx={{ display: "flex", justifyContent: "flex-start", pt: "5rem",pr:"5rem",pb:"5rem" }}>
        {user[0]?.DESCRIPCION}
      </Typography>
    </Grid>
  );
}
