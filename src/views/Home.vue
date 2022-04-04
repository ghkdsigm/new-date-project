<template>
  <div>
    <MainVideo />
    <MainPopular />
    <MainPage />
    <div class="wrap">
      <div class="content">
        <MovieList />
        <MainTrend />
        <UpcommingList />
      </div>
    </div>
  </div>
</template>

<script>
import MainVideo from "@/components/MainVideo";
import MainPopular from "@/components/MainPopular";
import MainPage from "@/components/MainPage";
import MovieList from "@/components/MovieList";
import MainTrend from "@/components/MainTrend";
import UpcommingList from "@/components/UpcommingList";
export default {
  components: {
    MainVideo,
    MainPopular,
    MainPage,
    MovieList,
    MainTrend,
    UpcommingList,
  },
};
</script>

<style></style>
