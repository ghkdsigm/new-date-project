import axios from "axios";

const IMDB_API_KEY = "k_m3futmwz";
const TMDB_API_KEY = "f737a98f38d3441bb0955cfa6f9dc5d3";

const DOMAIN = "https://api.themoviedb.org/3/";

const request = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f737a98f38d3441bb0955cfa6f9dc5d3",
    language: "ko-KR",
  },
});

function fetchBoxOffice() {
  return axios.get(`https://imdb-api.com/en/API/BoxOffice/${IMDB_API_KEY}`);
}

function upComming(id) {
  return request.get("movie/upcoming");
}

function poPular() {
  return request.get("movie/popular");
}

function Person(person_id) {
  return request.get("movie/person", { person_id });
}

function Trend() {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${TMDB_API_KEY}`,
  );
}

function videoTrailer(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/760926?api_key=${TMDB_API_KEY}&append_to_response=videos`,
  );
}

function movieDetail(id) {
  return request.get(`movie/${id}`, {
    params: { append_to_response: "videos" },
  });
}

function similar(id) {
  return request.get(`movie/${id}`, {
    params: { append_to_response: "similar_movies,credits,external_ids" },
  });
}

export {
  fetchBoxOffice,
  upComming,
  poPular,
  videoTrailer,
  Trend,
  movieDetail,
  Person,
  similar,
};
