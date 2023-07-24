import { useState, useEffect } from "react";
import DireccionBloqueados from "./utils/ComponentesEditDireccion/DireccionBloqueados";
import DireccionEditables from "./utils/ComponentesEditDireccion/DireccionEditables";
import { useUserContext } from "../../context/UserContext";

export default function EditDireccion({ address }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editExitoso, setEditExitoso] = useState([false]);
  const [addressBloqueo, setAddressBloqueo] = useState([]);

  const { user } = useUserContext();

  async function onSubmit(values, index) {
    if (!values.ID) {
      const response = await fetch("http://127.0.0.1:3000/address/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID_USER: user.ID, ...values }),
      });
      if (response.status === 200) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await cambioExitoso(editExitoso, index);
        const data = await response.json();
        console.log(data, "RESPUESTA DEL INSERT");
        setAddressBloqueo(data);
      }
    } else {
      const response = await fetch("http://localhost:3000/address/", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await cambioExitoso(editExitoso, index);
        setAddressBloqueo(await response.json());
        alert("UPDATE realizado con éxito");
      }
    }
  }

  useEffect(() => {
    async function seteoDireccionParaFormulario() {
      setAddressBloqueo(address);
    }
    seteoDireccionParaFormulario();
  }, [address]);

  async function cambioExitoso(array, indice) {
    const aux = [...array];
    aux[indice] = true;
    setEditExitoso(aux);
  }

  async function borrarDireccion(values) {
    if (values.ID) {
      const response = await fetch("http://127.0.0.1:3000/address/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID: values.ID, ID_USER: values.ID_USER }),
      });
      if (response.status === 200) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const data = await response.json();
        console.log(data);
        setAddressBloqueo(data);
      }
    }
  }
  const initialValues = { DIRECCIONES: addressBloqueo };
  return (
    <>
      {isEditing ? (
        <DireccionEditables
          setEditExitoso={setEditExitoso}
          borrarDireccion={borrarDireccion}
          editExitoso={editExitoso}
          setIsEditing={setIsEditing}
          initialValues={initialValues}
          addressBloqueo={addressBloqueo}
          onSubmit={onSubmit}
        />
      ) : (
        <DireccionBloqueados addressBloqueo={addressBloqueo} setIsEditing={setIsEditing} address={address} />
      )}
    </>
  );
}
