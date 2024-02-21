import React, { useState } from "react";
import Movie from "../Movie/Movie";
import "./SearchResultsPage.css";
import "../MovieContainer/MovieContainer.css";

// Render results to container
const SearchResultsPage = ({ movies }) => {
  return (
    <div className="moviesContainer">
         
          {movies.length === 0 ? <h2 className="noresults-h2">No results found! Why not try a different query?</h2> : (<>
               <h2 className="text-left text-2xl font-bold">Top search results</h2>
              <div className="movieList">
                  {movies.map((movie) => (
                      <Movie
                          key={movie.id}
                          title={movie.title}
                          releaseDate={movie.release_date}
                          posterPath={movie.poster_path}
                      />
                  ))}
              </div></>)}
    </div>
  );
};

export default SearchResultsPage;
