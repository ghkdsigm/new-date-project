<template>
  <div class="not-found">
    <div class="status">404</div>
    <div class="message">페이지가 존재하지않습니다.</div>
    <button>
      <a href="/">메인으로</a>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  line-height: 1.2;
  text-align: center;
  padding: 80px 20px;
  .status {
    font-size: 160px;
    color: gray;
  }
  .message {
    font-size: 50px;
  }
  button {
    margin-top: 25px;
    border: 1px solid rgb(93, 93, 93);
    background-color: transparent;
    padding: 5px 15px;
    color: #000;
  }
}
</style>
