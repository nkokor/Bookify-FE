import React from 'react';
import '../../App.css';
import '../../css/AddProduct.css';
import { createProduct } from '../../api/BooksApi';

const AddProductModal = ({ onClose }) => {

  const handleSubmit = async (e) => {
    
  }
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="/images/close.png" alt="X" className="close-button" onClick={onClose} />
        <p>Create new product</p>
        <div className='input-container'>
          <p>TITLE</p>
          <input type="text" name="title" />
        </div>
        <button className="button-element dark-button" onClick={onClose}>ADD PRODUCT</button>
      </div>
    </div>
  );
};

export default AddProductModal;