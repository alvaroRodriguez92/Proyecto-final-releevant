import Markers from "../../components/Markers/Markers";
import { useCardContext } from "../../context/CardContext";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useState, useEffect, useRef } from "react";
import { useUserContext } from "../../context/UserContext";
import "leaflet/dist/leaflet.css";
import L, { latLng } from 'leaflet'


export default function Map() {
  const { empresas } = useCardContext();
  const { currentPosition, currentCords} = useUserContext();
  
 
  useEffect(() => {
    currentPosition()
   
  }, []);



  const FlyToButton = () => {
    const map = useMap();

    const handleFlyTo = () => {
      const target = [36.726643, -4.442089]; // Coordenadas a las que quieres volar
      const zoom = 14; // Nivel de zoom deseado

      map.flyTo(target, zoom);
    };

    return (
      <button onClick={handleFlyTo}>Hacer FlyTo</button>
    );
  };
  
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
      style={{marginBottom: "20px", position:"sticky",top:0}}
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
      
        {empresas.map((empresa) => (
          <Markers coordenadas={convertir(empresa)} key={empresa.ID} raton={empresa.hover} ID={empresa.ID}/>
        ))}
      <FlyToButton sx={{with: "100%"}}/>
    </MapContainer>
  );
}