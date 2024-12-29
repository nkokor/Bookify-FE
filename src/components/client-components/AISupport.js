import React, { useState } from "react";
import "../../css/AISupport.css";
import { getRating, getRecommendation, getSummary } from "../../api/AIApi";
import StatusMessageModal from "../modals/StatusMessageModal"; 
import ToggleButtons from "./ToggleButtons";
import BookRecommendationForm from "./BookRecommendationForm";
import BookRatingForm from "./BookRatingForm";
import BookSummaryForm from "./BookSummaryForm";

const AISupport = () => {
  const [activeForm, setActiveForm] = useState("recommendation");
  const [genres, setGenres] = useState(["", "", ""]);
  const [authors, setAuthors] = useState(["", "", ""]);
  const [ratingInput, setRatingInput] = useState({ title: "", author: "" });
  const [modalMessage, setModalMessage] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getBookRecommendation = async () => {
    const filledGenres = genres.filter((g) => g.trim() !== "");
    const filledAuthors = authors.filter((a) => a.trim() !== "");

    if (filledGenres.length === 0 || filledAuthors.length === 0) {
      setModalMessage("Please provide at least one input for all categories.");
      setIsModalOpen(true);
      return;
    }

    const requestData = { genres: filledGenres, authors: filledAuthors };

    try {
      const recommendation = await getRecommendation(requestData);
      setModalMessage(recommendation);
      setIsModalOpen(true);
      setGenres(["", "", ""]);
      setAuthors(["", "", ""]);
    } catch (error) {
      setModalMessage("Something went wrong. Try again later.");
      setIsModalOpen(true);
    }
  };

  const getBookRating = async () => {
    if (ratingInput.title.trim() === "" || ratingInput.author.trim() === "") {
      setModalMessage("Please provide both book title and author.");
      setIsModalOpen(true);
      return;
    }

    try {
      const rating = await getRating(ratingInput);
      setModalMessage(rating);
      setIsModalOpen(true);
      setRatingInput({ title: "", author: "" });
    } catch (error) {
      setModalMessage("Something went wrong. Try again later.");
      setIsModalOpen(true);
    }
  };

  const getBookSummary = async () => {
    if (ratingInput.title.trim() === "" || ratingInput.author.trim() === "") {
      setModalMessage("Please provide both book title and author.");
      setIsModalOpen(true);
      return;
    }

    try {
      const summary = await getSummary(ratingInput);
      setModalMessage(summary);
      setIsModalOpen(true);
      setRatingInput({ title: "", author: "" });
    } catch (error) {
      setModalMessage("Something went wrong. Try again later.");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  const handleFormSwitch = (formType) => {
    if (formType === "recommendation") {
      setGenres(["", "", ""]);
      setAuthors(["", "", ""]);
    } else if (formType === "rating" || formType === "summary") {
      setRatingInput({ title: "", author: "" });
    }
    setActiveForm(formType); 
  };

  return (
    <div id="ai-div">
      <p className="page-title">Let us assist you</p>
      <div id='ai-content' style={{ maxWidth: "500px", margin: "0 auto" }}>
      <ToggleButtons activeForm={activeForm} handleFormSwitch={handleFormSwitch} />

      {activeForm === "recommendation" && (
        <BookRecommendationForm 
          genres={genres} 
          setGenres={setGenres} 
          authors={authors} 
          setAuthors={setAuthors} 
          getBookRecommendation={getBookRecommendation} 
        />
      )}

      {activeForm === "rating" && (
        <BookRatingForm 
          ratingInput={ratingInput} 
          setRatingInput={setRatingInput} 
          getBookRating={getBookRating} 
        />
      )}

      {activeForm === "summary" && (
        <BookSummaryForm 
          ratingInput={ratingInput} 
          setRatingInput={setRatingInput} 
          getBookSummary={getBookSummary} 
        />
      )}

      {isModalOpen && <StatusMessageModal onClose={closeModal} message={modalMessage} />}
    </div>
    </div>
  );
};

export default AISupport;