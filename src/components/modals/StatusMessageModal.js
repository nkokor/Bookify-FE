import React from 'react';
import '../../App.css';

const StatusMessageModal = ({ onClose, message, shouldFormat }) => {
  const formatMessage = (msg) => {
    const books = msg.split(/\d+\.\s/).slice(1); 
    const limitedBooks = books.slice(0, 7); 
    return `Based on your input, here are some books you might like:\n\n\n${limitedBooks
      .map((book, index) => `${index + 1}. ${book.trim()}`)
      .join('\n')}`;
  };

  const formattedMessage = shouldFormat ? formatMessage(message) : message;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="/images/close.png" alt="X" className="close-button" onClick={onClose} />
        {shouldFormat ? (
          formattedMessage.split('\n').map((line, index) => (
            <p key={index} style={{ margin: 0 }}>{line}</p>
          ))
        ) : (
          <p>{formattedMessage}</p>
        )}
        <button className="button-element dark-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default StatusMessageModal;
