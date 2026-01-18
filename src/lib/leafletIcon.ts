import L from "leaflet";

import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

export const DefaultIcon = L.icon({
  iconRetinaUrl: iconRetina.src,
  iconUrl: icon.src,
  shadowUrl: shadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
