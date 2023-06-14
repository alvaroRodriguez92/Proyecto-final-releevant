import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import  {Link}  from "react-router-dom";
import { Button } from '@mui/material'


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
        sx={{ width: "40%", border:"1px solid black", height:"3.5rem", div:{height:"100%"}, borderRadius:"15px"}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button >
                <SearchIcon sx={{ m: "0 auto", color: "black",  borderRadius:"60px", backgroundColor:"#ffd7006e" }} />
                </Button>
         </InputAdornment>
          )
      }}
      />
      </Link>
    </>
  );
}
