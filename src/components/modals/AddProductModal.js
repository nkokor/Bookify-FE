import React, { useState } from 'react';
import '../../App.css';
import '../../css/Modal.css';
import { addProduct } from '../../api/BooksApi'; 
import StatusMessageModal from '../modals/StatusMessageModal'; 

const AddProductModal = ({ onClose }) => {
    const genreOptions = [
        "Fantasy", "History", "Fiction", "Non-Fiction", "Self-Help", "Romance",
        "Horror", "Thriller", "Sci-Fi", "Children's", "Action", "Mystery"
    ];

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        issueDate: '', 
        genre: '', 
        description: '',
        numberOfPages: '',
        copiesAvailable: '',
        bookUrl: ''
    });

    const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.issueDate && formData.issueDate.length === 16) {
            formData.issueDate += ":00";
        }

        try {
            await addProduct(formData);
            setStatusMessage('New product has been added successfully.');
            setIsStatusModalOpen(true);
            onClose(); 
        } catch (error) {
            let errorMessage = 'Error adding product.';
            if (error.message === 'Failed to fetch') {
                errorMessage = 'Something went wrong. Try again later.';
            } else if (error.message) {
                errorMessage = error.message;
            }
            setStatusMessage(errorMessage);
            setIsStatusModalOpen(true); 
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img 
                    src="/images/close.png" 
                    alt="Close" 
                    className="close-button" 
                    onClick={onClose} 
                />
                <h2>Add new product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="create-form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="create-form-group">
                        <label htmlFor="author">Author:</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="create-form-group">
                        <label htmlFor="issueDate">Issue date:</label>
                        <input
                            type="datetime-local"
                            id="issueDate"
                            name="issueDate"
                            value={formData.issueDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="create-form-group">
                        <label htmlFor="genre">Genre:</label>
                        <select
                            id="genre"
                            name="genre"
                            value={formData.genre}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select genre</option>
                            {genreOptions.map((genre, index) => (
                                <option key={index} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>
                    <div className="create-form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="create-form-group">
                        <label htmlFor="numberOfPages">Number of pages:</label>
                        <input
                            type="number"
                            id="numberOfPages"
                            name="numberOfPages"
                            value={formData.numberOfPages}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="create-form-group">
                        <label htmlFor="copiesAvailable">Copies available:</label>
                        <input
                            type="number"
                            id="copiesAvailable"
                            name="copiesAvailable"
                            value={formData.copiesAvailable}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="create-form-group">
                        <label htmlFor="bookUrl">Image URL:</label>
                        <input
                            type="url"
                            id="bookUrl"
                            name="bookUrl"
                            value={formData.bookUrl}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="button-element" id="create-b">Add</button>
                </form>
            </div>
            {isStatusModalOpen && (
                <StatusMessageModal
                    isOpen={isStatusModalOpen}
                    onClose={() => setIsStatusModalOpen(false)}
                    message={statusMessage}
                />
            )}
        </div>
    );
};

export default AddProductModal;
