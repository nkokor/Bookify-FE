import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function MapController({ selectedLibrary, libraries }) {
  const map = useMap();

  useEffect(() => {
    if (selectedLibrary?.location) {
      map.setView([selectedLibrary.location.lat, selectedLibrary.location.lng], 15, { animate: true });
    } else if (libraries.length > 0) {
      const bounds = libraries
        .filter(lib => lib.location)
        .map(lib => [lib.location.lat, lib.location.lng]);
      if (bounds.length > 0) map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [selectedLibrary, libraries, map]);

  return null;
}
