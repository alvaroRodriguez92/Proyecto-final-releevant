import Markers from "../../components/Markers/Markers";
import { useCardContext } from "../../context/CardContext";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const { empresas } = useCardContext();
  const { currentPosition, currentCords, raton } = useUserContext();
  
  useEffect(() => {
  
    currentPosition()
    
  }, []);
  
  const cPosition = [36.7272624, -4.4437597];
  
  function convertir(empresa) {
    const numCoordenada = {
      id: empresa.ID,
      lat: Number(empresa.LATITUD),
      lng: Number(empresa.LONGITUD),
    };
    return numCoordenada;
  }

  return (
    <MapContainer
      
      classname="leaflet-container"
      center={[36.726643, -4.442089]}
      zoom={14}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentCords.length > 0 && (
        <Marker position={currentCords} />
      )}
      {cPosition ? (
        <Markers coordenadas={cPosition} />
      ) : (
        alert("No esta activa o no hay permisos para acceder a su localizacion")
      )}
      
      {empresas.map((empresa) => (
        <Markers coordenadas={convertir(empresa)} key={empresa.ID}/>
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