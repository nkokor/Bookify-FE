import '../../App.css';

export default function ({onClose}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="/images/close.png" alt="X" className="close-button" onClick={onClose} />
      </div>
    </div>
  );
}