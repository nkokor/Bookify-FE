// LibrariesMap.jsx
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon issue with Leaflet in React
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
  const [libraryLocations, setLibraryLocations] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const geocodedLibraries = await Promise.all(
        libraries.map(async (library) => {
          if (library.location) return library; 

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(library.address)}`
            );

            if (!response.ok) {
              console.error(`Failed to fetch coordinates for ${library.name}`);
              return library;
            }

            const data = await response.json();

            if (data.length === 0) {
              console.warn(`No coordinates found for ${library.name}`);
              return library;
            }

            const { lat, lon } = data[0];
            return { ...library, location: { lat: parseFloat(lat), lng: parseFloat(lon) } };
          } catch (error) {
            console.error(`Error fetching coordinates for ${library.name}:`, error);
            return library;
          }
        })
      );
      setLibraryLocations(geocodedLibraries);
    };

    if (libraries.length > 0) fetchCoordinates();
  }, [libraries]);

  return (
    <MapContainer center={[defaultCenter.lat, defaultCenter.lng]} zoom={13} style={mapContainerStyle}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {libraryLocations.map(
        (library) =>
          library.location && (
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
          )
      )}
    </MapContainer>
  );
}
