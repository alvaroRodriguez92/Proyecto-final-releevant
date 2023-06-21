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
          sx={{ width: "40rem", height: "3.5rem", ">div": { borderBottom: "unset", height: "100%", border: "1px solid black", borderRadius: "15px", ":before": { content: "none" } } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button >
                  <SearchIcon sx={{ m: "0 auto", color: "black", borderRadius: "60px", backgroundColor: "#FFEE8C", p: "0.5rem" }} />
                </Button>
              </InputAdornment>
            )
          }}
        />
      </Link>
    </>
  );
}
