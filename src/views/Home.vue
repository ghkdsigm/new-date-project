<template>
  <div>
    <BoxOffice />
    <MainPage />
    <div class="wrap">
      <div class="content">
        <MovieList />
      </div>
    </div>
  </div>
</template>

<script>
import MainPage from "@/components/MainPage";
import MovieList from "@/components/MovieList";
import BoxOffice from "@/components/BoxOffice";
export default {
  components: {
    MainPage,
    MovieList,
    BoxOffice,
  },
};
</script>

<style></style>
