import { Marker, Popup } from "react-leaflet";
import Popups from "../Popups/Popups";
import L from "leaflet";
import localizadores from "../../assets/locations.png";

// eslint-disable-next-line react/prop-types
export default function Markers({ coordenadas }) {
  const { id, lat, lng } = coordenadas;
  console.log(id, lat, lng);
  const miIco = new L.Icon({
    iconUrl: localizadores,
    iconSize: [40, 45], // tamaño del icono
    shadowSize: [50, 64], // tamaño de la sombra
    iconAnchor: [20, 40], // punto del icono que corresponde a la posición del marcador
    popupAnchor: [0, -40], // punto relativo al marcador desde donde se deberá abrir el popup
  });
  if (!id) {
    return (
      <Marker position={coordenadas} icon={miIco}>
        <Popup>
          Wellcome to
          <br /> Polo Digital <br /> MALAGA
        </Popup>
      </Marker>
    );
  } else {
    return (
      <Marker position={[lat, lng]} icon={miIco}>
        <Popups id={id} />
      </Marker>
    );
  }
}
