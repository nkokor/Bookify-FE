import React from 'react';
import '../../App.css';

const ConfirmCancelationModal = ({ onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img 
          src="/images/close.png" 
          alt="Close" 
          className="close-button" 
          onClick={onClose} 
        />
        <p>Are you sure you want to cancel your reservation?</p>
        <div className='reservation-cancelation-button-group'>
          <button 
            className="button-element dark-button" 
            onClick={onClose}
          >
            No
          </button>
          <button 
            className="button-element dark-button" 
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCancelationModal;
