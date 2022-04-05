import axios from "axios";
import {
  fetchBoxOffice,
  upComming,
  poPular,
  videoTrailer,
  Trend,
  nowPlaying,
} from "../api/index.js";

const _defaultMessage = "there is no results. please search some movie!";
export default {
  namespaced: true,
  state: {
    boxoffice: [],
    popular: [],
    upcomming: [],
    video: {},
    trend: [],
    movieId: {},
    nowplay: [],
  },
  getters: {},
  mutations: {
    SET_BOXOFFICE(state, payload) {
      return (state.boxoffice = payload);
    },
    SET_POPULAR(state, payload) {
      return (state.popular = payload);
    },
    SET_UPCOMMING(state, payload) {
      state.upcomming = payload;
      state.movieId = payload;
      return;
    },
    SET_VIDEO(state, payload) {
      return (state.video = payload);
    },
    SET_TREND(state, payload) {
      return (state.trend = payload);
    },
    SET_NOW(state, payload) {
      return (state.nowplay = payload);
    },
  },
  actions: {
    async FETCH_BOXOFFICE({ commit }) {
      await fetchBoxOffice()
        .then(res => {
          commit("SET_BOXOFFICE", res.data);
          //console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    async FETCH_UPCOMMING({ commit }, id) {
      await upComming(id)
        .then(res => {
          commit("SET_UPCOMMING", res.data.results);
          //console.log(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    },

    async FETCH_POPULAR({ commit }) {
      await poPular()
        .then(res => {
          commit("SET_POPULAR", res.data);
          //console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    async FETCH_VIDEO({ commit }) {
      await videoTrailer()
        .then(res => {
          commit("SET_VIDEO", res.data.videos.results[0].key);
        })
        .catch(err => {
          console.log(err);
        });
    },

    async FETCH_TREND({ commit }) {
      await Trend()
        .then(res => {
          commit("SET_TREND", res.data);
          //console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    async FETCH_NOW({ commit }) {
      await nowPlaying()
        .then(res => {
          commit("SET_NOW", res.data);
          //console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
