import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function MapController({ selectedLibrary }) {
  const map = useMap();

  useEffect(() => {
    if (selectedLibrary?.location) {
      const { lat, lng } = selectedLibrary.location;

      const markerPoint = map.project([lat, lng], map.getZoom());

      const offsetPoint = markerPoint.subtract([250, -100]); 

      const offsetLatLng = map.unproject(offsetPoint, map.getZoom());

      map.flyTo(offsetLatLng, map.getZoom(), { animate: true, duration: 0.5 });
    }
  }, [selectedLibrary, map]);

  return null;
}
