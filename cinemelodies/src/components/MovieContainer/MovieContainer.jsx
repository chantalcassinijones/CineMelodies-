import React from 'react';
import Movie from '../Movie/Movie';

const MovieContainer = ({ movies }) => {
    const comedyMovies = movies.comedy || [];
    const fantasyMovies = movies.fantasy || [];
    const magicMovies = movies.magic || [];
    const recommededMovies = movies.recommended || [];
  
    const allMovies = [...comedyMovies, ...fantasyMovies, ...magicMovies, ...recommededMovies];
  
    return (
      <div className="moviesContainer">
        {allMovies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            overview={movie.overview}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    );
  };
  
  export default MovieContainer;

// const MovieContainer = ({ movies }) => {
//     return (
//         <div className='moviesContainer'>
//             {movies.map((movie) => (
//                 <Movie
//                     key={movie.id}
//                     title={movie.title}
//                     releaseDate={movie.release_date}  
//                     overview={movie.overview}
//                     posterPath={movie.poster_path}
//                 />
//             ))}
//         </div>
//     );
// };

// export default MovieContainer;