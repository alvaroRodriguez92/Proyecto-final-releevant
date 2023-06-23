import { Box, Button, Grid } from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import EditDatos from "./EditDatos"
import EditDireccion from "./EditDireccion";

export default function Edit() {
  return (
    <Grid container sx={{height:"100vh"}}>
        <Grid item xs={3}>
    <Box container sx={{ display:"flex" ,alignItems: "flex-end", m: 5 }}>
      <img
        className="edit-logo"
        width="70%"
        height="70%"
        src="http://127.0.0.1:3000/imagenes/logonuevamente.png"
      />
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
    <EditDatos/>
    <EditDireccion/>
    </Box>
    </Grid>
    </Grid>
  );
}
