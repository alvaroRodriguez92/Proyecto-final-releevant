import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Button, MenuItem, Box } from '@mui/material'


const sectores = [{ nombre: "Dentista" }, { nombre: "Psicologo" }, { nombre: "Fisioterapeuta" }, { nombre: "Podologo" }, { nombre: "Podologo" }, { nombre: "Podologo" }, { nombre: "Podologo" }, { nombre: "Podologo" }, { nombre: "Podologo" }, { nombre: "Podologo" }]

export default function Buscador() {


  return (
    <>
      <Link >
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            placeholder="Inicia tu busqueda..."
            color="white"
            variant="filled"
            size="small"
            sx={{ width: "70%", border: "1px solid black", height: "3.5rem", div: { height: "100%" }, borderRadius: "15px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button >
                    <SearchIcon sx={{ m: "0 auto", color: "black", borderRadius: "60px", backgroundColor: "#ffd7006e" }} />
                  </Button>
                </InputAdornment>
              )
            }}
          />
      </Link>
      {/* <Link >
        <TextField
          placeholder="Busca por sector"
          hiddenLabel
          id="filled-hidden-label-small"
          color="white"
          variant="filled"
          size="small"
          select
          defaultValue={""}
          sx={{ width: "50%", border: "1px solid black", height: "3.5rem", div: { height: "100%" }, borderRadius: "15px" }}
        >
          {sectores.map((sector) => {
            return (
              <>
                <MenuItem value={sector.nombre}>{sector.nombre}</MenuItem>
              </>
            )
          })}
        </TextField>
    </Link > */}
    </>
  );
}
