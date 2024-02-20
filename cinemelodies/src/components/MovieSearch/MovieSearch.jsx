import React, { useState } from "react";
import axios from "axios";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=440ab038ef5ec7e52ca1c5eceae992aa&query=${query}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movie title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Go</button>
      </form>

      <div className="moviesContainer">
        {movies.map((movie) => (
          <div key={movie.id} className="movieCard">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="posterImage"
            />
            <div>
              <h2 className="text-left text-2xl font-bold mb-4">
                {movie.title}
              </h2>
              <p className="moviesContainer-description text-left">
                {movie.overview}
              </p>
              <span className="movieDate font-bold mb-4">
                {movie.release_date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
