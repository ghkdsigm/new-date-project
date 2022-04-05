<template>
  <header class="header">
    <div>
      <div class="header-gnb">
        <template>
          <h1 class="logo">
            <a href="/"
              ><p>MOVIE <em>ZONE</em></p></a
            >
          </h1>
          <div id="menu" class="gnb-left">
            <ul>
              <li><router-link to="/">홈</router-link></li>
              <li><router-link to="/sub">카테고리</router-link></li>
            </ul>
          </div>
          <!-- <button type="button" class="btn-search">
            <span>검색하기</span>
          </button> -->
        </template>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      blackObject: {
        color: "#000",
        //textShadow: "0 0 3px #fff",
      },
      whiteObject: {
        color: "#fff",
      },
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
