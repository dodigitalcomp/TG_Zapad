<template>
  <div>
    <Header />
     <div class="media-page" v-if="media">
       <div class="media-page-header">
         <div class="media-page-header-title">
           <NuxtLink :to="localePath('/media')" tag="p" class="cursor-pointer">
             <img class="mra-9" src="../../assets/image/(.svg" alt="">
             <img class="mra-9 arow" src="../../assets/image/Vector135.svg" alt="">
             <span>{{langPhrase.allMedia}}</span>
             <img class="mra-5" src="../../assets/image/).svg" alt="">
           </NuxtLink>
         </div>
         <div class="media-page-header-content">
           <div class="media-page-header-content-block">
             <div class="media-page-header-content-block-text">
               <div class="media-page-header-content-block-text-date">
                 <p>{{media.dateFrom}}</p>
                 <div class="flex">
                   <div class="flex mr-3">
                     <img class="mra-8" src="../../assets/image/gallery.svg" alt="">
                     <p>
                       <span v-if="media.photoList">{{media.photoList.length}}</span>
                       <span>{{langPhrase.photo}}</span>
                     </p>
                   </div>
                   <div class="flex">
                     <img class="mra-8" src="../../assets/image/video.svg" alt="">
                     <p>
                       <span v-if="media.videoList">{{media.videoList.length}}</span>
                       <span>{{langPhrase.video}}</span>
                     </p>
                   </div>
                 </div>
               </div>
             </div>
             <div class="media-page-header-content-block-title">
               <p>{{media.name}}</p>
             </div>
           </div>
         </div>
         <div class="media-page-header-footer">
