import React, { useState, useEffect } from 'react';
import { getProducts, makeReservation } from '../../api/BooksApi';
import '../../css/Products.css';
import ProductDetailsModal from '../modals/ProductDetailsModal';
import StatusMessageModal from '../modals/StatusMessageModal';

import products from '../../data/products';

const Shelves = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [books, setBooks] = useState([]);

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
        setBooks(products);
      }
    };
    fetchData();
  }, []);

  const openProductDetails = (product) => {
    setIsDetailsModalOpen(true);
    setProductDetails(product);
  };

  const handleReserve = async (product) => {
    try {
      const requestData = {
        bookId: product.id
      }
      const response = await makeReservation(requestData);
      setStatusMessage('Your reservation has been recorded successfully.');
    } catch {
      setStatusMessage('Something went wrong. Try again later.');
    } finally {
      setIsDetailsModalOpen(false);
      setIsStatusModalOpen(true);
    }
  };

  const handleCloseStatusModal = () => {
    setIsStatusModalOpen(false);
  };

  return (
    <div className='page-div'>
      <p className='page-title'>What's on our shelves</p>
      <div id='products'>
        {books.map((product) => (
          <div key={product.id} className="product-card">
            <img className="product-image" src={product.coverImage} alt={product.title} />
            <div className='details-div'>
              <div className="details-button">
                <p onClick={() => openProductDetails(product)}>VIEW DETAILS</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isDetailsModalOpen && (
        <ProductDetailsModal
          onClose={() => setIsDetailsModalOpen(false)}
          product={productDetails}
          onReserve={handleReserve}
        />
      )}
      {isStatusModalOpen && (
        <StatusMessageModal onClose={handleCloseStatusModal} message={statusMessage} />
      )}
    </div>
  );
};

export default Shelves;
