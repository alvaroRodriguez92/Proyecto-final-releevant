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
import DatosBloqueados from "./utils/DatosBloqueados";
import DatosEditables from "./utils/DatosEditables";

import { useState, useEffect } from "react";

export default function IntroduccionDatos({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [usuario, setUsuario] = useState(null);

    async function setearUsuario() {
      user?.map((item) => {
        setUsuario({
          NOMBRE: item.NOMBRE,
          EMAIL: item.EMAIL,
          TLF: item.TLF,
          URL: item.URL,
          DESCRIPCION: item.DESCRIPCION,
        });
      })
    }
    
    useEffect(()=>{
      setearUsuario();

    },[])
    

  function editarDatos() {

      setIsEditing(true);
    
  }

  function cancelarEdit() {
    setIsEditing(false);
  }

  async function onSubmit(values) {
    const response = await fetch("http://localhost:3000/user/update/14", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.status === 200) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Actualizacion realizado con éxito");
      setIsEditing(false);
    }
  }

  return (
    // <Formik
    //   validationSchema={schema}
    //   initialValues={{NOMBRE: item.NOMBRE,
    //     EMAIL: item.EMAIL,
    //     TLF: item.TLF,
    //     URL: item.URL,
    //     DESCRIPCION: item.DESCRIPCION}}
    //   onSubmit={onSubmit}
    // >
    //   {(props) => (
        <>
          {isEditing ? (
            <>
              <DatosEditables user={user} onSubmit={onSubmit} />
              <Button
                variant="contained"
                component="label"
                onClick={cancelarEdit}
              >
                Cancelar
              </Button>
            </>
          ) : (
            <>
              <DatosBloqueados user={user} />
              <Button
                sx={{ ml: "80%", mt: "25%" }}
                variant="contained"
                component="label"
                onClick={editarDatos}
              >
                <EditIcon />
              </Button>
            </>
          )}
        </>
    //   )}
    // </Formik>
  );
}
