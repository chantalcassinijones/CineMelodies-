import React, { useEffect, useState } from "react";
import fetchMovieData from "../../Api"; // Assuming Api.js is in the same directory
import Movie from "../Movie/Movie";

const MovieContainer = () => {
  const [movies, setMovies] = useState({
    comedy: [],
    fantasy: [],
    magic: [],
    recommended: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovieData();
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="moviesContainer">
      <div className="border-solid border-2 border-indigo-600">
      <h2>Comedies</h2>
      {movies.comedy.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          overview={movie.overview}
          posterPath={movie.poster_path}
        />
      ))}
      </div>
      <div className="border-solid border-2 border-red-50">
      <h2>Fantasy</h2>
      {movies.fantasy.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          overview={movie.overview}
          posterPath={movie.poster_path}
        />
      ))}
        </div>
      <h2>Magic</h2>
      {movies.magic.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          overview={movie.overview}
          posterPath={movie.poster_path}
        />
      ))}
      <h2>Recommended</h2>
      {movies.recommended.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          overview={movie.overview}
          posterPath={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default MovieContainer;
