<template>
  <div class="teachers" v-if="loader">
    <swiper v-if="data && data.length" ref="swiperThumbs" class="swiper teachers-swiper" :options="swiperOption">
      <swiper-slide v-for="(item, i) in data" :key="i" class="swiper-slide" :index="i">
        <div class="teachers-item">
          <div class="teachers-item-image">
            <img :src="item.img" alt="">
          </div>
          <p class="teachers-item-name">
            {{item.name}}
          </p>
          <p class="teachers-item-specialization">
            {{item.staffPost}}
          </p>
        </div>
      </swiper-slide>
    </swiper>
    <img class="arrows__btn arrows__btn_prev-t teachers-arrow-left" src="../assets/image/Vector999.svg">
    <img class="arrows__btn arrows__btn_next-t teachers-arrow-right" src="../assets/image/Vector199.svg">
  </div>
</template>

<script>
import VueGalleria from "./VueGalleria";
export default {
  name: "Teachers",
  props: ['count', 'data'],
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
          nextEl: '.arrows__btn_next-t',
          prevEl: '.arrows__btn_prev-t'
        }
      }
    }
  },
  mounted() {
    this.loader = true
  },
}
</script>

<style scoped lang="scss">

  .border-left {
    border-left: 1px solid;

    @media (max-width: 650px) {
      display: none !important;
    }
  }

 .teachers {
     border-bottom: 1px solid;
     border-top: 1px solid;
     padding-bottom: 20px;
     padding-top: 20px;
     margin-right: 20px;
     display: flex;
     height: 454px;
     position: relative;
     margin-bottom: 100px;


   @media (max-width: 850px) {
     margin-bottom: 80px;
   }

   @media (max-width: 650px) {
     margin-bottom: 60px;
   }

   &-arrow-left, &-arrow-right{
     position: absolute;
     top: calc(50% - 15px);
     height: 30px;
     width: 20px;
     cursor: pointer;
     z-index: 1;
   }
   &-arrow-left {
     left: 0;
   }

   &-arrow-right {
     right: 0;
   }

   /*&-item:first-child {*/
   /*  border-right: 1px solid;*/

   /*  @media (max-width: 850px) {*/
   /*    display: none;*/
   /*  }*/

   /*}*/

   &-item {
     display: flex;
     flex-direction: column;
     align-items: center;
     flex: 1;
     height: 100%;

       @media (max-width: 850px) {
         width: 100%;
       }

     &-image {
       display: flex;
       justify-content: center;
       margin-top: 80px;

       img {
         width: 218px;
         height: 218px;
       }
     }

     &-name ,&-specialization {
       display: flex;
       justify-content: center;
     }

     &-name {
       font-style: normal;
       font-weight: normal;
       font-size: 18px;
       line-height: 26px;
       text-align: center;
       color: #221F1A;
       margin-top: 20px;
     }

     &-specialization {
       margin-top: 10px;
       font-style: normal;
       font-weight: normal;
       font-size: 15px;
       line-height: 20px;
       text-align: center;
       text-transform: uppercase;
       color: #221F1A;
       max-width: 250px;

       @media (max-width: 500px) {
         max-width: 90px;
       }
     }

   }

 }
</style>