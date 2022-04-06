<template>
  <div class="wrap">
    <div class="container">
      <div class="inner">
        <div class="movies">
          <div class="message">
            {{ this.defaultMessage }}
          </div>
          <MovieItem
            v-for="movie in movieList"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
export default {
  props: ["movieList", "defaultMessage"],
  components: {
    MovieItem,
  },
};
</script>

<style lang="scss" scoped>
.container {
  .inner {
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 20px 0;
      background: #212121;
      border-radius: 6px;
      margin: 0 10px;
    }
  }
  .message {
    color: gray;
    font-size: 20px;
    margin: 0 10px;
    text-align: center;
    width: 100%;
    background: #121212;
    padding: 15px 0;
    border-radius: 10px;
    font-weight: 300;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    .searchResult {
      width: 100%;
      font-size: 25px;
      margin-bottom: 35px;
      strong {
        font-weight: 100;
        font-size: 30px;
        em {
          color: #96f2d7;
          font-weight: 300;
          font-size: 32px;
        }
      }
    }
  }
}
</style>
