import "../../css/Libraries.css";

export default function LibraryCard({ library, onSelectLibrary }) {
  return (
    <div>
      <div className="library-card">
        <div className="library-img-container">
          <img src={library.image} alt={library.name} />
        </div>
        <div className="library-info-container">
          <p className="library-title" onClick={onSelectLibrary} style={{ cursor: "pointer" }}>
            {library.name}
          </p>
          <div className="library-info-row">
            <img src="/images/location.png" />
            <p>{library.address}</p>
          </div>

          <div className="library-info-row">
            <img src="/images/phone.png" />
            <p>{library.phone}</p>
          </div>
          
          <div className="library-info-row">
            <img src="/images/email.png" />
            <a href={`mailto:${library.email}`} className="text-blue-500 underline">
              {library.email}
            </a>
          </div>

        </div>
      </div>
      <hr />
    </div>
  );
}
