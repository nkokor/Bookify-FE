import React from 'react';
import { getBooks } from '../../api/BooksApi';
import "../../css/Products.css";
import ProductCard from './ProductCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Shelves = () => {
    const [books, setBooks] = useState([{title: "Powerless", author:"Lauren Roberts", coverImage:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672676191i/75513900.jpg"}]);
    /*
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
      }, []); */

    return (
        <div className='page-div'>
            <p className='page-title'>What's on our shelves</p>
            <div id='products'>
                {
                    books.map((item) => (
                    <ProductCard product={item}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Shelves;
