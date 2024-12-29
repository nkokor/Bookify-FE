import React from 'react';
import { getReservations, deleteReservation } from '../../api/BooksApi';
import StatusMessageModal from '../modals/StatusMessageModal';
import { useState, useEffect } from 'react';

const MyReservations = () => {
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [reservations, setReservations] = useState([/*
    { 
        id: 5,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630502935i/6294.jpg',
        title: "Howl's Moving Castle", 
        author: "Diana Wynne Jones",
        numberOfPages: 329,
        description: "Sophie has the great misfortune of being the eldest of three daughters, destined to fail miserably should she ever leave home to seek her fate. But when she unwittingly attracts the ire of the Witch of the Waste, Sophie finds herself under a horrid spell that transforms her into an old lady. Her only chance at breaking it lies in the ever-moving castle in the hills: the Wizard Howl's castle. To untangle the enchantment, Sophie must handle the heartless Howl, strike a bargain with a fire demon, and meet the Witch of the Waste head-on. Along the way, she discovers that there's far more to Howl—and herself—than first meets the eye."
      },
    { 
        id: 8,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672574587i/60531406.jpg',
        title: 'Trees of the Emerald Sea', 
        author: "Brandon Sanderson",
        numberOfPages: 423,
        description: "The only life Tress has known on her island home in an emerald-green ocean has been a simple one, with the simple pleasures of collecting cups brought by sailors from faraway lands and listening to stories told by her friend Charlie. But when his father takes him on a voyage to find a bride and disaster strikes, Tress must stow away on a ship and seek the Sorceress of the deadly Midnight Sea. Amid the spore oceans where pirates abound, can Tress leave her simple life behind and make her own place sailing a sea where a single drop of water can mean instant death?"
    }  */
  ]);

  const fetchReservations = async () => {
    try {
      const data = await getReservations();
      setReservations(data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      setReservations([]);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []); 

const cancelReservation = async (reservationId) => {
    try {
        const requestData = {
            bookId: reservationId
        }
        await deleteReservation(requestData);
        setStatusMessage("Reservation has been canceled successfully.");
        setIsStatusModalOpen(true);
        await fetchReservations();
    } catch (error) {
        setStatusMessage("Something went wrong. Try again later.");
        setIsStatusModalOpen(true);
    }
}

const handleCloseStatusModal = async () => {
    setIsStatusModalOpen(false);
    setStatusMessage("")
}
    return (
        <div className='page-div' id="my-res-div">
            <p className='page-title'>Your reservations</p>
            <div className='wide-card-products-container'>
                {
                    reservations.map((product) => {
                        return (
                            <div className='item-container'>
                                 <div className='item-trash-container'>
                                    <img src="/images/trash.png" onClick={() => {
                                        cancelReservation(product.id)
                                    }}></img>
                                 </div>
                                 <div className='wide-card-product-container'>
                                    <div className='wide-card-product-image-container'>
                                        <img src={product.coverImage} alt={product.title} />
                                    </div>
                                    <div className='wide-card-product-info-container'>
                                        <div className='wide-card-detail-div'>
                                            <p className='wide-card-detail-title'>TITLE: </p>
                                            <p className='wide-card-value-p'>{product.title}</p>
                                        </div>
                                        <div className='wide-card-detail-div'>
                                            <p className='wide-card-detail-title'>AUTHOR: </p>
                                            <p className='wide-card-value-p'>{product.author}</p>
                                        </div>
                                        <div className='wide-card-detail-div'>
                                            <p className='wide-card-detail-title'>GENRE: </p>
                                            <p className='wide-card-value-p'>{product.genre}</p>
                                        </div>
                                        <div className='wide-card-detail-div'>
                                            <p className='wide-card-detail-title'>NUMBER OF PAGES: </p>
                                            <p className='wide-card-value-p'>{product.numberOfPages}</p>
                                        </div>
                                        <div className='wide-card-detail-div'>
                                            <p className='wide-card-detail-title'>DESCRIPTION: </p>
                                        </div>
                                        <div className='wide-card-description-container'>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {isStatusModalOpen && (
                <StatusMessageModal
                isOpen={isStatusModalOpen}
                onClose={handleCloseStatusModal}
                message={statusMessage}
                />
             )}
        </div>
    );
};

export default MyReservations;
