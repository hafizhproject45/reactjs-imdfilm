import axios from "axios";

export const getMovieList = async () => {
  const movie = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?page=1&api_key=9f560be65ea7062c38c2f01c83ccc4d9"
  );
  return movie.data.results;
};

export const searchMovies = async (q) => {
  const search = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${q}&page=1&api_key=9f560be65ea7062c38c2f01c83ccc4d9`
  );
  return search.data;
};
