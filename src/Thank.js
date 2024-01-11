import React from "react";
import "./_thank.sass";
import Photo from "./images/icons/illustration-thank-you.svg";

function Thank({ showRating }) {
  return (
    <div className="ratting">
      <img src={Photo} alt="phone" className="photo" />
      <div className="result">You selected {showRating} out of 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Thank;
