import Markers from "../../components/Markers/Markers";
import Layout from "../../components/Layout/Layout";
import { MapContainer, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
//import { c } from "../../common/api";

export default function Home() {
  const [coordenadas, setCoordenadas] = useState([]);
  useEffect(() => {
    async function getLocations() {
      const api = await fetch(`http://127.0.0.1:3000/user`);
      setCoordenadas(await api.json());
    }
    getLocations();
  }, []);
  // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // };

  // function success(pos) {
  //   const crd = pos.coords;

  //   console.log("Your current position is:");
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  // }

  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // const currentPosition = navigator.geolocation.getCurrentPosition((pos) => {
  //   return pos.coords;
  // });

  const currentPosition = [36.7272624, -4.4437597];
  const polo = [36.6993032, -4.4391806];
  function convertir(coordenada) {
    const numCoordenada = {
      id: coordenada.ID_USER,
      lat: Number(coordenada.LATITUD),
      lng: Number(coordenada.LONGITUD),
    };
    return numCoordenada;
  }

  return (
    <MapContainer
      classname="leaflet-container"
      center={[36.726643, -4.442089]}
      zoom={14}
    >
      <Layout />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentPosition ? (
        <Markers coordenadas={currentPosition} />
      ) : (
        alert("No esta activa o no hay permisos para acceder a su localizacion")
      )}
      <Markers coordenadas={polo} />
      {coordenadas.map((coordenada) => (
        <Markers coordenadas={convertir(coordenada)} key={coordenada} />
      ))}
      {/* <Marker position={polo} icon={miIco}>
            <Popup>
              <Tooltip direction="top" opacity={1}>
                <span> Polo Digital Málaga</span>
              </Tooltip>
              Wellcome to
              <br /> Polo Digital <br /> MALAGA
            </Popup>
          </Marker> */}
      {/* {coordenadas.map((coordenada) => {
        <Markers coordenadas={convertir(coordenada)} />;
      })} */}
    </MapContainer>
  );
}
