import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../../api/BooksApi';
import AddProductModal from '../modals/AddProductModal';
import StatusMessageModal from '../modals/StatusMessageModal';
import "../../css/Products.css";

import products from '../../data/products';

const Products = () => {
    const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false); 
    const [products, setProducts] = useState([
    ]);

    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts(products);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const removeProduct = async (productId) => {
        try {
            await deleteProduct(productId);
            setStatusMessage("Product has been deleted successfully.");
            setIsStatusModalOpen(true);
            await fetchProducts();
        } catch (error) {
            setStatusMessage("Product could not be deleted.");
            setIsStatusModalOpen(true);
        }
    };

    const handleCloseStatusModal = () => {
        setIsStatusModalOpen(false);
        setStatusMessage("");
    };

    const handleAddProduct = () => {
        setIsAddProductModalOpen(true); 
    };

    const handleCloseAddProductModal = () => {
        setIsAddProductModalOpen(false); 
    };

    return (
        <div className='page-div' id="admin-dash">
            <button className='button-element add-p-button' onClick={handleAddProduct}>+ Add product</button>
            <div className='wide-card-products-container'>
                {products.map((product) => (
                    <div className='item-container' key={product.id}>
                        <div className='item-trash-container'>
                            <img src="/images/trash.png" onClick={() => removeProduct(product.id)} alt="Delete" />
                        </div>
                        <div className='wide-card-product-container'>
                            <div className='wide-card-product-image-container'>
                                <img src={product.coverImage} alt={product.title} />
                            </div>
                            <div className='wide-card-product-info-container'>
                                <p><strong>Title:</strong> {product.title}</p>
                                <p><strong>Author:</strong> {product.author}</p>
                                <p><strong>Number of Pages:</strong> {product.numberOfPages}</p>
                                <p><strong>Description:</strong> {product.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isStatusModalOpen && (
                <StatusMessageModal
                    isOpen={isStatusModalOpen}
                    onClose={handleCloseStatusModal}
                    message={statusMessage}
                />
            )}
            {isAddProductModalOpen && (
                <AddProductModal
                    isOpen={isAddProductModalOpen}
                    onClose={handleCloseAddProductModal}
                />
            )}
        </div>
    );
};

export default Products;
