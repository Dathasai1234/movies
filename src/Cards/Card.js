import React from "react";
import "./Card.css";
import flash from "../Assets/flash.jpg";

const Card = ({ title, image, rating = 6.9, year, runtime }) => {
  return (
    <div className="card">
      <img src={image} />

      <div className="info">
        <div className="rating-info flex">
          <div className="rating">⭐ {rating}</div>
          <div className="rate">☆ Rate</div>
        </div>

        <div className="movie-title">
          <span>{title}</span>
        </div>

        <div className="release-info flex">
          <span>{year}</span>

          <span>runtime: {runtime}</span>
        </div>

        <div className="release-date">
          <span>released year: {year}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
