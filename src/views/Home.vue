<template>
  <div>
    <MainVideo />
    <MainPopular />
    <MainSearch />
    <div class="wrap">
      <MainNow />
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
import MainNow from "@/components/MainNow";
import UpcommingList from "@/components/UpcommingList";
export default {
  components: {
    MainVideo,
    MainPopular,
    MainSearch,
    MainTrend,
    MainNow,
    UpcommingList,
  },
};
</script>
