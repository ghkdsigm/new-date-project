<template>
  <div class="Vcontainer">
    <div class="Vinner">
      <div>
        <!-- !this.updated.videos.results -->
        <template v-if="!this.updated.videos.results.length == 0">
          <div class="iframeTitle" ref="ifT">
            <p>{{ this.title }}</p>
            <p>{{ this.subtitle }} {{ this.releasedate }}</p>
            <p>{{ this.genres }}</p>
          </div>
          <iframe
            :key="this.updated.videos.results[0].key"
            width="100%"
            :src="`${youtube(
              this.updated.videos.results[0].key,
            )}?autoplay=1&modestbranding=1&autohide=1&showinfo=0&showtitle=0&controls=0`"
            frameborder="0"
            allow="autoplay"
          >
          </iframe>
        </template>
        <template v-else>
          <div class="iframeTitle" ref="ifT">
            <p>{{ this.title2 }}</p>
            <p>{{ this.subtitle2 }} {{ this.releasedate2 }}</p>
            <p>{{ this.genres2 }}</p>
          </div>
          <iframe
            width="100%"
            :src="`https://www.youtube.com/embed/${video}?autoplay=1&modestbranding=1&autohide=1&showinfo=0&showtitle=0&controls=0`"
            frameborder="0"
            allow="autoplay"
          ></iframe>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { movieDetail } from "@/api/index.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      movieDetail: [],
      movieID: [],
      obj: "",
      movieUpdated: {},
      updated: {},
      title: "",
      subtitle: "",
      releasedate: "",
      genres: "",
      title2: "닥터스트레인지",
      subtitle2: "닥터스트레인지:대혼돈의 멀티버스",
      releasedate2: "2022-04-07",
      genres2: "판타지",
    };
  },
  computed: {
    ...mapState("movie", ["video", "movieId"]),
    cp() {
      return this.$store.state.movie.movieId;
    },
  },
  created() {
    this.$store.dispatch("movie/FETCH_VIDEO");
  },
  watch: {
    async cp(a) {
      this.movieDetail = a;
      const arr = this.movieDetail;
      for (let i = 0; i < arr.length - 19; i++) {
        const chosen = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
        //랜덤숫자 하나 뽑고
        this.movieID.push(chosen.id.toString());
        this.obj = this.movieID[0];
        const movieUpdated = new Object();
        this.movieUpdated.id = this.obj;
        return;
      }
      const res = await movieDetail(this.movieUpdated.id);
      //console.log(res);
      this.updated = res.data;
      this.title = this.updated.title;
      this.subtitle = this.updated.original_title;
      this.genres = this.updated.genres[0].name;
      this.releasedate = this.updated.release_date;
      console.log(this.updated);
    },
  },
  methods: {
    youtube(src) {
      return `https://www.youtube.com/embed/${src}`;
    },
    callTitle() {
      setTimeout(() => {
        this.$refs.ifT.style.opacity = "0";
      }, 5000);
    },
    callTitle2() {
      setTimeout(() => {
        this.$refs.ifT.style.opacity = "0";
      }, 5000);
    },
  },
  mounted() {
    this.callTitle();
    this.callTitle2();
  },
};
</script>

<style lang="scss" scoped>
.Vcontainer {
  .Vinner {
    padding: 0;
    border-radius: 4px;
    text-align: center;
    position: relative;
    &.no-result {
      padding: 70px 0;
    }
    iframe {
      width: 100%;
      min-height: 85vh;
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 200px;
      left: 0;
      bottom: 0;
      background: linear-gradient(0deg, #000 30%, transparent);
      display: block;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 200px;
      left: 0;
      top: 0;
      background: linear-gradient(180deg, #000 30%, transparent);
      display: block;
    }
  }
  .iframeTitle {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 15%;
    margin: 0 auto;
    font-size: 50px;
    font-weight: bold;
    text-align: left;
    opacity: 1;
    transition: opacity 2s ease-in-out;
    -moz-transition: opacity 2s ease-in-out;
    -webkit-transition: opacity 2s ease-in-out;
    p {
      width: 1240px;
      margin: 0 auto;
      &:nth-child(1) {
      }
      &:nth-child(2) {
        font-size: 27px;
        font-weight: 100;
        margin-bottom: 10px;
      }
      &:nth-child(3) {
        font-size: 24px;
        font-weight: 100;
      }
      &:nth-child(4) {
        font-size: 24px;
        font-weight: 100;
      }
    }
  }
}
</style>
