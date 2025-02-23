import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function MapController({ selectedLibrary, libraries, markerRefs }) {
  const map = useMap();

  useEffect(() => {
    if (selectedLibrary && selectedLibrary.location) {
      const { lat, lng } = selectedLibrary.location;

      map.setView([lat, lng], 15, { animate: true });

      const markerRef = markerRefs[selectedLibrary.id];
      if (markerRef) {
        markerRef.openPopup();
      }
    } else if (libraries.length > 0) {
      const bounds = libraries
        .filter((lib) => lib.location)
        .map((lib) => [lib.location.lat, lib.location.lng]);

      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [selectedLibrary, libraries, markerRefs, map]);

  return null;
}