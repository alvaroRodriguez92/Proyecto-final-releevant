import { TextField, Box, Button, Grid } from "@mui/material";
import { FieldArray } from "formik";
import {useState, useEffect} from "react"
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import DireccionBloqueados from "./utils/ComponentesEditDireccion/DireccionBloqueados";
import DireccionEditables from "./utils/ComponentesEditDireccion/DireccionEditables";
import { initialValues } from "./utils/initialValuesDatos";
import { useUserContext } from "../../context/UserContext";

export default function EditDireccion({address}) {


  console.log(address)
  const [isEditing, setIsEditing] = useState(false);
  const [editExitoso, setEditExitoso] = useState([false]);
  const [addressBloqueo, setAddressBloqueo] = useState([])

  const {user} = useUserContext()

  async function onSubmit(values, index){
      if(!values.ID){
        const response = await fetch("http://127.0.0.1:3000/address/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ID_USER:user.ID, ...values}),
        });
        if (response.status === 200) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          await cambioExitoso(editExitoso, index);
          const data = await response.json()
          console.log(data,"RESPUESTA DEL INSERT")
          setAddressBloqueo(data)
          
          alert("Insert realizado con éxito")
          
          
        }      
      } else{
      const response = await fetch("http://localhost:3000/address/", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.status === 200) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await cambioExitoso(editExitoso, index);
      // console.log(await response.json(),"RESPONSEEE DE JSOON")
      setAddressBloqueo(await response.json())
      alert("UPDATE realizado con éxito")
    }
    }
  }

  useEffect(()=>{
    async function seteoDireccionParaFormulario(){
     await setAddressBloqueo(address)
    }
     seteoDireccionParaFormulario();
    console.log(addressBloqueo,"seteo usuario una sola vez")
  }, [address])

  async function cambioExitoso(array, indice){
    const aux= [...array];
        aux[indice] = true
        console.log(aux, "AUUX")
        setEditExitoso(aux)
  } 

  console.log(editExitoso,"DESPUEEE")

  async function borrarDireccion(values){
    console.log(values.ID)
    const response = await fetch("http://127.0.0.1:3000/address/", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ID:values.ID, ID_USER:values.ID_USER}),
          });
          if (response.status === 200) {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const data = await response.json()
            console.log(data)
            setAddressBloqueo(data)
            alert("DELETE realizado con éxito")
          }      
    
  }

const initialValues = {DIRECCIONES:addressBloqueo}
  
  console.log(initialValues)
  return (
    <>
    {isEditing?(<DireccionEditables setEditExitoso={setEditExitoso} borrarDireccion={borrarDireccion} editExitoso={editExitoso} setIsEditing={setIsEditing} initialValues={initialValues} addressBloqueo={addressBloqueo} onSubmit={onSubmit}/>):(<DireccionBloqueados addressBloqueo={addressBloqueo} setIsEditing={setIsEditing} address={address}/>)}
    </>
  );
}
