import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import MovieContainer from "./components/MovieContainer/MovieContainer";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";

function App() {
  // Store movie results to state
  const [movieResults, setMovieResults] = useState([]);

  const handleResults = (results) => {
    setMovieResults(results);
  };

  return (
    <div className="app-container">
      <header>
        <Header onSearchResults={handleResults} />
         </header>
      <main>
        {/* Condition rendering based on movieResults state */}
        {!movieResults ? <SearchResultsPage movies={movieResults} /> : <MovieContainer />}
             </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
