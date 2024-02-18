import React from 'react';

const Movie = ({ title, overview, posterPath, releaseDate }) => {
    return (
        <div className='singleMovie'>
            <h2>{title}</h2>
            <p>Release Date: {releaseDate}</p>
            <p>{overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
        </div>
    );
};


export default Movie;