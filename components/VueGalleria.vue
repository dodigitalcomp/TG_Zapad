<template>
  <div class="galleria">
    <div class="galleria-header">
       <div class="galleria-header-text">
         <p>{{images[index].description}}</p>
       </div>
       <div class="galleria-header-page">
         <p class="active">{{index + 1}}</p>
         <span>/</span>
         <p>{{images.length}}</p>
       </div>
       <div @click="$nuxt.$emit('closeGalleria')" class="galleria-header-close">
         <img src="../assets/image/photos/xw.svg" alt="">
       </div>
    </div>
    <div class="galleria-image">
      <img class="galleria-image-img" :src="isMedia ? images[index].imgSrc :  images[index].src" alt="">
      <img @click="browseLeft" class="galleria-arrow-left" src="../assets/image/icon/arrow-l-w.svg" alt="">
      <img @click="browseRight" class="galleria-arrow-right" src="../assets/image/icon/arrow-r-w.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "VueGalleria",
    props: ['images', 'index', 'isMedia'],
    methods: {
      browseLeft () {
        if (this.index > 0) {
          this.index --
        } else {
          this.index = this.images.length - 1
        }
      },
      browseRight () {
        if (this.index + 1 < this.images.length) {
          this.index ++
        } else {
          this.index = 0
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .galleria {
    width: 100%;
    height: 100%;
    position: fixed;
    background: black;
    top: 0;
    left: 0;
    z-index: 9999;
    padding: 20px;

    &-header {
      color: #FFFFFF;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-text {
        flex: 1;
        p {
          max-width: 450px;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
        }
      }

      .active {
        opacity: 1;
      }

      &-page {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        p, span {
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          text-transform: uppercase;
          opacity: 0.5;
        }

        span {
          margin-left: 10px;
          margin-right: 10px;
        }
      }

      &-close {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        cursor: pointer;
      }
     }

    &-image {
      margin-top: 20px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &-img {
        height: 600px;

        @media (max-width: 768px) {
          height: auto;
        }
      }
    }

    &-arrow {
      &-left {
        position: absolute;
        top: 50%;
        left: 0;
        cursor: pointer;

      }

      &-right {
        position: absolute;
        top: 50%;
        right: 0;
        cursor: pointer;
      }

    }
  }

</style>