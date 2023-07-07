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
    <h1></h1>
  );
}
