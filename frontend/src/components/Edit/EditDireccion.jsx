import { TextField, Box, Button, Grid } from "@mui/material";
import { FieldArray } from "formik";
import {useState} from "react"
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import DireccionBloqueados from "./utils/ComponentesEditDireccion/DireccionBloqueados";
import DireccionEditables from "./utils/ComponentesEditDireccion/DireccionEditables";
import { initialValues } from "./utils/initialValuesDatos";

export default function EditDireccion({address}) {

  console.log(address)
  const [isEditing, setIsEditing] = useState(false);

  async function onSubmit(values){
      if(!values.ID){
        const response = await fetch("http://127.0.0.1:3000/address/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (response.status === 200) {
          // await new Promise((resolve) => setTimeout(resolve, 2000));
          alert("Insert realizado con éxito")
          actions.resetForm();
        }      
      } else{
        alert("ACTUALIZADO CON ID ES DECIR UN PUTO UPDATE")
      }
    }
  

const initialValues = {DIRECCIONES:address}
  
  console.log(initialValues)
  return (
    <>
    {isEditing?(<DireccionEditables setIsEditing={setIsEditing} initialValues={initialValues} address={address} onSubmit={onSubmit}/>):(<DireccionBloqueados setIsEditing={setIsEditing} address={address}/>)}
    </>
  );
}
