import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";


export default function CardValoraciones({ item }) {
  const stars = ["star1", "star2", "star3", "star4", "star5"];
  const rate = Number(item.PUNTUACION);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container sx={{display:"flex", flexDirection:"row"}}>
        <Grid item xs={0.7}>
        <Avatar/>
        </Grid>
        <Grid>
      <Typography sx={{ fontSize: 22, mt:"2px" }} variant="h6" gutterBottom>
      {item.NOMBRE}
      </Typography>
      </Grid>
      </Grid>
      {stars.map((star, i) => {
        if (rate === 0 || i > rate - 1) {
          return <StarBorderIcon key={i} sx={{ color: "#ffc526" }}></StarBorderIcon>;
        } else if (i <= rate - 1) {
          return <StarIcon key={i} sx={{ color: "#ffc526" }}></StarIcon>;
        }
      })}
      <Typography variant="h5" sx={{ mb: "1rem", mt: "1rem" }}>
        {item.COMENTARIO}
      </Typography>
      <Typography variant="h5" sx={{ ml: "3rem", fontWeight: "bold", mt: "3rem" }}>
        Respuesta del propietario
      </Typography>
      <Typography variant="h5" sx={{ mb: "4rem", ml: "3rem", mt: "1rem" }}>
        {item.RESPUESTA}
      </Typography>
    </Box>
  );
}
