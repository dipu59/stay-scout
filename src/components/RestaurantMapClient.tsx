"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// import "leaflet/dist/leaflet.css";

import { restaurantLocations } from "@/src/config/data";
import { LocateIcon } from "lucide-react";

// 🔴 FIX ICON HERE (not in separate file)
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: LocateIcon,
  iconUrl: LocateIcon,
  shadowUrl: LocateIcon,
});

export default function RestaurantMapClient() {
  return (
    <div className=" w-full lg:h-[1264px] h-[600px] md:h-[800px] rounded-xl overflow-hidden">
      <MapContainer
        center={[1.2868, 103.8523]}
        zoom={12}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {restaurantLocations.map((place) => (
          <Marker key={place.id} position={[place.lat, place.lng]}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
