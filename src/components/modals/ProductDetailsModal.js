import React from 'react';
import '../../App.css';
import '../../css/ProductDetails.css';

const ProductDetailsModal = ({ onClose, product }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content" id="product-details-modal">
        <img src="/images/close.png" alt="X" className="close-button" onClick={onClose} />
        <p className='details-modal-title'>{product.title}, {product.author}</p>
        <div className='product-details-content'>
          <div className='details-image-div'>
            <img className="details-image" src={product.coverImage}></img>
          </div>
          <div className='info-div'>
            <div className='detail-div'>
              <p className='detail-title'>TITLE: </p>
              <p className='value-p'>{product.title}</p>
            </div>
            <div className='detail-div'>
              <p className='detail-title'>AUTHOR: </p>
              <p className='value-p'>{product.author}</p>
            </div>
            <div className='detail-div'>
              <p className='detail-title'>GENRE: </p>
              <p className='value-p'>{product.genre}</p>
            </div>
            <div className='detail-div'>
              <p className='detail-title'>NUMBER OF PAGES: </p>
              <p className='value-p'>{product.numberOfPages}</p>
            </div>
            <div className='detail-div'>
              <p className='detail-title'>DESCRIPTION: </p>
            </div>
            <div className='description-container'>
              <p className='value-p'>{product.description}</p>
            </div>
          </div>
        </div>
        <div className='reservation-button-container'>
          <p>RESERVE</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;