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
    <a @click="scrollTop" v-show="visible" class="bottom-right"> </a>
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
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 2);
    },
    scrollListener(e) {
      this.visible = window.scrollY > 1000;
    },
    scrollToElement() {
      let element = document.getElementById("toEls");
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style lang="scss" scoped>
.bottom-right {
  position: fixed;
  bottom: 5%;
  right: 3%;
  z-index: 9999;
  background-image: url("~@/assets/images/arrowTop.png");
  background-size: cover;
  color: #fff;
  padding: 30px;
  border-radius: 55%;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  border: 1px solid #1b1b1b;
  &:hover {
    border: 1px solid #96f2d7;
    cursor: pointer;
  }
}
</style>
