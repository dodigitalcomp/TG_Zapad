<template>
  <div >
    <div class="block">
      <img class="item item1" src="../assets/image/pic.jpg" alt="">
      <img class="item item2" src="../assets/image/image24.jpg" alt="">
      <img class="item item3" src="../assets/image/image-museum.jpg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper"
  }
</script>

<style scoped lang="scss">

  .block {
    position: relative;
    width: 501px;
    height: 354px;
    @media (max-width: 1000px) {
      width: 268px;
      height: 190px;
    }
    @media (max-width: 650px) {
      width: 339px;
      height: 239px;
    }
  }

  .item {
    width: 501px;
    height: 354px;
    position: absolute;

    @media (max-width: 1000px) {
      width: 268px;
      height: 190px;
    }
  }

  .item3 {
    top: 10px;
    left: 10px;
    @media (max-width: 650px) {
      width: 329px;
      height: 229px;
    }
  }
  .item2 {
    top: 25px;
    left: 25px;
    opacity: 0.5;
    @media (max-width: 650px) {
      width: 309px;
      height: 229px;
    }
  }
  .item1 {
    top: 40px;
    left: 40px;
    opacity: 0.5;
    @media (max-width: 650px) {
      width: 279px;
      height: 229px;
    }
  }

</style>
