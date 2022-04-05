<template>
  <div>
    <MainVideo />
    <MainPopular />
    <MainPage />
    <div class="wrap">
      <MainTrend />
      <UpcommingList />
    </div>
  </div>
</template>

<script>
import MainVideo from "@/components/MainVideo";
import MainPopular from "@/components/MainPopular";
import MainPage from "@/components/MainPage";
import MainTrend from "@/components/MainTrend";
import UpcommingList from "@/components/UpcommingList";
export default {
  components: {
    MainVideo,
    MainPopular,
    MainPage,

    MainTrend,
    UpcommingList,
  },
};
</script>

<style></style>
