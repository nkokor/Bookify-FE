import { Popup } from "react-leaflet";

export default function PopupCard({ library }) {
  return (
    <Popup>
      <div className="popup-container">
        {library.image && (
          <img
            src={library.image}
            alt={library.name}
            className="popup-library-image"
            style={{ width: "100px" }}
          />
        )}
        <strong className="popup-title">{library.name}</strong>
        <div className="popup-info-row">
          <img src="/images/location.png" />
          <p>{library.address}</p>
        </div>
        <div className="popup-info-row">
          <img src="/images/phone.png" />
          <p>{library.phone}</p>
        </div>
        <div className="popup-info-row">
          <img src="/images/email.png" />
          <a href={`mailto:${library.email}`} className="text-blue-500 underline">
            {library.email}
          </a>
        </div>
      </div>
    </Popup>
  );
}
