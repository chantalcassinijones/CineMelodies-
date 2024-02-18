import React, {useEffect, useState } from 'react';
import axios from 'axios';
import MovieContainer from './components/MovieContainer/MovieContainer';

// const Api = () => {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const apiKey = '440ab038ef5ec7e52ca1c5eceae992aa';
//             const movieIds = [115, 620, 9486, 546554, 120, 2493, 411, 259316,1124, 671, 75656, 10439,88, 744, 75612, 824];

//             const moviePromises = movieIds.map(id => axios.get(
//               ` https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`  
//             )
//             );
//             const movieResponses = await Promise.all(moviePromises);

//             const movieData = movieResponses.map(response => response.data);

//             setMovies(movieData);
           
//           } catch (error) {
//             console.error('Error fetching data:', error);
//           }
//         };

    
//         fetchData();
//       }, []);
const Api = () => {
    const [movies, setMovies] = useState({
      comedy: [],
      fantasy: [],
      magic: [],
      recommended: []
    });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const apiKey = '440ab038ef5ec7e52ca1c5eceae992aa';
          const movieIds = {
            comedy: [115, 620, 9486, 546554],
            fantasy: [120, 2493, 411, 259316],
            magic: [1124, 671, 75656, 10439],
            recommended: [88, 744, 75612, 824]
          };
  
          const movieCategories = Object.keys(movieIds);
  
          const moviePromises = movieCategories.map(category =>
            Promise.all(
              movieIds[category].map(id =>
                axios.get(
                  `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
                )
              )
            )
          );
  
          const movieResponses = await Promise.all(moviePromises);
  
          const updatedMovies = movieResponses.reduce((acc, response, index) => {
            const category = movieCategories[index];
            const movieData = response.map(res => res.data);
            return { ...acc, [category]: movieData };
          }, {});
  
          setMovies(updatedMovies);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <>
        <div>
          <h1>Comedies</h1>
          <MovieContainer movies={movies.comedy} />
        </div>
        <div>
          <h1>Fantasy</h1>
          <MovieContainer movies={movies.fantasy} />
        </div>
        <div>
        <h1>Magic</h1>
          <MovieContainer movies={movies.magic} />
        </div>
        <div>
          <h1>Recommended</h1>
          <MovieContainer movies={movies.recommended} />
        </div>
      </>
      );
    };
    
      

//       return (
//         <div>
//           <h1>Comedies</h1>
//           <MovieContainer movies={movies} />
//         </div>
//       );
// };
    
      export default Api;