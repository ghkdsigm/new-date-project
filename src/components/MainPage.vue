<template>
  <div>
    <div class="smokeBg"></div>
    <div class="wrap">1</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.smokeBg {
  min-height: 250px;
  overflow: hidden;
  background-image: url("~@/assets/images/imgbg.jpg");
  background-size: contain;
  background-position: revert;
  img {
    width: 100%;
  }
}
</style>
