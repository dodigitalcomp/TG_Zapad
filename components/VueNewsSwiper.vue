<template>
  <div class="news-content" v-if="loader">
    <swiper v-if="items && items.length" ref="swiperThumbs" class="swiper news-swiper" :options="swiperOption" >
      <swiper-slide v-for="(item, i) in items" :key="i" class="swiper-slide"  :index="i">
         <NuxtLink tag="div" :to="item.url" class="news-content-swiper news-content-swiper-border-r pr-5 cursor-pointer">
           <div class="news-content-swiper-title">
             <p>{{dateFormat(item.date, 1)}}</p>
             <p>{{item.rubric}}</p>
           </div>
           <div  class="news-content-swiper-content">
             <img :src="item.picture" alt="">
           </div>
           <div class="title">
             <p>{{item.name}}</p>
           </div>
           <div class="text">
             <p class="text-mini">{{item.text}}</p>
           </div>
         </NuxtLink>
      </swiper-slide>
    </swiper>
    <img class="arrows__btn arrows__btn_prev left" src="../assets/image/left.svg" alt="">
    <img class="arrows__btn arrows__btn_next right" src="../assets/image/Vector-r.svg" alt="">
  </div>
</template>

<script >
import VueGalleria from "./VueGalleria";
export default {
  name: 'VueNewsSwiper',
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
  props: ['text', 'simvol', 'items'],
  mounted() {
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
  .swiper-slide:last-child {
    .news-content-swiper {
      border-right: none !important;
    }
  }
  .news {
    padding: 40px 20px;
    &-content {
      margin-top: 20px;
      border-top: 1px solid;
      border-bottom: 1px solid;
      display: flex;
      justify-content: space-around;
      margin-bottom: 150px;
      position: relative;

      @media (max-width: 650px) {
        border-bottom: none;
        border-top: none;
        margin-bottom: 20px;
        flex-direction: column;
      }

      .left {
        display: block;
        font-size: 50px;
        position: absolute;
        top: 200px;
        left: 0;
        cursor: pointer;
        z-index: 999;
        @media (max-width: 650px) {
          display: none !important;
        }
      }
      .right{
        display: block;
        font-size: 50px;
        position: absolute;
        top: 200px;
        right: 0;
        cursor: pointer;
        z-index: 999;
        @media (max-width: 650px) {
          display: none !important;
        }
      }

      .news-content-swiper-border-r {
        border-right: 1px solid;
        @media (max-width: 650px) {
          border-right: none;
        }
      }

      &-swiper {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1;
        height: 540px;

        @media (max-width: 650px) {
          margin-top: 0;
          border-top: none;
          border-bottom: 1px solid;
          padding-left: 0;
          padding-right: 0;
        }

        &-title{
          display: flex;
          justify-content: space-between;

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 15px;
            /* identical to box height, or 115% */

            text-align: right;
            text-transform: uppercase;

            /* Black brown */

            color: #221F1A;
          }
        }
        .title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 32px;
          text-align: center;
          text-transform: uppercase;
          color: #221F1A;
          flex: 1;

          @media (max-width: 1000px) {
            font-size: 22px;
            line-height: 25px;
          }

          p {
            max-width: 340px;
          }
        }

        .text {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-align: center;
          color: #221F1A;
          flex: 1;
          margin-bottom: 70px;
          p {
            max-width: 340px;
          }
        }
        &-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
          flex: 1;
          img {
            max-width: 250px;
            max-height: 200px;
          }
        }
      }
    }
  }
  .image {
    height: 400px;
    cursor: pointer;
  }

  .event-page-content-info {
    position: relative;
    overflow: hidden;

    .text {
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
