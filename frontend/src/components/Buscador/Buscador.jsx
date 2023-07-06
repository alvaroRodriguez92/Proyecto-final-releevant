import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useCardContext } from "../../context/CardContext";
import { useUserContext } from "../../context/UserContext";

export default function Buscador() {
  const { buscar, setBuscar, setEmpresas } = useCardContext();
  const { setTipoServicio } = useUserContext();

  function handleBuscar(e) {
    setBuscar(e.target.value);
  }

  async function buscarEmpresas() {
    let datos = [];
    const response = await fetch(`http://127.0.0.1:3000/buscar/${buscar}`);
    const data = await response.json();
    data.map((d) => {
      datos.push({ ...d, hover: false });
    });
    setEmpresas(datos);
  }

  return (
    <>
      <Link>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          placeholder="Inicia tu busqueda..."
          color="white"
          variant="filled"
          size="small"
          onChange={handleBuscar}
          sx={{
            width: "40rem",
            height: "3.5rem",
            ">div": { borderBottom: "unset", height: "100%", border: "1px solid black", borderRadius: "15px", ":before": { content: "none" } },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  onClick={() => {
                    buscarEmpresas();
                    setTipoServicio(0);
                  }}
                >
                  <SearchIcon sx={{ m: "0 auto", color: "black", borderRadius: "60px", backgroundColor: "#FFEE8C", p: "-0.5rem" }} />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Link>
    </>
  );
}
