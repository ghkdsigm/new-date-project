<template>
  <RouterLink
    :to="`/movie/${movie.imdbID}`"
    class="movie"
    :style="{ backgroundImage: `url(${movie.Poster})` }"
  >
    <!-- <img :src="movie.Poster" alt="" width="200"/> -->
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  components: {},
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  $width: 228px;
  width: $width;
  height: $width * 3 / 2; //가로넓이대비 세로 값 계산
  margin: 10px;
  border-radius: 4px;
  background-color: gray;
  background-size: contain;
  overflow: hidden;
  position: relative;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border: 5px solid #96f2d7;
  }
  .info {
    background-color: rgb(0 0 0 / 70%);
    width: 100%;
    padding: 14px 0;
    font-size: 14px;
    text-align: 14px;
    position: absolute;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    .year {
      color: #ccc;
    }
    .title {
      color: #fff;
      white-space: nowrap;
      overflow: hideen;
      text-overflow: ellipsis;
    }
  }
}
</style>
