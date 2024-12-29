import React, { useState, useEffect } from 'react';
import { getProducts, makeReservation } from '../../api/BooksApi';
import '../../css/Products.css';
import ProductDetailsModal from '../modals/ProductDetailsModal';
import StatusMessageModal from '../modals/StatusMessageModal';

const Shelves = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [books, setBooks] = useState([
    { 
        id: 1,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672676191i/75513900.jpg',
        title: 'Powerless', 
        author: "Lauren Roberts",
        numberOfPages: 500,
        description: "The powers these Elites have possessed for decades were graciously gifted to them by the Plague, though not all were fortunate enough to both survive the sickness and reap the reward. Those born Ordinary are just that—ordinary. And when the king decreed that all Ordinaries be banished in order to preserve his Elite society, lacking an ability suddenly became a crime—making Paedyn Gray a felon by fate and a thief by necessity. The powers these Elites have possessed for decades were graciously gifted to them by the Plague, though not all were fortunate enough to both survive the sickness and reap the reward. Those born Ordinary are just that—ordinary. And when the king decreed that all Ordinaries be banished in order to preserve his Elite society, lacking an ability suddenly became a crime—making Paedyn Gray a felon by fate and a thief by necessity. The powers these Elites have possessed for decades were graciously gifted to them by the Plague, though not all were fortunate enough to both survive the sickness and reap the reward. Those born Ordinary are just that—ordinary. And when the king decreed that all Ordinaries be banished in order to preserve his Elite society, lacking an ability suddenly became a crime—making Paedyn Gray a felon by fate and a thief by necessity."
    },
    { 
        id: 1,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672676191i/75513900.jpg',
        title: 'Powerless', 
        author: "Lauren Roberts",
        numberOfPages: 500,
        description: "The powers these Elites have possessed for decades were graciously gifted to them by the Plague, though not all were fortunate enough to both survive the sickness and reap the reward. Those born Ordinary are just that—ordinary. And when the king decreed that all Ordinaries be banished in order to preserve his Elite society, lacking an ability suddenly became a crime—making Paedyn Gray a felon by fate and a thief by necessity. The powers these Elites have possessed for decades were graciously gifted to them by the Plague, though not all were fortunate enough to both survive the sickness and reap the reward. Those born Ordinary are just that—ordinary. And when the king decreed that all Ordinaries be banished in order to preserve his Elite society, lacking an ability suddenly became a crime—making Paedyn Gray a felon by fate and a thief by necessity. The powers these Elites have possessed for decades were graciously gifted to them by the Plague, though not all were fortunate enough to both survive the sickness and reap the reward. Those born Ordinary are just that—ordinary. And when the king decreed that all Ordinaries be banished in order to preserve his Elite society, lacking an ability suddenly became a crime—making Paedyn Gray a felon by fate and a thief by necessity."
    } 
  ]);

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        //setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
        //setBooks([]);
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
