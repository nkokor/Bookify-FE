import React from 'react';
import { getBooks } from '../../api/BooksApi';
import "../../css/Products.css";
import { useState } from 'react';
import { useEffect } from 'react';
import ProductDetailsModal from '../modals/ProductDetailsModal';

const Shelves = () => {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
    const [books, setBooks] = useState([]);
    const [productDetails, setProductDetails] = useState()
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getBooks();
            setBooks(data)
          } catch (error) {
            console.error('Error fetching books:', error);
          }
        };
    
        fetchData();
      }, []); 

    const openProductDetails = async (product) => {
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
