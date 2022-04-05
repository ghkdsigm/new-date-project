import axios from "axios";

const IMDB_API_KEY = "k_m3futmwz";
const TMDB_API_KEY = "f737a98f38d3441bb0955cfa6f9dc5d3";

// const api = {
//   baseURL: `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`,
// };

// const api = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   params: {
//     api_key: "f737a98f38d3441bb0955cfa6f9dc5d3",
//     language: "en-US",
//   },
// });

const api = {
  upcoming: "https://api.themoviedb.org/3/movie/upcoming?api_key=",
  popular: "https://api.themoviedb.org/3/movie/popular?api_key=",
  trend: "https://api.themoviedb.org/3/trending/all/day?api_key=",
};

function fetchBoxOffice() {
  return axios.get(`https://imdb-api.com/en/API/BoxOffice/${IMDB_API_KEY}`);
}

function upComming() {
  return axios.get(`${api.upcoming}${TMDB_API_KEY}&language=en-US&page=1`);
}

function poPular() {
  return axios.get(`${api.popular}${TMDB_API_KEY}&language=en-US&page=1`);
}

function Trend() {
  return axios.get(`${api.trend}${TMDB_API_KEY}`);
}

function videoTrailer() {
  return axios.get(
    `https://api.themoviedb.org/3/movie/760926?api_key=${TMDB_API_KEY}&append_to_response=videos`,
  );
}

export { fetchBoxOffice, upComming, poPular, videoTrailer, Trend };
