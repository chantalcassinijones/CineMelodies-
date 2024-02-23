import React, { useEffect, useState } from "react";
import fetchMovieData from "../../Api";
import Movie from "../Movie/Movie";
import "./MovieContainer.css";

// Component to render pre-designated movies 
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
          <h2 className="text-left text-2xl font-bold">Comedy</h2>
          <p className="moviesContainer-description">
            Top comedy movies that are as fun to listen to as they are to watch
          </p>
          <div className="movieList">
            {movies.comedy.map((movie) => (
              <Movie key={movie.id} title={movie.title} releaseDate={movie.release_date} posterPath={movie.poster_path} backdropPath={movie.backdrop_path} overview={movie.overview}  voteAverage={movie.vote_average} setTitle={setTitle} />
            ))}
          </div>
        </div>
      </div>

      <div className="moviesContainer">
        <div>
          <h2 className="text-left text-2xl font-bold">Fantasy</h2>
          <p className="moviesContainer-description">
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
          <h2 className="text-left text-2xl font-bold">Magic</h2>
          <p className="moviesContainer-description">
            Embark on spellbinding journeys with one of these magical adventures
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
          <h2 className="text-left text-2xl font-bold">Team Favourites</h2>
          <p className="moviesContainer-description">
            A curated collection of the CineMelodies team's favourites - all
            with exceptional soundtracks
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
