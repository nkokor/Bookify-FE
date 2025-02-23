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
          <p>{library.address}</p>
          <p>{library.phone}</p>
          <p
            className="library-email"
            onClick={() => window.location.href = `mailto:${library.email}`}
          >
            {library.email}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
