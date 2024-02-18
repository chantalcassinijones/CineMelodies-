import React, { useEffect, useState } from "react";
import fetchMovieData from "../../Api"; // Assuming Api.js is in the same directory
import Movie from "../Movie/Movie";
import "./MovieContainer.css";

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
    <>
    <div className="moviesContainer">
    <div>
      <h2 className="text-center text-2xl font-bold mb-4">Comedies</h2>
      <div className="movieList">
        {movies.comedy.map((movie) => (
          <div key={movie.id} className="movieCard">
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="posterImage"
            />
            <p className="text-center font-bold mb-4">Release Date: {movie.release_date}</p>
            <p className="movieDescription">{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    
    <div className="moviesContainer">  
      <div>
      <h2 className= "text-center text-2xl font-bold mb-4">Fantasy</h2>
      <div className="movieList">
      {movies.fantasy.map((movie) => (
        <div key={movie.id} className="movieCard">
        <h3>{movie.title}</h3>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="posterImage"
        />
        <p className="text-center font-bold mb-4">Release Date: {movie.release_date}</p>
        <p className="movieDescription">{movie.overview}</p>
      </div>
    ))}
  </div>
    </div>
        </div>

      <div className="moviesContainer">  
      <div>
      <h2 className="text-center text-2xl font-bold mb-4">Magic</h2>
      <div className="movieList">
      {movies.magic.map((movie) => (
       <div key={movie.id} className="movieCard">
       <h3>{movie.title}</h3>
       <img
         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
         alt={movie.title}
         className="posterImage"
       />
       <p className="text-center font-bold mb-4">Release Date: {movie.release_date}</p>
       <p className="movieDescription">{movie.overview}</p>
     </div>
   ))}
 </div>
</div>
</div>
<div className="moviesContainer">
<div>
      <h2 className= "text-center text-2xl font-bold mb-4">Recommended</h2>
      <div className="movieList">
      {movies.recommended.map((movie) => (
       <div key={movie.id} className="movieCard">
       <h3>{movie.title}</h3>
       <img
         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
         alt={movie.title}
         className="posterImage"
       />
       <p className="text-center font-bold mb-4">Release Date: {movie.release_date}</p>
       <p className="movieDescription">{movie.overview}</p>
     </div>
   ))}
 </div>
</div>
</div>
</>
)
};

export default MovieContainer;
