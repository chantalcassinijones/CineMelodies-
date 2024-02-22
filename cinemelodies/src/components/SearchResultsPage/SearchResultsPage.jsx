import React, { useState } from "react";
import Movie from "../Movie/Movie";
import "./SearchResultsPage.css";
import "../MovieContainer/MovieContainer.css";

// Render results to container
const SearchResultsPage = ({ movies }) => {
  
  // Return only first 8 movies with highest user votes
    const selectedMovies = movies? movies.sort((a, b) => b.popularity - a.popularity).slice(0, 8): "";
      

  return (
    <div className="moviesContainer">
         
          {selectedMovies.length === 0 ? <h2 className="noresults-h2">No results found! Why not try a different query?</h2> : (<>
               <h2 className="text-left text-2xl font-bold">Top search results</h2>
              <div className="movieList">
                  {selectedMovies.map((movie) => (
                      <Movie
                          key={movie.id}
                          title={movie.title}
                          releaseDate={movie.release_date}
                          posterPath={movie.poster_path}
                      />
                  ))}
              </div></>) }
    </div>
  );
};

export default SearchResultsPage;
