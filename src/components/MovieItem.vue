<template>
  <RouterLink :to="`/moviedetail/${movie.id}`" class="movie">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="" />
    <!-- :style="{ backgroundImage: `url(${movie.Poster})` }" -->
    <div class="info">
      <div class="year">
        {{ movie.release_date }}
      </div>
      <div class="title">
        {{ movie.title }}
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
  width: 185px;
  height: 250px; //가로넓이대비 세로 값 계산
  margin: 10px;
  border-radius: 4px;
  background-color: gray;
  background-size: contain;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
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
    bottom: -1px;
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
