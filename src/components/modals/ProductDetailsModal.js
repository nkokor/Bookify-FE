import React, { useState } from 'react';
import '../../App.css';
import '../../css/ProductDetails.css';
import { getProductAvailability } from '../../api/BooksApi';
import ProductAvailabilityModal from './ProductAvailabilityModal';
import { availability } from '../../data/availability';

const ProductDetailsModal = ({ onClose, product, onReserve }) => {
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [availabilityData, setAvailabilityData] = useState(null);

  const handleCheckAvailability = async () => {
    try {
      const data = await getProductAvailability(product.id);
      setAvailabilityData(data);
      setIsAvailabilityModalOpen(true);
    } catch (error) {
      console.error('Error checking availability:', error);
      setAvailabilityData(availability);
      setIsAvailabilityModalOpen(true);
    }
  };

  const handleCloseAvailabilityModal = () => {
    setIsAvailabilityModalOpen(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" id="product-details-modal">
        <img src="/images/close.png" alt="X" className="close-button" onClick={onClose} />
        <p className='details-modal-title'>{product.title}, {product.author}</p>
        <div className='product-details-content'>
          <div className='details-image-div'>
            <img className="details-image" src={product.coverImage} alt={product.title} />
          </div>
          <div className='info-div'>
            <div className='detail-div'><p className='detail-title'>TITLE: </p><p className='value-p'>{product.title}</p></div>
            <div className='detail-div'><p className='detail-title'>AUTHOR: </p><p className='value-p'>{product.author}</p></div>
            <div className='detail-div'><p className='detail-title'>GENRE: </p><p className='value-p'>{product.genre}</p></div>
            <div className='detail-div'><p className='detail-title'>NUMBER OF PAGES: </p><p className='value-p'>{product.numberOfPages}</p></div>
            <div className='detail-div'><p className='detail-title'>DESCRIPTION: </p></div>
            <div className='description-container'><p className='value-p description-p'>{product.description}</p></div>
          </div>
        </div>
        <div className='modal-buttons'>
          <div onClick={() => onReserve(product)} className='reservation-button-container'>
            <p>RESERVE</p>
          </div>
          <div onClick={handleCheckAvailability} className='availability-button-container'>
            <img src="/images/location.png" />
            <p>Check availability</p>
          </div>
        </div>
      </div>
      {isAvailabilityModalOpen && (
        <ProductAvailabilityModal 
          onClose={handleCloseAvailabilityModal} 
          availability={availabilityData} 
        />
      )}
    </div>
  );
};

export default ProductDetailsModal;
