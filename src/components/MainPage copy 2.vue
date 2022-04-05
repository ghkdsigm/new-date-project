<template>
  <div>
    <div class="smokeBg">
      <div id="searchFrm">
        <div class="search-box">
          <div class="selects">
            <select
              v-for="filter in filters"
              :key="filter.name"
              v-model="$data[filter.name]"
              class="form-select"
            >
              <option v-if="filter.name === 'year'" value="">year</option>
              <option v-for="item in filter.items" :key="item">
                {{ item }}
              </option>
            </select>
          </div>
          <input
            type="text"
            id="keyword"
            name="keyword"
            v-model="title"
            @keyup.enter="apply"
            placeholder="Search some Movie!"
            class="input-text"
            title="검색어를 입력해 주세요"
          />
          <button
            type="button"
            class="btn-search"
            title="검색하기"
            @click="apply"
          >
            검색
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { search } from "@/api/index.js";
export default {
  data() {
    return {
      title: "",
      type: "movie",
      number: 10,
      year: "",
      filters: [
        {
          name: "type",
          items: ["movie", "series", "episode"],
        },
        {
          name: "number",
          items: [10, 20, 30, 40, 50, 60],
        },
        {
          name: "year",
          items: (() => {
            const years = [];
            const thisYear = new Date().getFullYear(); //최신년도
            for (let i = thisYear; i >= 1985; i -= 1) {
              years.push(i);
            }
            return years;
          })(),
        },
      ],
    };
  },
  methods: {
    async apply() {
      // searchmovie..
      if (this.title !== "") {
        this.$store.dispatch("movie/searchMovies", {
          title: this.title,
          type: this.type,
          number: this.number,
          year: this.year,
        });
      } else {
        alert("Please, Search some Movie.");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.smokeBg {
  min-height: 250px;
  overflow: hidden;
  background-size: cover;
  background-position: bottom;
  position: relative;
  background-image: url("~@/assets/images/imgbg.jpg");
  background-attachment: fixed;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(to top, #00000078, rgb(0 0 0 / 43%));
    display: block;
  }
  img {
    width: 100%;
  }
  #searchFrm {
    width: 515px;
    height: 100px;
    margin: auto;
    position: absolute;
    text-align: center;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    line-height: 100px;
    .search-box {
      .selects {
        width: 100%;
        display: flex;
        position: relative;
        select {
          min-width: 100px;
          color: #fff;
          padding: 10px 15px;
          margin: 0 10px;
          background: #1b1b1b;
          border: 1px solid #454545;
          border-radius: 5px;
          font-size: 17px;
          option {
            background-color: #000;
            border: 1px solid #eee;
            font-size: 20px;
          }
        }
      }
      input {
        background: transparent;
        border: 1px solid transparent;
        border-bottom: 1px solid #454545;
        padding: 15px;
        color: #fff;
        font-size: 23px;
        min-width: 450px;
        display: inline-block;
        box-sizing: border-box;
        font-weight: 100;
        &:focus {
          border-top: 1px solid transparent;
          border-bottom: 1px solid #fff;
          outline: none;
        }
        &::placeholder {
          font-weight: 500;
          font-size: 23px;
          color: rgb(141, 141, 141);
        }
      }
      .btn-search {
        overflow: hidden;
        position: relative;
        right: 0;
        top: 0;
        width: 64px;
        height: 59px;
        display: inline-block;
        text-indent: -9999px;
        border: none;
        background: transparent url("~@/assets/images/btn-main-search.png")
          no-repeat center;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
