import React, { useState, useEffect } from 'react';
import { getReservations, deleteReservation } from '../../api/BooksApi';
import StatusMessageModal from '../modals/StatusMessageModal';
import ConfirmCancelationModal from '../modals/ConfirmCancelationModal';

const MyReservations = () => {
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [reservations, setReservations] = useState([]);
  const [isConfirmCancelationModalOpen, setIsConfirmCancelationModalOpen] = useState(false);
  const [reservationToCancel, setReservationToCancel] = useState(null);

  const fetchReservations = async () => {
    try {
      const data = await getReservations();
      setReservations(data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      setReservations([]);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const cancelReservation = async (reservationId) => {
    try {
      const requestData = {
        bookId: reservationId
      };
      await deleteReservation(requestData);
      setStatusMessage("Reservation has been canceled successfully.");
      setIsStatusModalOpen(true);
      await fetchReservations();
    } catch (error) {
      setStatusMessage("Something went wrong. Try again later.");
      setIsStatusModalOpen(true);
    }
  };

  const handleOpenConfirmCancelationModal = (reservationId) => {
    setReservationToCancel(reservationId);
    setIsConfirmCancelationModalOpen(true);
  };

  const handleCloseConfirmCancelationModal = () => {
    setIsConfirmCancelationModalOpen(false);
    setReservationToCancel(null);
  };

  const handleConfirmCancelation = () => {
    if (reservationToCancel) {
      cancelReservation(reservationToCancel);
    }
    handleCloseConfirmCancelationModal();
  };

  const handleCloseStatusModal = () => {
    setIsStatusModalOpen(false);
    setStatusMessage("");
  };

  return (
    <div className='page-div' id="my-res-div">
      <p className='page-title'>Your reservations</p>
      <div className='wide-card-products-container'>
        {
          reservations.map((product) => (
            <div className='item-container' key={product.id}>
              <div className='item-trash-container'>
                <img 
                  src="/images/trash.png" 
                  alt="Cancel" 
                  onClick={() => handleOpenConfirmCancelationModal(product.id)} 
                />
              </div>
              <div className='wide-card-product-container'>
                <div className='wide-card-product-image-container'>
                  <img src={product.coverImage} alt={product.title} />
                </div>
                <div className='wide-card-product-info-container'>
                  <div className='wide-card-detail-div'>
                    <p className='wide-card-detail-title'>TITLE: </p>
                    <p className='wide-card-value-p'>{product.title}</p>
                  </div>
                  <div className='wide-card-detail-div'>
                    <p className='wide-card-detail-title'>AUTHOR: </p>
                    <p className='wide-card-value-p'>{product.author}</p>
                  </div>
                  <div className='wide-card-detail-div'>
                    <p className='wide-card-detail-title'>GENRE: </p>
                    <p className='wide-card-value-p'>{product.genre}</p>
                  </div>
                  <div className='wide-card-detail-div'>
                    <p className='wide-card-detail-title'>NUMBER OF PAGES: </p>
                    <p className='wide-card-value-p'>{product.numberOfPages}</p>
                  </div>
                  <div className='wide-card-detail-div'>
                    <p className='wide-card-detail-title'>DESCRIPTION: </p>
                  </div>
                  <div className='wide-card-description-container'>
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {isStatusModalOpen && (
        <StatusMessageModal
          isOpen={isStatusModalOpen}
          onClose={handleCloseStatusModal}
          message={statusMessage}
        />
      )}

      {isConfirmCancelationModalOpen && (
        <ConfirmCancelationModal
          onClose={handleCloseConfirmCancelationModal}
          onConfirm={handleConfirmCancelation}
        />
      )}
    </div>
  );
};

export default MyReservations;
