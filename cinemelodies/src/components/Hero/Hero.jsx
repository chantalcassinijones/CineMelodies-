import React from 'react';
import { useState } from "react";
import "./Hero.css";
import MovieSearch from '../MovieSearch/MovieSearch';

const Hero = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    searchSubmit(query);
  };
  
  return (
    
   <div className="hero-container text-center">
     <h1 className="font-bold tracking-tight pt-5 sm:text-4xl">
     Your guide to the world of sounds and movies
     </h1>
     <div className="mt-10 flex items-center justify-center gap-x-6">
      <MovieSearch onSearchResults={onSearchResults} />
     </div>
   </div>
   
    );
};

export default Hero
