<template>
  <div>
    <h2 class="officeh2">현재 상영중인</h2>
    <div class="slideWrap">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        class="movie-swiper"
        navigation
      >
        <swiper-slide
          class="swiper-img"
          v-for="(item, index) in nowplay.results"
          :key="index"
        >
          <div class="img_box">
            <div class="image-area">
              <span class="rankTag2"
                ><em class="pointTxt">평점</em> {{ item.vote_average }}
              </span>
              <span class="rankTag3"
                ><em class="pointTxt"
                  >개봉일
                  {{
                    item.release_date.includes("-")
                      ? item.release_date.replaceAll("-", ".")
                      : false
                  }}</em
                ></span
              >
              <RouterLink :to="`/moviedetail/${item.id}`" class="movieItem">
                <img
                  :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
                  alt=""
                />
              </RouterLink>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "HomeSwiper",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        freeModeSticky: false,
        scrollbar: ".sw-scroll1",
        scrollbarHide: false,
        scrollbarDraggable: true,
        grabCursor: true,
        loop: false,
        pagination: {
          type: "progressbar",
          el: ".swiper-pagination",
        },
        enterInsufficientSlides: true, // 컨텐츠의 수량에 따라 중앙정렬 여부를 결정함
        breakpoints: {
          375: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      },
    };
  },
  computed: {
    ...mapState("movie", ["nowplay"]),
  },
  created() {
    this.$store.dispatch("movie/FETCH_NOW");
  },
};
</script>

<style scope>
.slideWrap {
  margin: 30px 0 30px 0;
}
.swiper-container {
  margin: 0 10px;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  position: relative;
  height: 500px;
  float: left;
  /* margin: 0 10px; */

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide .img_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-area {
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
  transition: all 0.2s ease-in-out;
}
.image-area a {
  width: 100%;
  height: 100%;
  display: block;
}
.image-area img:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
}
.multi-banner .swiper-slide a {
  display: block;
  width: 100%;
  height: 100%;
}
.multi-banner .swiper-slide img {
  width: 100%;
}
.rankTag2 {
  position: absolute;
  padding: 13px 20px 10px;
  background-color: #4020e0bd;
  border-radius: 0 0 15px 0;
  border-bottom: 2px solid #000;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  left: 0;
  text-align: center;
  font-family: Neusa, Impact, Helvetica Neue, Arial, Sans-Serif;
  z-index: 9999;
}

.rankTag3 {
  position: absolute;
  padding: 10px 10px 5px;
  background-color: #303030bd;
  border-radius: 15px 0 0 0;
  border-bottom: 2px solid #000;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  right: 0;
  bottom: 0;
  text-align: center;
  font-family: Neusa, Impact, Helvetica Neue, Arial, Sans-Serif;
  z-index: 9999;
}
.rankTag3 em {
  font-weight: 100;
  font-family: "Roboto";
}

.officeh2 {
  display: inline-block;
  margin: 50px 10px 0;
  font-size: 30px;
  font-weight: 500;
  font-family: Neusa, Impact, Helvetica Neue, Arial, Sans-Serif;
}
.swiper-pagination-progressbar-fill {
  background: #96f2d7 !important;
}
</style>
