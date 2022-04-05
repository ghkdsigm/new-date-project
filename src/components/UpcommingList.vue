<template>
  <div class="container">
    <h2 class="officeh2">개봉예정</h2>
    <div class="upcommingWrap">
      <ul class="movies">
        <li v-for="(item, index) in upcomming" :key="index" class="movie">
          <UpcommingListItem :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UpcommingListItem from "./UpcommingListItem";
export default {
  components: {
    UpcommingListItem,
  },
  computed: {
    ...mapState("movie", ["upcomming"]),
  },
  created() {
    this.$store.dispatch("movie/FETCH_UPCOMMING");
  },
};
</script>

<style lang="scss" scoped>
.container {
  .upcommingWrap {
    padding: 30px 0 200px;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
  }
  .message {
    color: gray;
    font-size: 20px;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    .movie {
      width: 228px;
      margin: 10px;
      border-radius: 4px;
      background-size: contain;
      overflow: hidden;
      position: relative;
      .movieItem {
        width: 100%;
        height: 342px;
        display: block;
        position: relative;
        &:hover {
          &::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            border: 5px solid #96f2d7;
          }
        }
        img {
          width: 100%;
        }
      }
    }
  }
  .title {
    margin: 0 0 15px;
    text-align: left;
    padding: 0 10px;
    h1 {
      display: inline-block;
      line-height: 36px;
      color: #fff;
      font-weight: 400;
      vertical-align: middle;
      .label {
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        font-size: 25px;
        font-weight: 500;
        font-family: Neusa, Impact, Helvetica Neue, Arial, Sans-Serif;
      }
    }
  }
  .sub-title {
    display: table;
    width: 100%;
    padding-top: 8px;
    padding-right: 12px;
    table-layout: fixed;
    vertical-align: middle;
    color: #a5a5a5;
    .sub-right {
      display: table-cell;
      vertical-align: top;
      .title1 {
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 1;
      }
    }
  }
}
</style>
