import { useUserContext } from "../../context/UserContext";
import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ToolsIcon from "../../assets/toolsicon.avif";
import LoginForm from "../../components/LoginForm/LoginForm";
import Valoraciones from "../Valoraciones/Valoraciones";
import { Grid,Typography } from "@mui/material";

const styleLogin = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalValoraciones() {
  const [open, setOpen] = React.useState(false);
  const { user } = useUserContext();
  const [activar,setActivar] = useState();
  
  useEffect(() => {
    if (!user) {
      setActivar(false);
    } else {
      setActivar(true);
    }
  }, [user]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      
      <Grid container>
      <Grid item xs={6}>
      <Typography variant="h4" sx={{ width:"100%", m:"0 auto",pt:"3rem",pb:"1rem"}}>
        Valoraciones clientes
        </Typography>
        </Grid>
        {(user) ? (<Grid item xs={6} sx={{ textAlign:"end",pr:"4rem",pt:"3rem",pb:"1rem" }}>
      <Button variant="contained" onClick={handleOpen}>
        Agregar valoraciones
          </Button>
          </Grid>) : (<></>)}
        </Grid>
      <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
        <Box sx={{ display: "flex", width: "100%",height:"100%",justifyContent: "center",alignItems: "center"}}>
          <Valoraciones onClose={handleClose}/>
        </Box>
      </Modal>
    </>
  );
}
