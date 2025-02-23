import React, { useState } from 'react';
import '../../css/LogoutButton.css';
import { useAuth } from '../../context/AuthContext';
import StatusMessageModal from '../modals/StatusMessageModal';

const LogoutButton = ({ tag }) => {
  const { logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleLogout = async () => {
    logout();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <img 
        src="/images/logout.png" 
        alt="Log out" 
        className={`logout-button ${tag}`} 
        onClick={handleLogout} 
      />
      {showModal && (
        <StatusMessageModal 
          onClose={handleCloseModal} 
          message={modalMessage} 
        />
      )}
    </>
  );
};

export default LogoutButton;