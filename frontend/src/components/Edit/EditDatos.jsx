import {
  TextField,
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { Formik } from "formik";
import { initialValues } from "./utils/initialValuesDatos";
import { schema } from "./utils/schemaDatos";
import EditIcon from "@mui/icons-material/Edit";
import DatosBloqueados from "./utils/ComponentesEditDatos/DatosBloqueados";
import DatosEditables from "./utils/ComponentesEditDatos/DatosEditables";

import { useState, useEffect } from "react";

//Pasar el INFOUSER AL HIJO CON EL SETTER, Y DESPUÉS SETEAR EN EL PATCH EL NEW USER AL INFO USER Y 
//IMPRIMIRLO EN LA PARTE DE BLOQUEOS

export default function IntroduccionDatos({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [usuarioFormik, setUsuarioFormik] = useState([]);


  useEffect(()=>{
    async function seteoUsuarioParaFormulario(){
     await setUsuarioFormik(user)
    }
     seteoUsuarioParaFormulario();
    console.log(usuarioFormik,"seteo usuario una sola vez")
  }, [user])

  async function onSubmit(values) {
    const response = await fetch("http://localhost:3000/user/update/14", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.status === 200) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setUsuarioFormik(await response.json())
      // setUsuarioFormik(await response.json(), "QUE COJONEEESSDSÑJLDFSAKJDFS")
      
      setIsEditing(false);
    }
  }

  return (
        <>
          {isEditing ? (
              <DatosEditables user={usuarioFormik} onSubmit={onSubmit} isEditing={isEditing} setIsEditing={setIsEditing} />
              
          ) : (
              <DatosBloqueados usuarioFormik={usuarioFormik} isEditing={isEditing} setIsEditing={setIsEditing} />
              
          )}
        </>
  );
}
