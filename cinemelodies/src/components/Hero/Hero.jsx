import React from 'react'

const Hero = () => {
  return (
    
    <div className="text-center">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    Diving in the World of Movies and Sounds
    </h1>
    <p className="mt-6 text-lg leading-8 text-gray-600">
      Enter your search below
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
