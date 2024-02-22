import axios from "axios";

// Get movie data for 'Recommended'/home page

const fetchMovieData = async () => {
  try {
    const apiKey = "440ab038ef5ec7e52ca1c5eceae992aa";
    const movieIds = {
      comedy: [9427, 525, 9486, 546554],
      fantasy: [120, 2493, 411, 259316],
      magic: [1124, 671, 75656, 10439],
      recommended: [88, 744, 75612, 824],
    };

    const movieCategories = Object.keys(movieIds);

    const moviePromises = movieCategories.map((category) =>
      Promise.all(
        movieIds[category].map((id) =>
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
          )
        )
      )
    );

    const movieResponses = await Promise.all(moviePromises);

    return movieResponses.reduce((acc, response, index) => {
      const category = movieCategories[index];
      const movieData = response.map((res) => res.data);
      return { ...acc, [category]: movieData };
    }, {});
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
};

export default fetchMovieData;
