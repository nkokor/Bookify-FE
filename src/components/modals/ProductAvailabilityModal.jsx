import '../../App.css';
import PopupCard from '../client-components/libraries/PopupCard';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useEffect, useState, useRef } from "react";
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

const defaultCenter = { lat: 43.8563, lng: 18.4131 };

export default function ({onClose, locations, product}) {
    const [libraryLocations, setLibraryLocations] = useState([]);
    const markerRefs = useRef({}); 
  
    useEffect(() => {
      const fetchCoordinates = async () => {
        const geocodedLibraries = await Promise.all(
          locations.map(async (library) => {
            if (library.location) return library;
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(library.address)}`
              );
              if (!response.ok) return library;
  
              const data = await response.json();
              if (data.length === 0) return library;
  
              const { lat, lon } = data[0];
              return { ...library, location: { lat: parseFloat(lat), lng: parseFloat(lon) } };
            } catch {
              return library;
            }
          })
        );
        setLibraryLocations(geocodedLibraries);
      };
  
      if (locations.length > 0) fetchCoordinates();
    }, [locations]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="/images/close.png" alt="X" className="close-button" onClick={onClose} />
        <p className='locations-title'>
          Locations for <strong><em>{product.title}</em></strong>
        </p>
        <div className="availability-container">
          <MapContainer
            center={[defaultCenter.lat, defaultCenter.lng]}
            zoom={13}
            style={{ width: "100%", height: "100%", borderRadius: "0rem" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {libraryLocations.map((library) => (
              library.location && (
                <Marker
                  key={library.id}
                  position={[library.location.lat, library.location.lng]}
                  ref={(ref) => (markerRefs.current[library.id] = ref)} 
                >
                  <PopupCard library={library} />
                </Marker>
              )
            ))}
          </MapContainer>
          </div>
      </div>
    </div>
  );
}