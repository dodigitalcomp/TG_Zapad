<template>
  <div >
    <div class="block">
      <img class="item" :src="item" alt="" :class="'item' + (i + 1)"  v-for="(item, i) in newImages" :key="i">
    </div>
  </div>
</template>

<script>
export default {
  name: "Galleria",
  props: ['images', 'index'],
  data () {
    return {
        newImages: []
    }
  },
  created() {
    this.newImages = this.images
  },
  watch: {
    index(newValue) {
        this.newImages.splice(newValue, 1)
        console.log(this.images)
        this.newImages.unshift(this.images[newValue])
        console.log(this.newImages)
    },
    images(newValue) {
       this.newImages = JSON.parse(JSON.stringify(newValue))
    }
  }
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
    top: 40px;
    left: 40px;
    opacity: 0.5;
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
    top: 10px;
    left: 10px;
    z-index: 1;
    @media (max-width: 650px) {
      width: 279px;
      height: 229px;
    }
  }

</style>