<!--           <div class="media-page-header-footer-item border-right">-->
<!--             <div class="media-page-header-footer-item-block">-->
<!--               <img class="mr-1" src="../../assets/image/(.svg" alt="">-->
<!--               <img class="mr-2" src="../../assets/image/Group591.svg" alt="">-->
<!--               <span>Скачать все</span>-->
<!--               <img class="ml-2" src="../../assets/image/).svg" alt="">-->
<!--             </div>-->
<!--           </div>-->
           <div class="media-page-header-footer-item">
             <div @click="share" class="media-page-header-footer-item-block cursor-pointer">
               <img class="mr-1" src="../../assets/image/(.svg" alt="">
               <span>{{langPhrase.share}}</span>
               <img class="ml-2" src="../../assets/image/shareArrowIcon.svg" alt="">
               <img class="ml-2" src="../../assets/image/).svg" alt="">
             </div>
           </div>
         </div>
       </div>
       <div class="media-page-text">
         <p>{{media.detailText}}</p>
       </div>
       <div class="media-page-images" v-if="items && items.length">
         <div class="media-page-images-title">
           <p>{{langPhrase.photo}}</p>
         </div>
         <vue-picture-swipe  ref="pictureSwipe" :items="items"></vue-picture-swipe>
         <div class="media-page-images-allButton" v-if="items.length > 10">
           <div class="media-page-images-allButton-text">
             <img class="mr-1" src="../../assets/image/(.svg" alt="">
             <span>ещё {{items.length}} фото</span>
             <img class="ml-1" src="../../assets/image/).svg" alt="">
           </div>
         </div>
       </div>
       <div class="media-page-video" v-if="media && media.videoList && media.videoList.length">
         <div class="media-page-video-title">
           <p>{{langPhrase.video}}</p>
         </div>
         <div class="media-page-video-items">
           <div class="media-page-video-items-virtual-tour iframe-height-100" v-for="(item, i) in media.videoList" :key="i" v-html="item.iframe"></div>
         </div>
       </div>
       <div class="media-page-author">
         <div class="media-page-author-left"></div>
         <div class="media-page-author-content">
           <div class="media-page-author-image">
             <div class="media-page-content-info-held-items media-page-author-image-flex">
               <div class="flex items-center mr-20">
                 <img src="../../assets/image/image300.jpg" alt="">
                 <div class="ml-3">
                   <p>Любовь Головина</p>
                   <p class="city">ректор БФУ им. И. Канта</p>
                 </div>
               </div>
               <div class="flex items-center">
                 <img src="../../assets/image/image300.jpg" alt="">
                 <div class="ml-3">
                   <p>Любовь Головина</p>
                   <p class="city">ректор БФУ им. И. Канта</p>
                 </div>
               </div>
             </div>
             <div class="media-page-author-body cursor-pointer" @click="openModal = true">
               <img class="mr-1" src="../../assets/image/(.svg" alt="">
               <span>сообщить об ошибке</span>
               <img class="ml-1" src="../../assets/image/).svg" alt="">
             </div>
           </div>
         </div>
       </div>
       <div class="media-page-pagination line-block">
         <div class="media-page-pagination-title" v-if="same_media && same_media.langPhrase">
           <p>{{same_media.langPhrase.title}}</p>
         </div>
         <div class="line-dn"></div>
         <div class="media-page-pagination-footer">
           <NuxtLink :to="localePath('/media')" tag="div" class="flex cursor-pointer">
             <img class="mr-1" src="../../assets/image/(.svg" alt="">
             <span>{{langPhrase.allMedia}}</span>
             <img class="ml-2" src="../../assets/image/).svg" alt="">
           </NuxtLink>
         </div>
       </div>
       <div class="media-page-block" v-if="same_media && same_media.listItems">
         <NuxtLink :to="item.url" tag="div" class="media-page-block-item" v-for="(item ,i) in same_media.listItems" :key="i">
           <div class="media-page-block-item-text">
             <div class="media-page-block-item-text-date">
               <p>{{item.date}}</p>
             </div>
             <div class="flex">
               <div class="flex mr-3">
                 <img class="mra-8" src="../../assets/image/gallery.svg" alt="">
                 <p>
                   <span>{{item.pictureCount}}</span>
                   <span v-if="langPhrase">{{langPhrase.photo}}</span>
                 </p>
               </div>
               <div class="flex">
                 <img class="mra-8" src="../../assets/image/video.svg" alt="">
                 <p>
                   <span>{{item.videoCount}}</span>
                   <span v-if="langPhrase">{{langPhrase.video}}</span>
                 </p>
               </div>
             </div>
           </div>
           <div class="media-page-block-item-img">
             <img :src="item.picture" alt="">
           </div>
           <div class="media-page-block-item-title">
             <p>{{item.name}}</p>
           </div>
         </NuxtLink>
       </div>
     </div>
    <Footer/>
    <Modal v-if="openModal"/>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  import VueSwiper from "../../components/VueSwiper";
  import { mapActions, mapState} from 'vuex'
  import Modal from "../../components/Modal";
  export default {
    name: "mediaPage",
    components: {Modal, VueSwiper, Footer, Header},
    data() {
      return {
        items: [],
        openModal: false,
      };
    },
    computed: {
      ...mapState({
        media: (state) => state.media.media,
        langPhrase: (state) => state.media.langPhrase,
        same_media: (state) => state.media.same_media,
      })
    },
    created() {
      this.$nuxt.$on('close', () => {
        this.openModal = false;
      });
      if (this.$route.params.id) {
        this.getMediaData(this.$route.params.id + '/').then(() => {
          if (this.media.photoList && this.media.photoList.length) {
            this.media.photoList.map((item) => {
              const obj = {
                src: item.imgSrc,
                thumbnail: item.imgSrc,
                w: 1100,
                h: 820,
                pid: 'image-two'
              }
              this.items.push(obj)
            })
          }
        })
      }
    },
    methods: {
      ...mapActions({
        getMediaData: 'media/getMediaData'
      }),
      async share () {
        const shareData = {
          title: this.media.name,
          text: this.media.detailText,
          url: window.location.href
        }
        try {
          await navigator.share(shareData);
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>

<style scoped lang="scss">

  .galleria {
    z-index: 99999;
  }

  .mra-8 {
    margin-right: 8px;
  }

  .media-page {
    &-header {
      padding: 140px 20px 30px 20px;
       &-title {
         p {
           display: flex;
           align-items: center;
           font-style: normal;
           font-weight: normal;
           font-size: 15px;
           line-height: 20px;
           text-transform: uppercase;
           color: #221F1A;

           img {
             margin-top: 2px;
           }
         }
       }

      &-content {
        margin-top: 20px;
        border-top: 1px solid;
        border-bottom: 1px solid;
        display: flex;
        padding-top: 20px;
        padding-bottom: 20px;

        &-block {
          display: flex;
          flex-direction: column;
          flex: 1;

          @media (max-width: 850px) {
            border-right: 0;
            padding-right: 0;
          }


          &-text {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 80px;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;

            @media (max-width: 850px) {
              margin-bottom: 30px;
            }

            &-date {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex: 1;
            }

            &-author {
              display: flex;
              align-items: flex-start;
              text-align: right;

              @media (max-width: 850px) {
                display: none;
              }

              img {
                margin-top: 5px;
                margin-right: 15px;
              }
            }


          }

          &-title {
            display: flex;
            justify-content: center;
            margin-bottom: 120px;
            p {
              font-style: normal;
              font-weight: normal;
              font-size: 50px;
              line-height: 50px;
              text-align: center;
              text-transform: uppercase;
              color: #221F1A;
              max-width: 80%;

              span {
                font-style: italic;
              }

              @media (max-width: 850px) {
                font-size: 40px;
                line-height: 40px;
                max-width: 90%;
              }

              @media (max-width: 650px) {
                font-size: 22px;
                line-height: 25px;
                max-width: 100%;
              }
            }
          }
        }
      }

      &-footer {
        margin-top: 20px;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid;

        @media (max-width: 650px) {
          flex-wrap: wrap;
          justify-content: center;
        }

        .border-right {
          border-right: 1px solid;
        }

        &-item {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          padding-bottom: 40px;
          padding-top: 40px;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-align: center;
          text-transform: uppercase;
          color: #211F1A;

          @media (max-width: 650px) {
            padding-bottom: 20px;
            padding-top: 20px;
          }

          @media (max-width: 650px) {
            width: 50%;
            flex: inherit;
            padding-bottom: 12px;
            padding-top: 12px;
          }

          &-block {
            display: flex;
            align-items: center;
          }

        }
      }
     }

    &-text {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 50px;
      padding-bottom: 120px;
      border-bottom: 1px solid;
      margin-right: 20px;
      margin-left: 20px;

      @media (max-width: 850px) {
        padding-top: 30px;
        padding-bottom: 60px;
        justify-content: flex-end;
      }

      @media (max-width: 650px) {
        padding-top: 10px;
        padding-bottom: 40px;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        color: #221F1A;
        max-width: 689px;

        @media (max-width: 850px) {
          font-size: 15px;
          line-height: 20px;
          max-width: 542px;
        }

        @media (max-width: 650px) {
          max-width: 100%;
        }
      }
    }

    &-images {
      display: flex;
      margin-left: 20px;
      margin-right: 20px;
      padding-top: 20px;
      height: 545px;
      padding-bottom: 20px;
      border-bottom: 1px solid;
      position: relative;

      @media (max-width: 850px) {
        margin-right: 0;
        height: 430px;
      }

      @media (max-width: 760px) {
        flex-direction: column;
        height: auto;
      }

      .item3-mini {
        display: block;
        @media (max-width: 650px) {
          display: none;
        }
      }

      &-allButton {
        position: absolute;
        bottom: 20px;
        right: 0;

        @media (max-width: 850px) {
          right: 20px;
        }
        @media (max-width: 650px) {
          position: relative;
          margin-top: 30px;
        }

        &-text {
          display: flex;
          justify-content: center;
          align-items: center;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-align: center;
          text-transform: uppercase;
          color: #211F1A;
          white-space: nowrap;

          img {
            margin-bottom: 0;
          }
        }
      }


      &-title {
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 32px;
        text-transform: uppercase;
        color: #221F1A;
        margin-right: 144px;

        @media (max-width: 1250px) {
          font-size: 22px;
          line-height: 25px;
          margin-right: 30px;
        }

        @media (max-width: 650px) {
          margin-bottom: 30px;
        }
      }

      &-image {
        margin-right: 20px;

        img {
          margin-bottom: 20px;

          @media (max-width: 650px) {
            width: 100%;
          }
        }
        &-last {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;

          .max {
            @media (max-width: 1200px) {
              display: none;
            }
          }
        }

      }
    }

    &-video {
      margin-left: 20px;
      margin-right: 20px;
      padding-top: 20px;
      padding-bottom: 60px;
      display: flex;

      @media (max-width: 650px) {
        flex-direction: column;
      }

      &-title {
        margin-right: 250px;

        @media (max-width: 1250px) {
          margin-right: 110px;
        }

        @media (max-width: 650px) {
          margin-bottom: 30px;
        }


        p {
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 32px;
          text-transform: uppercase;
          color: #221F1A;


          @media (max-width: 1250px) {
            font-size: 22px;
            line-height: 25px;
          }
        }
      }
      &-items {
        width: 50%;
        @media (max-width: 1250px) {
          width: 100%;
        }
        &-virtual-tour {
          /*background-image: url("../../assets/image/bg2.jpg");*/
          background-size: 100% 480px;
          background-repeat: no-repeat;
          height: 480px;
          width: 100%;
          padding-top: 30px;
          padding-left: 20px;
          padding-bottom: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-bottom: 20px;

          @media (max-width: 850px) {
            background-size: 100% 308px;
            height: 308px;
          }

          @media (max-width: 650px) {
            background-size: 100% 290px;
            height: 290px;
          }



          &-title {
            p {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              text-transform: uppercase;
              color: #FFFFFF;
            }
          }

          &-content {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
            margin-bottom: 50px;

            @media (max-width: 850px) {
              margin-top: 20px;
              margin-bottom: 20px;
            }

            @media (max-width: 650px) {
              margin-top: 0;
              margin-bottom: 0;
            }

            .img {
              height: 250px;
              width: 207px;
              background-image: url("../../assets/image/Untitled-removebg-preview.png");
              background-repeat: no-repeat;
              background-size: 316px 250px;
              background-position: center;
              display: flex;
              justify-content: center;
              align-items: center;

              @media (max-width: 850px) {
                height: 202px;
                width: 162px;
                background-size: 246px 202px;
              }

              @media (max-width: 650px) {
                height: 171px;
                width: 136px;
                background-size: 208px 171px;
              }
            }
          }
        }
      }

    }

    &-author {
      display: flex;
      margin-left: 20px;
      margin-right: 20px;
      border-top: 1px solid;
      margin-bottom: 44px;

      &-content {
        padding-top: 20px;
        width: 100%;
      }

      &-block {

        margin-top: 60px;
        margin-bottom: 60px;
        &-text {
          margin-bottom: 15px;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          color: #221F1A;
        }
      }

      &-image {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 100%;


        @media (max-width: 650px) {
          flex-direction: column-reverse;
        }

        &-flex {
          display: flex;

          img {
            width: 60px;
            height: 60px;
          }

          @media (max-width: 650px) {
            flex-direction: column;
            margin-top: 40px;

          }

          div:nth-child(1) {
            @media (max-width: 650px) {
              margin-bottom: 20px;
            }
          }
        }
      }

      &-body {
        display: flex;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        /* identical to box height, or 133% */

        text-align: right;
        text-transform: uppercase;

        /* tgz_black */

        color: #211F1A;
      }

      &-left {
        min-width: 345px;

        @media (max-width: 850px) {
          min-width: 145px;
        }
        @media (max-width: 650px) {
          display: none;
        }
      }
    }

    &-pagination {
      border-top: 1px solid;
      margin-right: 20px;
      margin-left: 20px;
      height: 240px;
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-between;


      &-title {
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        text-transform: uppercase;
        color: #221F1A;

        @media (max-width: 850px) {
          font-size: 30px;
          line-height: 32px;
        }

        @media (max-width: 650px) {
          font-size: 25px;
          line-height: 25px;
        }
      }

      &-footer {
        display: flex;
        justify-content: flex-end;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        text-transform: uppercase;
        color: #221F1A;
      }
    }

    &-block {
      border-top: 1px solid;
      border-bottom: 1px solid;
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 150px;
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;

      @media (max-width: 650px) {
        flex-direction: column;
        margin-bottom: 60px;
      }

      &-item:nth-child(1) {
        padding-right: 20px;
        @media (max-width: 850px) {
          border-right: 1px solid;
        }

        @media (max-width: 650px) {
          border-right: 0;
          border-bottom: 1px solid;
          margin-bottom: 20px;
          padding-right: 0;
        }
      }

      &-item:nth-child(2) {
        padding-right: 20px;
        padding-left: 20px;
        border-right: 1px solid;
        border-left: 1px solid;

        @media (max-width: 850px) {
          display: none;
        }
      }

      &-item:nth-child(3) {
        padding-left: 20px;
      }
      &-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        height: 430px;

        @media (max-width: 650px) {
          height: auto;
        }

        &-authorMini {
          display: none;

          @media (max-width: 850px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            img {
              margin-bottom: 9px;
            }

            p {
              max-width: 120px;
            }
          }

          @media (max-width: 650px) {
            margin-top: 40px;
            margin-bottom: 65px;
          }
        }

        &-text {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-transform: uppercase;
          color: #221F1A;
          margin-bottom: 50px;

          @media (max-width: 850px) {
            margin-bottom: 20px;
          }

          &-date {
            @media (max-width: 850px) {
              display: flex;
              justify-content: space-between;
              flex: 1;
            }
          }

          &-author {
            display: flex;
            align-items: flex-start;

            img {
              margin-top: 5px;
              margin-right: 15px;
            }

            p {
              max-width: 120px;
            }

            @media (max-width: 850px) {
              display: none;
            }
          }
        }

        &-img {
          margin-bottom: 30px;
        }

        &-img, &-title, &-description {
          display: flex;
          justify-content: center;
        }

        &-title {
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 32px;
          text-align: center;
          text-transform: uppercase;
          color: #221F1A;
          margin-bottom: 30px;

          @media (max-width: 850px) {
            font-size: 22px;
            line-height: 25px;
          }

          p {
            max-width: 360px;

            span {
              font-style: italic;
            }
          }
        }
      }
    }


  }

</style>
