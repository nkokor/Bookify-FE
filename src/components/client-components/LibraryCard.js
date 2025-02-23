import "../../css/Libraries.css";

export default function LibraryCard({library}) {

  function openEmail(recipient) {
    if (!recipient || typeof recipient !== "string") {
      console.error("Recipient must be a valid email address string.");
      return;
    }
  
    const mailtoLink = `mailto:${encodeURIComponent(recipient)}`;
    window.location.href = mailtoLink;
  }

  return (
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
  );
}
