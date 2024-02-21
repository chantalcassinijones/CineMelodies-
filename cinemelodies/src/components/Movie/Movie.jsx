import React from "react";
import "./Movie.css";
import Placeholder from "./images/placeholder-250x370.svg";

const Movie = ({ title, overview, posterPath, releaseDate }) => {
  // Log data to console
  const handleClick = () => {
    title ? console.log("DATA:", title) : console.log("Nothing");
  };

  return (
    <div className="singleMovie movieCard" onClick={handleClick}>
      <img
        src={posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : Placeholder}
        alt={title}
        className="posterImage"
      />
      <span className="movieDate font-bold mb-4">
        { releaseDate? parseFloat(releaseDate).toFixed(0) : "N/A"}
      </span>
    </div>
  );
};

export default Movie;
