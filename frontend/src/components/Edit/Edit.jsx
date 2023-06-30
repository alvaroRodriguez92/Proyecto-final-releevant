import { Box, Button, Grid } from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import EditDatos from "./EditDatos"
import EditDireccion from "./EditDireccion";
import EditImagenes from "./EditImagenes";

import {useState, useEffect} from "react";
import { useUserContext } from "../../context/UserContext";

export default function Edit() {

  const [infoUser, setInfoUser] = useState([])
  const {user} = useUserContext()

  console.log(user)
  console.log(infoUser)

  useEffect(()=>{
    async function fetchUser(){
      const response = await fetch("http://localhost:3000/perfil/"+user.ID)
      const data = await response.json()
      console.log(data.images,"data");
      setInfoUser(data)
    }
    fetchUser();
  }, [])

  async function cambiarFoto(){
    const formData = new FormData();

    formData.append("ID_USER", user.ID);
    formData.append("TIPO", 1);

    infoUser.map((item) => {
      if(item.TIPO==1){
      formData.append("ID", item.ID)
      }
    });
    const response = await fetch("http://127.0.0.1:3000/", {
      method: "POST",
      body: formData,
    });
    if (response.status === 200) {
      // const data = await response.json();
      console.log(data, "DATAAA DE LOGO");
      // setImagenesMap(data);
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Logo cambiado con éxito");
  
  }
}

  

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
      <Button onclick={cambiarFoto} variant="contained" component="label">
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
