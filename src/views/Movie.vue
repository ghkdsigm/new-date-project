<template>
  <div>
    <div class="wrapTitle">
      <p>
        {{ theMovie.Title.toUpperCase() }}
      </p>
    </div>
    <div class="wrap">
      <div class="content">
        <div class="">
          <div class="movie-details">
            <div
              :style="{
                backgroundImage: `url(${requestDiffSizeImage(
                  theMovie.Poster,
                )})`,
              }"
              class="poster"
            ></div>
            <div class="specs">
              <div class="title">
                {{ theMovie.Title }}
              </div>
              <div class="labels">
                <span>{{ theMovie.Released }}</span>
                <span>{{ theMovie.Runtime }}</span>
                <span>{{ theMovie.Country }}</span>
              </div>
              <div class="plot">
                {{ theMovie.Plot }}
              </div>
              <div class="ratings">
                <h3>Ratings</h3>
                <div class="rating-wrap">
                  <div
                    v-for="{ Source: name, Value: score } in theMovie.Ratings"
                    :key="name"
                    :title="name"
                    class="rating"
                  >
                    <img
                      src="https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Internet%20Movie%20Database.png"
                      alt="name"
                    />
                    <span>{{ score }}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3>Actors</h3>
                {{ theMovie.Actors }}
              </div>
              <div>
                <h3>Director</h3>
                {{ theMovie.Director }}
              </div>
              <div>
                <h3>Production</h3>
                {{ theMovie.Production }}
              </div>
              <div>
                <h3>Genre</h3>
                {{ theMovie.Genre }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      imageLoading: true,
    };
  },
  computed: {
    ...mapState("movie", ["theMovie", "loading"]),
  },
  created() {
    this.$store.dispatch("movie/searchMovieWithId", {
      //movie/id정보
      id: this.$route.params.id,
    });
  },
  methods: {
    requestDiffSizeImage(url, size = 700) {
      const src = url.replace("SX300", `SX${size}`);
      return src;
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
</style>
