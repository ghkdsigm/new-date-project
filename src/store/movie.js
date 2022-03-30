import axios from "axios";
import { fetchBoxOffice } from "../api/index.js";

const _defaultMessage = "검색 내용이 존재하지않습니다.";
export default {
  namespaced: true,
  state: {
    movies: [],
    message: _defaultMessage,
    loading: false,
    title: "",
    number: "",
    theMovie: {},
    boxoffice: [],
  },
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
    resetMovies(state) {
      state.movies = [];
      state.message = _defaultMessage;
      state.loading = false;
    },
    SET_BOXOFFICE(state, payload) {
      return (state.boxoffice = payload);
    },
  },
  actions: {
    async searchMovies({ state, commit }, payload) {
      const { title, type, number, year } = payload;

      const res = await _fetchMovie({
        ...payload,
        page: 1,
      });
      const { Search, totalResults } = res.data;
      commit("updateState", {
        movies: Search,
        message: "",
        loading: true,
        title: title,
        number: number,
      });

      const total = parseInt(totalResults, 10);
      const pageLength = Math.ceil(total / 10);
      //정보 추가 요청!
      if (pageLength > 1) {
        for (let page = 2; page <= pageLength; page += 1) {
          if (page > payload.number / 10) {
            break;
          }
          const res = await _fetchMovie({
            ...payload,
            page,
          });
          const { Search } = res.data;
          commit("updateState", {
            movies: [...state.movies, ...Search],
          });
        }
      }
    },
    //하나의 영화 상세정보 가져오기
    async searchMovieWithId({ commit }, payload) {
      try {
        const res = await _fetchMovie(payload);
        commit("updateState", {
          theMovie: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    },

    FETCH_BOXOFFICE({ commit }) {
      fetchBoxOffice()
        .then(res => {
          commit("SET_BOXOFFICE", res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};

function _fetchMovie(payload) {
  const { title, type, year, page, id } = payload;
  const OMDB_API_KEY = "7035c60c";
  const url = id
    ? `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
    : `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err.message);
      });
  });
}
