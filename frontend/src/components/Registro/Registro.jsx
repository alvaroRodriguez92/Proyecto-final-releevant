
import RegistroProfesional from "./RegistroProfesional";
import RegistroUser from "./RegistroUser";
import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

export default function Registro() {
  const [isOfertante, setIsOfertante] = useState(true);

  async function registrandoUsuario(e) {
    setIsOfertante(e.target.value);
  }

  console.log(isOfertante);

  return (
    <>
      <Box container sx={{ width: "30%", my: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Perfil</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={isOfertante}
            label="Perfil usuario"
            onChange={registrandoUsuario}
          >
            <MenuItem value={true}>Profesional</MenuItem>
            <MenuItem value={false}>Usuario</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {isOfertante ? (
        <>
          <h2>Registro profesional</h2>
          <RegistroProfesional />
        </>
      ) : (
        <>
          <h2>Registro usuario</h2>
          <RegistroUser />
        </>
      )}
    </>
  );
}
