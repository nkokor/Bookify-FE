
import React from "react";

const ToggleButtons = ({ activeForm, handleFormSwitch }) => {
  return (
    <div className="toggle-buttons">
      <button
        onClick={() => handleFormSwitch("recommendation")}
        className={activeForm === "recommendation" ? "active" : ""}
      >
        Recommendation
      </button>
      <button
        onClick={() => handleFormSwitch("rating")}
        className={activeForm === "rating" ? "active" : ""}
      >
        Rating
      </button>
      <button
        onClick={() => handleFormSwitch("summary")}
        className={activeForm === "summary" ? "active" : ""}
      >
        Summary
      </button>
    </div>
  );
};

export default ToggleButtons;