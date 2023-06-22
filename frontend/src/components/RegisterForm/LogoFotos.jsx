import { Button, Box } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";

//PARA ENVIARLO AL BACKEND HACER UN FORDATA "FOR DATA.APPEND"

export default function LogoFotos({formik}) {
  // const [file, setFile] = useState(null);
  // const [multifile, setMultifile] = useState(null);

  // const handleLogo = (newFile) => {
  //   setFile(newFile);
  //   console.log(file);
  // };

  // const handleImages = (newImage) => {
  //   setMultifile(newImage);
  //   console.log(multifile);
  // };

// const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

// function isValidFileType(fileName, fileType) {
//   return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
// }

// function getAllowedExt(type) {
//   return validFileExtensions[type].map((e) => `.${e}`).toString()
// } 


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
