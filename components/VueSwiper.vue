<template>
  <div class="event-page-content-info-image">
    <swiper v-if="slides.length" ref="swiperThumbs" class="swiper" :options="swiperOption">
      <swiper-slide v-for="(slide, i) in slides" :key="i" class="swiper-slide" :index="i">
        <img src="../assets/image/image32.jpg" alt="">
      </swiper-slide>
    </swiper>
    <div v-if="text"><p class="text">{{text}}</p></div>
    <div class="pagination">
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="event-page-content-info-image-pag-img">
         <img class="arrows__btn arrows__btn_prev" src="../assets/image/Vector999.svg" alt="">
         <img class="arrows__btn arrows__btn_next" src="../assets/image/Vector199.svg" alt="">
      </div>
    </div>
<!--    <div class="event-page-content-info-image-pagMini">-->
<!--      <div class="event-page-content-info-image-pag-number">-->
<!--        <span class="active">10</span>-->
<!--        <span class="active">&#45;&#45;</span>-->
<!--        <span class="active">15</span>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script >
export default {
  name: 'VueSwiper',
  data () {
    return {
      selected: 'Technologies',
      openSelect: false,
      slides: [1, 1, 1, 1, 1],
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
          type: "bullets",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        navigation: {
          nextEl: '.arrows__btn_next',
          prevEl: '.arrows__btn_prev'
        }
      }
    }
  },
  props: ['text']
}
</script>

<style scoped lang="scss">
  .event-page-content-info {
    position: relative;
    overflow: hidden;

    .text {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 20px;
      color: #221F1A;
      max-width: 453px;
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
        }
      }
    }
  }


</style>
