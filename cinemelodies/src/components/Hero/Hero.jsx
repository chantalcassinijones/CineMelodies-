import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    
    <div className="hero-container text-center">
    <h1 className="font-bold tracking-tight text-gray-900 pt-5 sm:text-4xl">
    Your guide to the world of movies and sounds
    </h1>
    <p className="mt-6 text-lg leading-8 text-gray-600">
     
    </p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <form>
        <input type="text" placeholder= "Search movie title"/>
        <button type="button">Go</button>
      </form>
        </div>
        </div>
   
    )
}

export default Hero
