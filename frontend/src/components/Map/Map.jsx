import Markers from "../../components/Markers/Markers";
import { useCardContext } from "../../context/CardContext";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useUserContext } from "../../context/UserContext";
import "leaflet/dist/leaflet.css";

const center = [36.726643, -4.442089];
const zoom = 14;

function DisplayPosition({ map }) {
  const { empresas, setEmpVistas, setEmpresas } = useCardContext();
  const [position, setPosition] = useState(() => map.getBounds());
  const onMove = useCallback(() => {
    setPosition(map.getBounds());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    let ev = [];
    setEmpresas(empresas);

    empresas.map((e) => {
      if (e.LATITUD < position._northEast.lat && e.LONGITUD < position._northEast.lng && e.LATITUD > position._southWest.lat && e.LONGITUD > position._southWest.lng) {
        ev.push(e);
      }
    });

    setEmpVistas(ev);

    ev = [];
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove, position, empresas]);
}

export default function Map() {
  const [map, setMap] = useState(null);
  const { empresas } = useCardContext();
  const { currentPosition, currentCords } = useUserContext();

  function convertir(empresa) {
    const numCoordenada = {
      id: empresa.ID,
      lat: Number(empresa.LATITUD),
      lng: Number(empresa.LONGITUD),
    };
    return numCoordenada;
  }

  useEffect(() => {
    currentPosition();
  }, [empresas]);

  const displayMap = useMemo(
    () => (
      <MapContainer classname="leaflet-container" center={center} zoom={zoom} ref={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>     contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentCords.length > 0 && <Marker position={currentCords} />}
        {empresas.map((empresa) => (
          <Markers coordenadas={convertir(empresa)} key={empresa.ID} raton={empresa.hover} ID={empresa.ID} />
        ))}
      </MapContainer>
    ),
    [empresas]
  );

  return (
    <div style={{ marginBottom: "20px", position: "sticky", top: 0 }}>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  );
}
