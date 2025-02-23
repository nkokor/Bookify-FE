import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "1rem",
};

const defaultCenter = {
  lat: 43.8563, 
  lng: 18.4131,
};

export default function LibrariesMap({ libraries }) {
  return (
    <MapContainer center={[defaultCenter.lat, defaultCenter.lng]} zoom={13} style={mapContainerStyle}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {libraries.map((library) => (
        <Marker key={library.id} position={[library.location.lat, library.location.lng]}>
          <Popup>
            <div className="text-sm">
              <strong className="text-base">{library.name}</strong>
              <br />📍 {library.address}
              <br />📞 {library.phone}
              <br />✉️ <a href={`mailto:${library.email}`} className="text-blue-500 underline">{library.email}</a>
              <br />
              {library.image && (
                <img
                  src={library.image}
                  alt={library.name}
                  className="mt-2 rounded-md shadow-sm"
                  style={{ width: "100px", height: "auto" }}
                />
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
