import { Button, Box, Grid } from "@mui/material";
import { MuiFileInput } from "mui-file-input";

export default function EditImagenes({images}){

  console.log(images)
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
      <h3 className="titulos-form-imagenes">Imagenes </h3>
    
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
        <Grid container spacing={1} sx={{mt:3,ml:9, mr:9}}>
        {images?.map((item)=>{
          if(item.TIPO==0){
            return(
              <Grid item xs={3}>
           <img className="edit-imagen" width="248px" height="248px" src={`http://localhost:3000/imagenes/${item.IMG_NOMBRE}`}/> 
          </Grid>
            )
          }
        })}
      </Grid>
        </Box>
      );
    }
    