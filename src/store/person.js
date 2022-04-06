import { personPopular } from "../api/index.js";

export default {
  namespaced: true,
  state: {
    personpopular: [],
    personlatest: [],
  },
  getters: {},
  mutations: {
    SET_PERSONPOPULAR(state, payload) {
      return (state.personpopular = payload);
    },
  },
  actions: {
    async FETCH_PERSONPOPULAR({ commit }) {
      await personPopular()
        .then(res => {
          commit("SET_PERSONPOPULAR", res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
