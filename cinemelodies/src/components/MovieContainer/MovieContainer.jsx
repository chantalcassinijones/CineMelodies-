import React, { useEffect, useState } from "react";
import fetchMovieData from "../../Api";
import Movie from "../Movie/Movie";
import "./MovieContainer.css";

const MovieContainer = ({ setTitle }) => {
  console.log("movieContainer:", setTitle)
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
        console.error("Error getting movie info:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="moviesContainer">
        <div>
          <h2 className="text-left text-2xl font-bold mb-4">Comedy</h2>
          <p className="moviesContainer-description text-left">
            Top comedy movies that sound as good as they look
          </p>
          <div className="movieList">
            {movies.comedy.map((movie) => (
              <Movie key={movie.id} title={movie.title} releaseDate={movie.release_date} posterPath={movie.poster_path} backdropPath={movie.backdrop_path} voteAverage={movie.vote_average} setTitle={setTitle} />
            ))}
          </div>
        </div>
      </div>

      <div className="moviesContainer">
        <div>
          <h2 className="text-left text-2xl font-bold mb-4">Fantasy</h2>
          <p className="moviesContainer-description text-left">
            Enter a world of fantastical esapism with one of these otherworldy
            classics
          </p>
          <div className="movieList">
            {movies.fantasy.map((movie) => (
              <Movie key={movie.id} title={movie.title} releaseDate={movie.release_date} posterPath={movie.poster_path} backdropPath={movie.backdrop_path} overview={movie.overview} voteAverage={movie.vote_average} setTitle={setTitle} />
           
            ))}
          </div>
        </div>
      </div>

      
      <div className="moviesContainer">
        <div>
          <h2 className="text-left text-2xl font-bold mb-4">Magic</h2>
          <p className="moviesContainer-description text-left">
            Manifest some movie magic
          </p>
          <div className="movieList">
            {movies.magic.map((movie) => (
              <Movie key={movie.id} title={movie.title} releaseDate={movie.release_date} posterPath={movie.poster_path} backdropPath={movie.backdrop_path} overview={movie.overview} voteAverage={movie.vote_average} setTitle={setTitle}/>
            ))}
          </div>
        </div>
      </div>

      <div className="moviesContainer">
        <div>
          <h2 className="text-left text-2xl font-bold mb-4">Team Favourites</h2>
          <p className="moviesContainer-description text-left">
            A curated collection of the CineMelodies team's favourites - all
            with exceptional soundtracks.
          </p>
          <div className="movieList">
            {movies.recommended.map((movie) => (
              <Movie key={movie.id} title={movie.title} releaseDate={movie.release_date} posterPath={movie.poster_path} backdropPath={movie.backdrop_path} overview={movie.overview} voteAverage={movie.vote_average} setTitle={setTitle} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieContainer;
