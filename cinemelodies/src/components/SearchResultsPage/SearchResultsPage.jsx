import React, { useState } from "react";
import Movie from "../Movie/Movie";
import "../MovieContainer/MovieContainer.css";

// Render results to container
const SearchResultsPage = ({ movies }) => {
  return (
      <div className="moviesContainer">
          <h2 className="text-left text-2xl font-bold">Top search results</h2>
          <div className="movieList">
      {movies.map((movies) => (
       <Movie key={movies.id} title={movies.title} releaseDate={movies.release_date} posterPath={movies.poster_path} />
      ))}
          </div>
          
    </div>
  );
};

export default SearchResultsPage;
