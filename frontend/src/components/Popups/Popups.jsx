import { Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import { Grid, Link } from "@mui/material";
import HttpIcon from "@mui/icons-material/Http";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
//import Spinner from "../Spinner/Spinner";

//import { alignProperty } from "@mui/material/styles/cssUtils";

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

  //if (loading) return <Spinner />;

  return (
    <Popup width={"auto"}>
      {data.map((datos) => {
        return (
          <Grid contained key={datos.NOMBRE}>
            <h3>{datos.NOMBRE}</h3>
            <Grid contained>
              <Grid md={3} xs={12}>
                <img
                  src={`http://localhost:3000/logo/${datos.FOTO}`}
                  alt={datos.NOMBRE}
                  width={200}
                />
              </Grid>
              <Grid md={9} xs={12}>
                <Grid contained>
                  <Grid flexDirection={"column"} alignItems={"center"}>
                    <Grid>
                      <span>
                        <HttpIcon />
                        <Link to={datos.URL} underline="none">
                          <span> {datos.URL}</span>
                        </Link>
                      </span>
                    </Grid>
                    <Grid alignItems={"center"}>
                      <span>
                        <EmailIcon />
                        {datos.EMAIL}
                      </span>
                    </Grid>
                    <Grid>
                      <span>
                        <HomeIcon /> {datos.TIPO_VIA} {datos.NOMBRE_VIA}{" "}
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
