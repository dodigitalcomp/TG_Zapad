<template>
  <div class="event-page-content-info-image" v-if="loader">
    <swiper v-if="images && images.length" ref="swiperThumbs" class="swiper" :options="swiperOption">
      <swiper-slide v-for="(slide, i) in images" :key="i" class="swiper-slide" :index="i">
        <div class="block">
          <img class="image" @click="zoomImage(i)" :src="slide.src" alt="">
          <p class="text">{{slide.description}}</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="pagination" v-if="images && images.length > 1">
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="event-page-content-info-image-pag-img">
         <img class="arrows__btn arrows__btn_prev" src="../assets/image/Vector999.svg" alt="">
         <img class="arrows__btn arrows__btn_next" src="../assets/image/Vector199.svg" alt="">
      </div>
    </div>
    <VueGalleria v-if="zoom" :index="zoomIndex" :images="images"/>
  </div>
</template>

<script >
import VueGalleria from "./VueGalleria";
export default {
  name: 'VueSwiper',
  components: {VueGalleria},
  data () {
    return {
      zoomIndex: null,
      zoom: false,
      selected: 'Technologies',
      loader: false,
      openSelect: false,
      typePage: 'bullets',
      swiperOptionSlider: {
        centeredSlides: true,
        spaceBetween: 10,
        slidesPerView :100,
      },
      swiperOption: {
        spaceBetween: 10,
        slidesPerView :'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.arrows__btn_next',
          prevEl: '.arrows__btn_prev'
        }
      }
    }
  },
  props: ['text', 'simvol', 'images'],
  created() {
    this.$nuxt.$on('closeGalleria', () => {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
      this.zoomIndex = null
      this.zoom = false
    })
  },
  mounted() {
    if (window.innerWidth > 850) {
      this.swiperOption.pagination.type = 'bullets'
      this.swiperOption.pagination.renderBullet = function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    } else {
      if (this.simvol === '/') {
        this.swiperOption.pagination.type = 'custom'
        this.swiperOption.pagination.renderCustom = function (swiper, current, total) {
          return current + ' / ' + (total - 1);
        }
      } else {
        this.swiperOption.pagination.type = 'custom'
        this.swiperOption.pagination.renderCustom = function (swiper, current, total) {
          return current + '<div class="num-lin"></div>' + (total - 1);
        }
      }

    }
    this.loader = true
  },
  methods: {
    zoomImage (index) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      this.zoomIndex = index
      this.zoom = true
    }
  }
}
</script>

<style scoped lang="scss">

  .block {
    width: 100%;
    position: relative;
    padding-bottom: 50px;

    .text {
      position: absolute;
      left: 0;
    }
  }

  .image {
    height: 558px;
    cursor: pointer;
    /*width: 100%;*/


    @media (max-width: 1200px) {
      height: 450px;
    }
    @media (max-width: 911px) {
      height: 350px;
    }
    @media (max-width: 780px) {
      height: 250px;
    }
  }

  .event-page-content-info {
    position: relative;
    overflow: hidden;

    .text {
      text-align: left;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 20px;
      color: #221F1A;
      /*max-width: 453px;*/
    }
    &-image {
      &-img {
        display: flex;
        width: 100%;
        overflow: hidden;

        img:nth-child(odd) {
          margin-right: 20px;
        }
        img:nth-child(even) {
        }
      }

      &-pagMini {
        display: none;

        @media (max-width: 850px) {
          display: flex;
          margin-top: 20px;
          margin-bottom: 60px;
        }
      }

      &-pag {
        display: flex;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 60px;

        @media (max-width: 850px) {
          display: none;
        }

        &-number {
          width: 70%;

          .active {
            opacity: 1 !important;
          }

          span {
            text-align: left;
            margin-right: 20px;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
            opacity: 0.3;
          }
        }

        &-img {
          margin-top: 5px;
          margin-left: 50%;
          display: flex;

          img {
            margin-left: 22px;
          }

          @media (max-width: 850px) {
            display: none;
          }
        }
      }
    }
  }


</style>
