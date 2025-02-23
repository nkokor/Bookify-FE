import { useState } from "react";
import { libraries } from "../../data/libraries";
import LibrariesMap from "./LibrariesMap";
import "../../css/Libraries.css";
import LibraryCard from "./LibraryCard";

export default function Libraries() {
  const [librariesData] = useState(libraries);
  const [selectedLibrary, setSelectedLibrary] = useState(null);

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