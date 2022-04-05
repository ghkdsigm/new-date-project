<template>
  <div>
    <MainVideo />
    <MainPopular />
    <MainSearch />
    <div class="wrap">
      <MainTrend />
      <UpcommingList />
    </div>
  </div>
</template>

<script>
import MainVideo from "@/components/MainVideo";
import MainPopular from "@/components/MainPopular";
import MainSearch from "@/components/MainSearch";
import MainTrend from "@/components/MainTrend";
import UpcommingList from "@/components/UpcommingList";
export default {
  components: {
    MainVideo,
    MainPopular,
    MainSearch,
    MainTrend,
    UpcommingList,
  },
};
</script>

<style></style>
