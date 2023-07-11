import { useUserContext } from "../../context/UserContext";
import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ToolsIcon from "../../assets/toolsicon.avif";
import LoginForm from "../../components/LoginForm/LoginForm";
import Valoraciones from "../Valoraciones/Valoraciones";
import { Grid } from "@mui/material";

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
      <Box sx={{display:"flex", width:"90%", justifyContent:"flex-end", m:"0 auto"}}>
      <Button variant="contained" onClick={handleOpen}>
        Agregar valoraciones
        </Button>
        </Box>
      <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
        <Box sx={{ display: "flex", width: "100%",height:"100%",justifyContent: "center",alignItems: "center"}}>
          <Valoraciones onClose={handleClose}/>
        </Box>
      </Modal>
    </>
  );
}
