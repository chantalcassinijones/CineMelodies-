import React, { useState } from "react";
import axios from "axios";


const MovieSearch = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=440ab038ef5ec7e52ca1c5eceae992aa&query=${query}`)
        .then(response => {
            console.log(response.data);
   })
   .catch(error => {
    console.log(error);
   })
}
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search movie title"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default MovieSearch;
