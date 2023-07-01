import { Box, Button, Grid } from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import EditDatos from "./EditDatos";
import EditDireccion from "./EditDireccion";
import EditImagenes from "./EditImagenes";
import { MuiFileInput } from "mui-file-input";

import { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";

export default function Edit() {
  const [infoUser, setInfoUser] = useState([]);
  const [logo, setLogo] = useState(null);
  const [nombreLogo, setNombreLogo] = useState(null);
  const { user } = useUserContext();

  console.log(user);
  console.log(infoUser);
  console.log(logo);



  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("http://localhost:3000/perfil/" + user.ID);
      const data = await response.json();
      console.log(data.images, "data");
      setInfoUser(data);
    }
    fetchUser();
  }, [nombreLogo]);

  useEffect(()=>{
    function adquirirLogo(){
      infoUser.images?.map((item)=>{
        if(item.TIPO==1){
          setNombreLogo(item.IMG_NOMBRE)
        }
      })
    }
    adquirirLogo()
  },[infoUser])

  useEffect(()=>{
    async function cambiarFoto(){
      console.log("SE EJECUTA EL CAMBIO DE FOTOOOOOOOOOOOOOOOOOOOOOOOOO")
      const formData = new FormData();

      formData.append("ID_USER", user.ID);
      formData.append("TIPO", 1);
      formData.append("imagen", logo)

      infoUser.images.map((item) => {
        if(item.TIPO==1){
        formData.append("ID", item.ID)
        }
      });
      const response = await fetch("http://127.0.0.1:3000/img/editlogo", {
        method: "POST",
        body: formData,
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data, "RESPUESTA DE LOGOOO");
        setNombreLogo(data[0].IMG_NOMBRE);
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Logo cambiado con éxito");

    }
  }
  cambiarFoto();
  }, [logo])
    

  

 
  console.log(infoUser);
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={3}>
        <Box container sx={{ display: "flex", alignItems: "flex-end", m: 5 }}>
          {nombreLogo ? (
            <img
              className="edit-logo"
              width="70%"
              height="70%"
              src={`http://localhost:3000/imagenes/${nombreLogo}`}
            />
          ) : null}
          <Button  variant="contained" component="label">
            <MuiFileInput
              hidden
              id="IMAGEN"
              type="file"
              name="IMAGEN"
              value={logo}
              onChange={(file) => {
                setLogo(file);
              }}
            />
            <EditIcon />
          </Button>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <div class="linea-v"></div>
      </Grid>
      <Grid item xs={8}>
        <Box container sx={{ display: "flex", flexDirection: "column" }}>
          <EditDatos user={infoUser.user} />
          <EditDireccion address={infoUser.address} />
          <EditImagenes images={infoUser.images} />
        </Box>
      </Grid>
    </Grid>
  );
}
