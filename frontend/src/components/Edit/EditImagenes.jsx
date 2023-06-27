import { Button, Box } from "@mui/material";
import { MuiFileInput } from "mui-file-input";

export default function EditImagenes(){

    return (
        <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        //   border:"1px solid black",
        borderRadius: 2,
        width: "80%",
        p: 5,
        margin: "0 auto",
        alignItems:"center",
        mt: 20,
        mb:20,
        borderLeft: "2px solid #000",
        borderRight: " 2px solid #000",
        borderBottom: " 2px solid #000",
        boxShadow: "1px 1px 3px 1px black",
        position: "relative",
      }}
    >
      <h3 className="titulos-form">Imagenes </h3>
    
        <MuiFileInput
        multiple 
          className="fileInput"
          id="IMAGEN"
          type="file"
          name="IMAGEN"
          sx={{ mt: 8, ml: 10, width:"50%" }}
          label="Seleccionar Imagenes"
        //   value={formik.values.IMAGEN}
    
        //   onChange={(file) => {
        //     formik.setFieldValue("IMAGEN", file);
        //   }}      
        //   onBlur={formik.handleBlur}
        />
        </Box>
      );
    }
    