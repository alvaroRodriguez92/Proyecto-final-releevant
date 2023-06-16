import { Box } from '@mui/material';




export default function Categorias({array}) {

console.log(array);
    return (
        
        <Box sx={{ display: "flex",columnGap:"1rem",p:"1rem" }}>
            {array.map((item, i) => 
                <button className="button" key={i}>{item.nombre}</button>
            )}
        </Box>
    )
}

// sx={{ border: "0.1rem solid black", borderRadius: "2rem", color: "black", textTransform: "unset !important" }}