import { Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import { Grid, Link } from "@mui/material";
import HttpIcon from "@mui/icons-material/Http";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LinkIcon from '@mui/icons-material/Link';

export default function Popups(id) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const api = await fetch(`http://127.0.0.1:3000/user/popup/${id.id}`);
      const result = await api.json();
      setData(result);
      setLoading(!loading);
    }
    getData();
  }, []);

  return (
    <Popup width={"auto"}>
      {data.map((datos) => {
        return (
          <Grid contained key={datos.NOMBRE}>
            <h3>{datos.NOMBRE}</h3>
            <Grid contained>
              <Grid sx={{p:3}} item md={3} xs={12}>
                <img
                  src={`http://localhost:3000/imagenes/${datos.FOTO}`}
                  alt={datos.NOMBRE}
                  width={200}
                />
              </Grid>
              <Grid sx={{width:"100%", maxWidth:"100%"}} item md={12} xs={12}>
                <Grid sx={{width:"100%"}} contained>
                  <Grid flexDirection={"column"} alignItems={"center"}>
                    <Grid sx={{p:1}}>
                      <span>
                        {/* <HttpIcon /> */}
                        <LinkIcon sx={{mr:1}}/>
                        <Link to={datos.URL} underline="none">
                          <span> {datos.URL}</span>
                        </Link>
                      </span>
                    </Grid>
                    <Grid sx={{p:1}} alignItems={"center"}>
                      <span>
                        <EmailIcon sx={{mr:1}}/>
                        {datos.EMAIL}
                      </span>
                    </Grid>
                    <Grid width="100%" sx={{p:1}}>
                      <span>
                        <HomeIcon sx={{mr:0.5}}/> {datos.TIPO_VIA} {datos.NOMBRE_VIA}{" "}
                        {datos.NUMERO}
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Popup>
  );
}
