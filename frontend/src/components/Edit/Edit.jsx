import { Box, Button, Grid, Tab, Tabs,Typography } from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import EditDatos from "./EditDatos";
import EditDireccion from "./EditDireccion";
import EditImagenes from "./EditImagenes";
import EditChatbot from "./EditChatbot";
import ChartBar from "../ChartBar/ChartBar";
import { MuiFileInput } from "mui-file-input";
import { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import PropTypes from 'prop-types';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

  

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Edit() {
  const [infoUser, setInfoUser] = useState([]);
  const [logo, setLogo] = useState(null);
  const [nombreLogo, setNombreLogo] = useState(null);
  const [value, setValue] = useState(0);
  const { user } = useUserContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("http://localhost:3000/perfil/" + user.ID);
      const data = await response.json();
      setInfoUser(data);
    }
    fetchUser();
  }, [nombreLogo]);

  useEffect(() => {
    function adquirirLogo() {
      infoUser.images?.map((item) => {
        if (item.TIPO == 1) {
          setNombreLogo(item.IMG_NOMBRE);
        }
      });
    }
    adquirirLogo();
  }, [infoUser]);

  

  useEffect(() => {
    async function cambiarFoto() {
      const formData = new FormData();

      formData.append("ID_USER", user.ID);
      formData.append("TIPO", 1);
      formData.append("imagen", logo);

      infoUser.images?.map((item) => {
        if (item.TIPO == 1) {
          formData.append("ID", item.ID);
        }
      });
      const response = await fetch("http://127.0.0.1:3000/img/editlogo", {
        method: "POST",
        body: formData,
      });
      if (response.status === 200) {
        const data = await response.json();
        setNombreLogo(data[0].IMG_NOMBRE);
      }
    }
    cambiarFoto();
  }, [logo]);

  return (
    <Grid container sx={{ height: "100vh", mt:8 }}>
      <Grid item xs={3}>
        <Box  sx={{ display: "flex", alignItems: "flex-end", m: 5 }}>
          {nombreLogo ? (
            <img
              className="edit-logo"
              width="70%"
              height="70%"
              src={`http://localhost:3000/imagenes/${nombreLogo}`}
            />
          ) : null}
          <Button variant="contained" component="label">
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
        <div className="linea-v"></div>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Datos de usuario" {...a11yProps(0)} />
            <Tab label="Direcciones" {...a11yProps(1)} />
            <Tab label="Imagenes" {...a11yProps(2)} />
            <Tab label="Configuracion de Chatbot" {...a11yProps(3)} />
            <Tab label="Visualizaciones de perfil" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <EditDatos user={infoUser.user} />
        </TabPanel>
        <TabPanel value={value} index={1}>
        <EditDireccion address={infoUser.address}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <EditImagenes images={infoUser.images} />
        </TabPanel>
        <TabPanel value={value} index={3}>
        <EditChatbot/>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <ChartBar/>
        </TabPanel>
      </Grid>
    </Grid>
  );
}