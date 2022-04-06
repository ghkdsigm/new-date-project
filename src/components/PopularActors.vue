<template>
  <div>
    <h2 class="officeh2">인기배우</h2>
    <div class="actorsList">
      <ul>
        <li v-for="item in personpopular.results" :key="item.id">
          <div>
            <RouterLink :to="`/persondetail/${item.id}`" class="actorItem">
              <img
                :src="`https://image.tmdb.org/t/p/original${item.profile_path}`"
                alt="item.name"
              />
            </RouterLink>
            <div class="sub-title">
              <div class="sub-right">
                <span class="info line1">
                  {{ item.name }}
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("person", ["personpopular"]),
  },
  created() {
    this.$store.dispatch("person/FETCH_PERSONPOPULAR");
  },
};
</script>

<style lang="scss" scoped>
.officeh2 {
  display: inline-block;
  margin: 50px 10px 0;
  font-size: 30px;
  font-weight: 500;
  font-family: Neusa, Impact, Helvetica Neue, Arial, Sans-Serif;
}
.actorsList {
  padding: 30px 0 200px;
  border-radius: 4px;
  text-align: center;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  li {
    width: 228px;
    margin: 10px;
    border-radius: 4px;
    background-size: contain;
    overflow: hidden;
    position: relative;
    a {
      width: 100%;
      max-height: 325px;
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
        max-height: 325px;
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
        .info {
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 1;
        }
      }
    }
  }
}
</style>
