import React from 'react';
import { getProducts } from '../../api/BooksApi';
import "../../css/Products.css";
import { useState } from 'react';
import { useEffect } from 'react';
import ProductDetailsModal from '../modals/ProductDetailsModal';

const Shelves = () => {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
    const [books, setBooks] = useState([
    /*{ 
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
    } */
    ]);
    const [productDetails, setProductDetails] = useState()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getProducts();
            setBooks(data)
          } catch (error) {
            console.error('Error fetching books:', error);
            setBooks([])
          }
        };
    
        fetchData();
      }, []); 

    const openProductDetails = (product) => {
        setIsDetailsModalOpen(true);
        setProductDetails(product)
    }

    return (
        <div className='page-div'>
            <p className='page-title'>What's on our shelves</p>
            <div id='products'>
                {
                    books.map((product) => (
                      <div className="product-card">
                        <img className="product-image" src={product.coverImage}></img>
                        <div className='details-div'>
                          <div className="details-button">
                            <p onClick={() => {
                                console.log(product)
                                openProductDetails(product)
                            }}>VIEW DETAILS</p>
                          </div>
                        </div>
                        <div className="product-info">
                        </div>
                      </div>
                    ))
                }
            </div>
            {
                isDetailsModalOpen && (
                  <ProductDetailsModal
                    show={isDetailsModalOpen}
                    onClose={() => setIsDetailsModalOpen(false)}
                    product={productDetails}
                  />
                )
            }
        </div>
    );
};

export default Shelves;
