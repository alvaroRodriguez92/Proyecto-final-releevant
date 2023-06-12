import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import  {Link}  from "react-router-dom";

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
        sx={{ width: "40%" }}
        InputProps={{
          endAdornment: (
          <InputAdornment position="end">
           <SearchIcon sx={{ ml: 2, color: "black" }}/>
         </InputAdornment>
          )
      }}
      />
      </Link>
    </>
  );
}
