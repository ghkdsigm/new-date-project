import Vue from "vue";
import Vuex from "vuex";
import movie from "./movie";
import person from "./person";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  modules: {
    movie,
    person,
  },
});
