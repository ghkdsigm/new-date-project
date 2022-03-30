import axios from "axios";

const IMDB_API_KEY = "k_m3futmwz";

// const api = {
//   baseURL: `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`,
// };

function fetchBoxOffice() {
  return axios.get(`https://imdb-api.com/en/API/BoxOffice/${IMDB_API_KEY}`);
}

export { fetchBoxOffice };
