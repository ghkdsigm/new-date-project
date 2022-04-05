<template>
  <div>
    <!-- <div v-for="(item, index) in boxoffice.items" :key="index">
      {{ item }}
    </div> -->
    <h2 class="officeh2">
      요즘 HOT <em style="font-style: italic">! </em> 영화
    </h2>
    <div class="slideWrap">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        class="movie-swiper"
        navigation
      >
        <swiper-slide
          class="swiper-img"
          v-for="(item, index) in trend.results"
          :key="index"
        >
          <div class="img_box">
            <div class="image-area">
              <span class="rankTag">{{ item.media_type }}</span>
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
    ...mapState("movie", ["trend"]),
  },
  created() {
    this.$store.dispatch("movie/FETCH_TREND");
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
.rankTag {
  position: absolute;
  padding: 10px 20px;
  background-color: #e02020bd;
  border-radius: 0 0 0 15px;
  border-bottom: 2px solid #000;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  right: 0;
  text-align: center;
  font-family: Neusa, Impact, Helvetica Neue, Arial, Sans-Serif;
  z-index: 9999;
}

.officeh2 {
  display: inline-block;
  margin: 50px 10px 0;
  font-size: 35px;
  font-weight: 500;
  font-family: Neusa, Impact, Helvetica Neue, Arial, Sans-Serif;
}
.swiper-pagination-progressbar-fill {
  background: #96f2d7 !important;
}
</style>
