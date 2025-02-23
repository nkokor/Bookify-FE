// Libraries.jsx
import { useEffect, useState } from "react";
import { libraries } from "../../data/libraries";
import LibrariesMap from "./LibrariesMap";
import "../../css/Libraries.css";

export default function Libraries() {
  const [librariesData, setLibrariesData] = useState(libraries);

  function openEmail(recipient) {
    if (!recipient || typeof recipient !== "string") {
      console.error("Recipient must be a valid email address string.");
      return;
    }
  
    const mailtoLink = `mailto:${encodeURIComponent(recipient)}`;
    window.location.href = mailtoLink;
  }

  return (
    <div className="page-div" id="libraries-content">
      <div className="map-container"></div>
      <div className="list-container">
        {
          libraries.map((library) => (
            <div>
              <div className="library-card">
                <div className="library-img-container">
                  <img src={library.image}></img>
                </div>
                <div className="library-info-container">
                  <p className="library-title">{library.name}</p>
                  <p>{library.address}</p>
                  <p>{library.phone}</p>
                  <p className="library-email" onClick={() => { openEmail(library.email)}}>{library.email}</p>
                </div>
              </div>
              <hr></hr>
            </div>
          ))
        }
      </div>
    </div>
  );
}
