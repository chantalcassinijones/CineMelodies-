import React from "react";
import "./Movie.css";
import Placeholder from "./images/placeholder-250x370.svg";
import { useNavigate } from "react-router-dom";


const Movie = ({ title, overview, posterPath, releaseDate, backdropPath, voteAverage, setTitle }) => {
  const navigate = useNavigate();
    
  const handleClick = () => {
    
    const movieData = {
      title,
      overview,
      backdropPath,
      releaseDate,
      voteAverage
    };
    
    navigate(`/movieInfo?&title=${title}&overview=${overview}&releaseDate=${releaseDate}&backdropPath=${backdropPath}&voteAverage=${voteAverage}`);
    
    //setTitle(movieData);
 
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
