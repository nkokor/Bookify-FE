import React from "react";

const BookRatingForm = ({ ratingInput, setRatingInput, getBookRating }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter book title"
        value={ratingInput.title}
        onChange={(e) => setRatingInput({ ...ratingInput, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter author name"
        value={ratingInput.author}
        onChange={(e) => setRatingInput({ ...ratingInput, author: e.target.value })}
      />
      <div className="b-container">
        <button className="button-element" onClick={getBookRating}>Get Rating</button>
      </div>
    </div>
  );
};

export default BookRatingForm;