import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieSearch = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) {
      alert("Please enter a search query!")
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=440ab038ef5ec7e52ca1c5eceae992aa&query=${query}`
        )
        .then((response) => {
          const results = response.data.results;
          setMovies(results);
          onSearchResults(results);
          console.log(results)
          navigate("/searchResultsPage")
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
   
    console.log("movies:", movies)
  }, [movies])

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
    </div>
  );
};

export default MovieSearch;
