import * as React from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";


export default function Perfil() {
  const { perfil} = useUserContext();
  const { user = {} } = perfil;
  const navigate = useNavigate();
 
  if (!Object.keys(perfil).length) return <></>;

  return (
    <h1></h1>
  );
}
