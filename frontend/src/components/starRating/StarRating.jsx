// TODO: figure out when to set productRating? if the user is logged in and already bought the product? 
// TODO: put the new rating to the db


import { useState } from "react";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({productRating, userType}) {
  const [rating, setRating] = useState(productRating);
  const [rateColor, setRateColor] = useState(null);
  const [clicked, setClicked] = useState(false);

  //console.log(productRating);

  return (
    <div className="starRating">
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              className="rate"
              value={currentRate}
              onClick={() => {
                if (userType === "loggedIn") {
                setRating(currentRate);
                setRateColor(currentRate);
                setClicked(false);
                } else {
                  setClicked(true);
                }
              }}

            />
            <FaStar
              size={20}
              color={currentRate <= (rateColor || rating) ? "#f63081" : "#f6308337"}
            />
          </label>
        );
      })}
      {clicked && <p>you need to log in to rate products!</p>}
    </div>
  );
}