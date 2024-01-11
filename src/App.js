import React, { useState } from "react";
import Star from "./images/icons/icon-star.svg";

import "./_app.sass";
import Thank from "./Thank";

function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [showPageThankYou, setShowPageThankYou] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating((prevRating) => (prevRating === rating ? null : rating));
    rating > 0 ? setHasError(false) : setHasError(true);
  };

  const checkRating = () =>
    selectedRating !== null ? setShowPageThankYou(true) : setHasError(true);

  return showPageThankYou ? (
    <Thank showRating={selectedRating} />
  ) : (
    <div className="App">
      <img src={Star} alt="star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className="rating">
        <li>
          <button
            className={selectedRating === 1 ? "clicked" : ""}
            onClick={() => handleRatingClick(1)}
          >
            1
          </button>
        </li>
        <li>
          <button
            className={selectedRating === 2 ? "clicked" : ""}
            onClick={() => handleRatingClick(2)}
          >
            2
          </button>
        </li>
        <li>
          <button
            className={selectedRating === 3 ? "clicked" : ""}
            onClick={() => handleRatingClick(3)}
          >
            3
          </button>
        </li>
        <li>
          <button
            className={selectedRating === 4 ? "clicked" : ""}
            onClick={() => handleRatingClick(4)}
          >
            4
          </button>
        </li>
        <li>
          <button
            className={selectedRating === 5 ? "clicked" : ""}
            onClick={() => handleRatingClick(5)}
          >
            5
          </button>
        </li>
      </ul>
      <button type="button" onClick={checkRating}>
        Submit
      </button>
      <div className={hasError ? "error" : "hidden"}>
        <span>Please select a field!</span>
      </div>
    </div>
  );
}

export default App;
