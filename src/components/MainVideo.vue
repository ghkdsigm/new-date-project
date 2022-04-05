<template>
  <div class="Vcontainer">
    <div class="Vinner">
      <!-- <Video v-for="(movie, index) in video" :key="index" :movie="movie" /> -->
      <div>
        <!-- <video :src="`https://www.youtube.com/watch?v=${video[0].key}`"></video> -->
        <iframe
          width="100%"
          :src="`https://www.youtube.com/embed/${video}?autoplay=1&modestbranding=1&autohide=1&showinfo=0&showtitle=0&controls=0`"
          frameborder="0"
          allow="autoplay"
        ></iframe>
        <!-- <div v-for="(item, index) in this.Id" :key="index">
          {{ item }}
        </div> -->
        <!-- <div>
          {{ getId() }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import "default-passive-events";
import { mapState } from "vuex";
export default {
  // data() {
  //   return {
  //     Id: [],
  //   };
  // },
  computed: {
    ...mapState("movie", ["video", "movieId"]),
  },
  created() {
    this.$store.dispatch("movie/FETCH_VIDEO");
  },
  // methods: {
  //   getId() {
  //     const arr = this.$store.state.movie.movieId;
  //     for (let i = 0; i < arr.length; i++) {
  //       const chosen = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
  //       //랜덤숫자 하나 뽑고
  //       this.Id.push(chosen.id);
  //     }
  //     return this.Id[0];
  //   },
  // },
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
      min-height: 80vh;
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
}
</style>
