// Libraries.jsx
import { useEffect, useState } from "react";
import { libraries } from "../../data/libraries";
import LibrariesMap from "./LibrariesMap";
import "../../css/Libraries.css";
import LibraryCard from "./LibraryCard";

export default function Libraries() {
  const [librariesData, setLibrariesData] = useState(libraries);

  return (
    <div className="page-div" id="libraries-content">
      <div className="map-container"></div>
      <div className="list-container">
        {
          librariesData.map((library) => (
            <LibraryCard library={library} />
          ))
        }
      </div>
    </div>
  );
}
