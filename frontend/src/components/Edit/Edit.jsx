import { Box, Button, Grid } from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import EditDatos from "./EditDatos"
import EditDireccion from "./EditDireccion";
import EditImagenes from "./EditImagenes";

import {useState, useEffect} from "react";

export default function Edit() {

  const [infoUser, setInfoUser] = useState([])

  const ID=14;

  useEffect(()=>{
    async function fetchUser(){
      const response = await fetch("http://localhost:3000/perfil/"+ID)
      const data = await response.json()
      console.log(data.images,"data");
      setInfoUser(data)
    }
    fetchUser();
    //  console.log(infoUser.images[0].IMG_NOMBRE,"COSITAASSS")
  }, [])

  console.log(infoUser)
  return (
    <Grid container sx={{height:"100vh"}}>
        <Grid item xs={3}>
    <Box container sx={{ display:"flex" ,alignItems: "flex-end", m: 5 }}>
      {(infoUser.images>0) ? (
        <img
          className="edit-logo"
          width="70%"
          height="70%"
          src={`http://localhost:3000/imagenes/${infoUser.images[0].IMG_NOMBRE}`}
          
        />

      ): null}
      <Button variant="contained" component="label">
        <input type="file" hidden />
        <EditIcon />
      </Button>
    </Box>
    </Grid>
    <Grid item xs={1}>
    <div class="linea-v"></div>
    </Grid>
    <Grid item xs={8}>
    <Box container sx={{display: "flex", flexDirection:"column"}}>
    <EditDatos user={infoUser.user}/>
    <EditDireccion address={infoUser.address}/>
    <EditImagenes images={infoUser.images}/>
    </Box>
    </Grid>
    </Grid>
  );
}
