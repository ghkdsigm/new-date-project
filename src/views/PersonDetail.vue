<template>
  <div>
    <div
      class="infoSection01"
      :style="`background-image: radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgb(0, 0, 0) 100%) ,url(https://image.tmdb.org/t/p/w1280${personCredit.cast[0].backdrop_path});`"
    >
      <div class="detailContent flex">
        <div class="poster">
          <img
            :src="`https://image.tmdb.org/t/p/original${personDetail.profile_path}`"
            :alt="personDetail.name"
            :title="personDetail.name"
          />
        </div>
        <div class="info">
          <div class="infoTitle topbottom">
            <span>{{ personDetail.name }} </span>
          </div>
          <div class="infoRelease topbottom">
            <span>{{ personDetail.birthday }}</span>
          </div>
          <div class="infoOriginName topbottom">
            <span><b>출신 :</b> {{ personDetail.place_of_birth }}</span>
          </div>
          <div class="infoStory topbottom">
            <b>성별 :</b>
            {{ personDetail.gender == 1 ? "여성" : "남성" }}
          </div>
          <div class="infoRating topbottom">
            <b>인기도 :</b>
            {{ personDetail.popularity }}
          </div>
          <div class="infoGenres topbottom">
            <b>작품횟수 : </b>
            {{ personCredit.cast.length }}개의 작품
          </div>
          <div class="infoGenres topbottom">
            <b>작품들 : </b>
            <ul>
              <li
                v-for="(item, index) in personCredit.cast.slice(1, 10)"
                :key="index"
              >
                <RouterLink :to="`/moviedetail/${item.id}`" target="_blank"
                  ><span>{{ item.title }}</span> <em>/</em>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { personDetail, personCredits } from "@/api/index.js";

export default {
  data() {
    return {
      personDetail: {},
      personCredit: {},
    };
  },
  async mounted() {
    //console.log(this.$route);
    //console.log(this.$route.params.id);
    const { id } = this.$route.params;
    const { data } = await personDetail(id);
    const res = await personCredits(id);
    // axios 요청 보내기
    console.log(res);
    //console.log(res.data.similar_movies.results);
    this.personDetail = data;
    this.personCredit = res.data;
  },
  // created() {
  //   this.$store.dispatch("movie/FETCH_UPCOMMING", {
  //     //movie/id정보
  //     id: this.$route.params.id,
  //   });
  // },
};
</script>

<style lang="scss" scoped>
.infoSection01 {
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
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
    background-image: linear-gradient(
      180deg,
      transparent,
      rgb(37 37 37 / 12%),
      #111
    );
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
        box-shadow: 0 0 15px 1px #000;
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

.infoTitle {
  font-size: 35px;
  text-shadow: #fff 0 0 5px;
  font-weight: 400;
}
.infoRelease {
}

.infoGenres {
  li {
    display: inline-block;
    a {
      span {
        display: inline-block;
        &:hover {
          color: #ffa19c;
        }
      }
      em {
        padding: 0 5px;
      }
    }
  }
}
.topbottom {
  margin: 15px 0;
  b {
    color: #96f2d7;
  }
}

.officeh2 {
  margin: 0 10px 15px;
  font-size: 28px;
  font-weight: 100;
  width: 100%;
  text-align: center;
}
</style>
