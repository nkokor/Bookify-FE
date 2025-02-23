import { useState, useEffect } from "react";
import { libraries } from "../../../data/libraries";
import LibrariesMap from "./LibrariesMap";
import LibraryCard from "./LibraryCard";
import { getLibraries } from "../../../api/LibrariesApi";
import "../../../css/Libraries.css";

export default function Libraries() {
  const [librariesData, setLibrariesData] = useState(libraries);
  const [selectedLibrary, setSelectedLibrary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLibraries();
        setLibrariesData(data);
      } catch (error) {
        console.error('Error fetching libraries:', error);
        setLibrariesData(librariesData);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="page-div" id="libraries-content">
      <div className="map-container">
        <LibrariesMap libraries={librariesData} selectedLibrary={selectedLibrary} />
      </div>
      <div className="list-container">
        {librariesData.map((library) => (
          <LibraryCard
            key={library.id}
            library={library}
            onSelectLibrary={() => setSelectedLibrary(library)}
          />
        ))}
      </div>
    </div>
  );
}