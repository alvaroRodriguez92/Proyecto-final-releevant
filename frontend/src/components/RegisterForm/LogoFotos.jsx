import { Button, Box } from "@mui/material";
import { MuiFileInput } from "mui-file-input";

//PARA ENVIARLO AL BACKEND HACER UN FORDATA "FOR DATA.APPEND"

export default function LogoFotos({formik}) {

  return (
    <Box container width="80%" sx={{display: "flex",justifyContent:"center"}}>
    <MuiFileInput
      className="fileInput"
      type="file"
      id="LOGO"
      name="LOGO"
      sx={{ mt: 8, ml: 10 }}
      label="Seleccionar Logo"
      value={formik.values.LOGO}
      onChange={(file) => {
        formik.setFieldValue("LOGO", file);
      }}      
      onBlur={formik.handleBlur}
    />

    <MuiFileInput
    multiple 
      className="fileInput"
      id="IMAGEN"
      type="file"
      name="IMAGEN"
      sx={{ mt: 8, ml: 10 }}
      label="Seleccionar Imagenes"
      value={formik.values.IMAGEN}

      onChange={(file) => {
        formik.setFieldValue("IMAGEN", file);
      }}      
      onBlur={formik.handleBlur}
    />
    </Box>
  );
}
