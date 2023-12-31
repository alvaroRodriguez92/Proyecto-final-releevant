import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { useCardContext } from "../../context/CardContext";

export default function CardEmpresas() {
  const { tipoServicio, setPerfilCompleto, currentCords } = useUserContext();
  const { datosEmpresa, ratonOver, empVistas, empresas } = useCardContext();

  useEffect(() => {
    if (tipoServicio !== 0) datosEmpresa(tipoServicio);
  }, [tipoServicio]);

  function distancia(userPos, empPos) {
    const R = 6371; //Radio de la tierra en KM
    const lat1 = userPos[0];
    const lng1 = userPos[1];
    const lat2 = Number(empPos.LATITUD);
    const lng2 = Number(empPos.LONGITUD);
    const distLat = ((lat2 - lat1) * Math.PI) / 180;
    const distLng = ((lng2 - lng1) * Math.PI) / 180;
    const a = Math.sin(distLat / 2) * Math.sin(distLat / 2) + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(distLng / 2) * Math.sin(distLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    const distancia = d.toFixed(2);
    return distancia;
  }
  async function handleClick(id) {
    await setPerfilCompleto(id);
  }
  
  if (!empVistas.length) return <><h5 className="mt-4 text-center">{`En mapa: ${empVistas.length} de ${empresas.length}`}</h5></>;
  return (
    <>
    <h5 className="mt-4 text-center">{`En mapa: ${empVistas.length} de ${empresas.length}`}</h5>
    <Box width="100%" sx={{ display: "flex", py: "1rem", my: "2rem" }}>
      <Grid container spacing={3}>
        {empVistas.map((item, i) => (
          <Grid sx={{ height: "30rem" }} key={item.ID} item xs={6}>
            <Card
              className="contenedorHover"
              sx={{
                maxWidth: 345,
                border: "1px solid black",
                borderRadius: "20px",
                borderStyle: "groove",
                boxShadow: "9px 9px black",
                transition: "all 0.3s",
                backgroundImage: "linear-gradient(180deg, #BBC6C7 0, #CAD3D4 25%, #DAE0E2 50%, #EAEEEF 75%, #FAFCFC 100%)",
              }}
              onMouseOver={() => ratonOver(i)}
              onMouseOut={() => ratonOver(i)}
            >
              <Box className="imagenCardContainer">
                <img className="imagenCard" src={`http://localhost:3000/imagenes/${item.IMG_NOMBRE}`} />
              </Box>
              <CardContent className="contenedorTitle">
                <Typography gutterBottom variant="h5" component="div">
                  {item.NOMBRE}
                </Typography>
                <Typography sx={{ p: { height: "6rem", overflowY: "auto" } }} variant="body2" color="text.secondary">
                  {item.DESCRIPCION}
                </Typography>
                {(currentCords.length < 2)?(<></>):(
                  <Typography gutterBottom variant="h6" component="div" sx={{ pt: "1.5rem" }}>
                  A menos de {Math.floor(distancia(currentCords, item)) + 1} Km
                </Typography>
                )}
                
              </CardContent>
              <CardActions className="buttonAction" sx={{ justifyContent: "end" }}>
                <div onClick={() => handleClick(item.ID)}>
                  <Link to={`/perfil/${item.ID}`}>
                    {" "}
                    <Button
                      className="button-material-hover"
                      sx={{ pointerEvents: "none", boxShadow: "4px 4px black", borderRadius: "10px", mr: 1 }}
                      variant="contained"
                      size="small"
                    >
                      Ver mas
                    </Button>
                  </Link>
                </div>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
}
