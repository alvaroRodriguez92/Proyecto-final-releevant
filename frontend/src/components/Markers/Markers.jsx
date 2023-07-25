import { Marker, Popup } from "react-leaflet";
import Popups from "../Popups/Popups";
import L from "leaflet";
import localizadores from "../../assets/locations.png";

export default function Markers({ coordenadas, raton, ID }) {
  const { id, lat, lng } = coordenadas;
  const miIco1 = new L.Icon({
    iconUrl: localizadores,
    iconSize: [40, 45], // tamaño del icono
    shadowSize: [50, 64], // tamaño de la sombra
    iconAnchor: [20, 40], // punto del icono que corresponde a la posición del marcador
    popupAnchor: [0, -40], // punto relativo al marcador desde donde se deberá abrir el popup
  });
  const miIco2 = new L.Icon({
    iconUrl: localizadores,
    iconSize: [60, 65], // tamaño del icono
    shadowSize: [50, 64], // tamaño de la sombra
    iconAnchor: [40, 60], // punto del icono que corresponde a la posición del marcador
    popupAnchor: [0, -40], // punto relativo al marcador desde donde se deberá abrir el popup
  });
  function selectIcon() {
    if (raton) return miIco2;
    else return miIco1;
  }
  if (!id) {
    return (
      <Marker position={coordenadas} icon={miIco1}>
        <Popup>
          Wellcome to
          <br /> Polo Digital <br /> MALAGA
        </Popup>
      </Marker>
    );
  } else {
    return (
      <Marker position={[lat, lng]} icon={selectIcon()}>
        <Popups id={id} />
      </Marker>
    );
  }
}
