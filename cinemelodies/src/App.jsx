import React, { useState } from "react";
 import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
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
    <Router>
    <div className="app-container">
      <header>
      <Header onSearchResults={handleResults} />
       </header>
      
      <main>
        <Routes>
          <Route path="/" element={<MovieContainer />} />
        <Route path="/searchResultsPage" element={<SearchResultsPage movies={movieResults} />} />
        <Route path="/movieContainer" element={<MovieContainer />} />
        </Routes>
             </main>
             
      <footer>
        <Footer />
      </footer>
      </div>
      </Router>
  );
}

export default App;
