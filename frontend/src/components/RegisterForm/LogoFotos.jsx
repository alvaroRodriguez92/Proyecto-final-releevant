import { Button, Box } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";

//PARA ENVIARLO AL BACKEND HACER UN FORDATA "FOR DATA.APPEND"

export default function LogoFotos() {
  const [file, setFile] = useState(null);
  const [multifile, setMultifile] = useState(null);

  const handleLogo = (newFile) => {
    setFile(newFile);
    console.log(file);
  };

  const handleImages = (newImage) => {
    setMultifile(newImage);
    console.log(multifile);
  };


  return (
    <>
    <MuiFileInput
      className="fileInput"
      sx={{ mt: 8, ml: 10 }}
      label="Seleccionar Logo"
      value={file}
      onChange={handleLogo}
    />

    <MuiFileInput
    multiple 
      className="fileInput"
      sx={{ mt: 8, ml: 10 }}
      label="Seleccionar Imagenes"
      value={multifile}
      onChange={handleImages}
    />
    </>
  );
}