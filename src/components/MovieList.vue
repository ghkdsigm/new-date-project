<template>
  <div class="container">
    <div :class="{ 'no-result': !movies.length }" class="inner">
      <div v-if="message" class="message">
        {{ message }}
      </div>
      <div v-else class="movies">
        <div class="searchResult">
          <strong
            >" <em>{{ title }}</em> " 로 검색된 결과
            <em>{{ number }}</em> 건</strong
          >
        </div>

        <MovieItem v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MovieItem from "./MovieItem";
export default {
  components: {
    MovieItem,
  },
  computed: {
    ...mapState("movie", ["movies", "message", "loading", "title", "number"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
  .inner {
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
  }
  .message {
    color: gray;
    font-size: 20px;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .searchResult {
      width: 100%;
      font-size: 25px;
      margin-bottom: 35px;
      strong {
        font-weight: 300;
        font-size: 25px;
        em {
          color: #96f2d7;
          font-weight: 400;
          font-size: 32px;
        }
      }
    }
  }
}
</style>
