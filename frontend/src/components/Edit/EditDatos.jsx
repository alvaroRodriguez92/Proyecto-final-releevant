import DatosBloqueados from "./utils/ComponentesEditDatos/DatosBloqueados";
import DatosEditables from "./utils/ComponentesEditDatos/DatosEditables";

import { useState, useEffect } from "react";

export default function IntroduccionDatos({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [usuarioFormik, setUsuarioFormik] = useState([]);


  useEffect(()=>{
    async function seteoUsuarioParaFormulario(){
     setUsuarioFormik(user)
    }
     seteoUsuarioParaFormulario();
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
