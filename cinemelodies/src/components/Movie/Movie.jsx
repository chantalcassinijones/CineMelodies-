import React from "react";

const Movie = ({ title, overview, posterPath, releaseDate }) => {
  // Log data to console
  const handleClick = () => {
    title ? console.log("DATA:", title) : console.log("Nothing");
  };

  return (
    <div className="singleMovie movieCard" onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="posterImage"
      />
      <span className="movieDate font-bold mb-4">
        {parseFloat(releaseDate).toFixed(0)}
      </span>
    </div>
  );
};

export default Movie;
