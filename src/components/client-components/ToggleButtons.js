
import React from "react";

const ToggleButtons = ({ activeForm, handleFormSwitch }) => {
  return (
    <div className="toggle-buttons">
      <button
        onClick={() => handleFormSwitch("recommendation")}
        className={activeForm === "recommendation" ? "active" : ""}
      >
        Book recommendation
      </button>
      <button
        onClick={() => handleFormSwitch("rating")}
        className={activeForm === "rating" ? "active" : ""}
      >
        Book rating
      </button>
      <button
        onClick={() => handleFormSwitch("summary")}
        className={activeForm === "summary" ? "active" : ""}
      >
        Book summary
      </button>
    </div>
  );
};

export default ToggleButtons;