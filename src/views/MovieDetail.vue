<template>
  <div>
    <div
      class="infoSection01"
      :style="`background-image: radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgb(0, 0, 0) 100%) ,url(https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path});`"
    >
      <div class="detailContent flex">
        <div class="poster">
          <img
            :src="`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`"
            :alt="movieDetail.title"
            :title="movieDetail.title"
          />
        </div>
        <div class="info">
          <div class="infoTitle topbottom">
            <span>{{ movieDetail.title }} </span>
          </div>
          <div class="infoRelease topbottom">
            <span>{{ movieDetail.release_date }}</span>
          </div>
          <div class="infoOriginName topbottom">
            <span><b>원작제목 :</b> {{ movieDetail.original_title }}</span>
          </div>
          <div class="infoGenres topbottom">
            <b>장르 : </b>
            <span v-for="(item, index) in movieDetail.genres" :key="index"
              >{{ item.name }},</span
            >
          </div>
          <div class="infoStory topbottom">
            <b>줄거리 :</b>
            {{ movieDetail.overview }}
          </div>
          <div class="infoRating topbottom">
            <b>평점 :</b>
            {{ movieDetail.vote_average }} 점
          </div>
          <div class="infoRuntime topbottom">
            <b>상영시간 :</b>
            {{ movieDetail.runtime }} 분
          </div>
          <div class="trailer">
            <div class="infoTrailer topbottom">
              <div v-if="movieDetail.videos && movieDetail.videos.results">
                <iframe
                  v-if="movieDetail.videos.results[0]"
                  class="mt-5"
                  :key="movieDetail.videos.results[0].key"
                  width="430"
                  height="240"
                  :src="`${youtube(
                    movieDetail.videos.results[0].key,
                  )}?autoplay=1&modestbranding=1&autohide=1&showinfo=0&showtitle=0&controls=0`"
                  frameborder="0"
                  allow=" autoplay "
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="infoSection02"></div>
    <div class="infoSection03"></div>
    <div class="infoSection04"></div>
  </div>
</template>

<script>
import { movieDetail } from "@/api/index.js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      movieDetail: {},
      similar: {},
    };
  },
  computed: {
    ...mapState("movie", ["movieId"]),
  },
  async mounted() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    const { id } = this.$route.params;
    const { data } = await movieDetail(id);
    // axios 요청 보내기
    console.log(data);
    this.movieDetail = data;
  },
  created() {
    this.$store.dispatch("movie/FETCH_UPCOMMING", {
      //movie/id정보
      id: this.$route.params.id,
    });
  },
  methods: {
    youtube(src) {
      return `https://www.youtube.com/embed/${src}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapTitle {
  background: #454545;
  text-align: center;
  padding: 30px 0;
  p {
    font-size: 25px;
  }
}
.infoSection01 {
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  justify-content: space-between;
  position: relative;
  &::after {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100vh;
    background-color: #0000008c;
    opacity: 0.8;
    content: "";
    display: block;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    z-index: 1;
    width: 80%;
    margin: auto;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    align-items: center;
    .trailer {
      // width: 100%;
      // display: block;
      // flex: 1 1 100%;
      // margin-bottom: 20px;
    }
    .poster {
      width: 40%;
      text-align: right;
      img {
        width: 80%;
        height: 100%;
        display: inline-block;
      }
    }
    .info {
      width: calc(50% - 5%);
      margin-left: 10%;
      font-size: 20px;
      font-weight: 100;
    }
  }
}
.container {
  padding-top: 40px;
}
.skeletons {
  display: flex;
  .poster {
    flex-shrink: 0;
    width: 500px;
    height: 1200;
    margin-right: 70px;
  }
  .specs {
    flex-grow: 1;
  }
  .skeleton {
    border-radius: 10px;
    background-color: gray;
    &.title {
      width: 80%;
      height: 70px;
    }
    &.spec {
      width: 60%;
      height: 30px;
      margin-top: 20px;
    }
    &.plot {
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    &.etc {
      width: 50%;
      height: 50px;
      margin-top: 20px;
    }
  }
}
.movie-details {
  display: flex;
  color: #fff;
  .poster {
    flex-shrink: 0;
    width: 500px;
    height: 1200;
    margin-right: 70px;
    border-radius: 10px;
    background-color: #fff;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .specs {
    flex-shrink: 1;
    .title {
      color: #96f2d7;
      font-family: "Oswald", sans-serif;
      font-size: 70px;
      line-height: 1;
      margin-bottom: 30px;
    }
    .labels {
      color: #ccc;
      span {
        &::after {
          content: "\00b7";
          margin: 0 6px;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
    .plot {
      margin-top: 20px;
    }
    .ratings {
      .rating-wrap {
        display: flex;
        .rating {
          display: flex;
          align-items: center;
          margin-right: 32px;
          img {
            height: 30px;
            flex-shrink: 0;
            margin-right: 6px;
          }
        }
      }
    }
    h3 {
      margin: 24px 0 6px;
      color: #96f2d7;
      font-family: "Oswald", sans-serif;
      font-size: 20px;
    }
  }
}

.infoTitle {
  font-size: 35px;
  text-shadow: #fff 0 0 5px;
  font-weight: 400;
}
.infoRelease {
}

.infoGenres {
  span {
    display: inline-block;
    padding-right: 5px;
  }
}
.topbottom {
  margin: 15px 0;
  b {
    color: #96f2d7;
  }
}
</style>
