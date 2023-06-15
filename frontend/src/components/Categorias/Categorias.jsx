import { Button,Box } from '@mui/material';




export default function Categorias({array}) {

console.log(array);
    return (
        
        <Box sx={{ display: "flex" }}>
            {array.map((item, i) => 
                <Button key={i} sx={{ border: "0.1rem solid black", borderRadius: "2rem", color: "black", textTransform: "unset !important" }}>{item.nombre}</Button>
            )}
        </Box>
    )
}