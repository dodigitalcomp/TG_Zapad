<template>
    <div class="main pt-30">
      <div class="image-bock flex items-center justify-center flex-col " v-if="homeData && homeData.property">
        <div class="image-bock-img">
          <img :src="homeData.property.main_img" alt="">
        </div>
        <div class="image-bock-title">
          <p class="title">{{homeData.property.firstScreenTitle}}</p>
          <p class="title william" >{{homeData.property.cursiveTitle}}</p>
        </div>
      </div>
      <div class="museum-block" v-if="homeData && homeData.property">
        <div class="museum-block-title">
          <p>{{homeData.property.h2}}</p>
        </div>
        <div class="museum-block-content">
          <div class="museum-block-content-text">
            <div></div>
            <div class="description">
              <p>{{homeData.property.text}}</p>
            </div>
            <div class="more">
              <NuxtLink tag="p" :to="homeData.property.show_more_link" class="flex pb-4 cursor-pointer"><img class="mr-1" src="../assets/image/(.svg" alt=""><span>{{homeData.property.show_more}}</span><img class="ml-1" src="../assets/image/).svg" alt=""></NuxtLink>
            </div>
          </div>
          <div class="museum-block-content-img">
            <div v-if="homeData.slider && homeData.slider.listItems">
              <Galleria :index="selectPage" :images="homeData.slider.listItems" :isMain="true"/>
            </div>
<!--            <div class="flex items-center justify-between w-full pb-3">-->
<!--              <p class="pagination-max">-->
<!--                <span class="page " :class="selectPage === i ? 'active' : ''" v-for="(item, i) in homeData.slider.listItems" @click="selectPage = i" :key="i">{{i + 1}}</span>-->
<!--              </p>-->
<!--              <p class="pagination-min">-->
<!--                <span class="page " :class="selectPage === i ? 'active' : ''" v-for="(item, i) in homeData.slider.listItems" @click="selectPage = i" :key="i">{{i + 1}}</span>-->
<!--              </p>-->
<!--              <img class="icon" src="../assets/image/Ellipse.svg" alt="">-->
<!--            </div>-->
          </div>
        </div>
      </div>
      <div class="poster-room" v-if="homeData && homeData.events">
         <div class="poster-room-header line-block" v-if="homeData.events.langPhrase">
           <p class="poster-room-header-title">{{homeData.events.langPhrase.title_block}}</p>
           <div class="line-dn"></div>
           <NuxtLink :to="localePath('/events')" tag="p" class="poster-room-header-more cursor-pointer"><img class="mr-1" src="../assets/image/(.svg" alt=""><span>{{homeData.events.langPhrase.all}}</span><img class="ml-1" src="../assets/image/).svg" alt=""></NuxtLink>
         </div>
         <div class="poster-room-content" v-if="homeData.events && homeData.events.length">
           <a :href="item.url" class="poster-room-content-block pr-5  min-block" v-for="(item, i) in homeData.events.listItems">
             <div class="poster-room-content-block-title">
               <div class="poster-room-content-block-title-text">
                 <p>{{item.time}}</p>
                 <p>{{item.type}}</p>
               </div>
               <div class="poster-room-content-block-title-authnr flex" v-if="item.place">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p >{{item.place}}</p>
               </div>
             </div>
             <div class="poster-room-content-block-body">
               <div class="poster-room-content-block-img">
                 <img :src="item.picture" alt="">
               </div>
               <div class="poster-room-content-block-description">
                 <p>{{item.name}}</p>
               </div>
               <div class="poster-room-content-block-title-authnrMini">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>{{item.name_cursive}}</p>
               </div>
             </div>
           </a>
           <div class="all-events">
             <NuxtLink tag="p" :to="localePath('/events')" class="flex cursor-pointer">
               <img class="mr-1" src="../assets/image/(.svg" alt="">
               <span>{{homeData.events.langPhrase.all}}</span>
               <img class="ml-1" src="../assets/image/).svg" alt="">
             </NuxtLink>
           </div>
         </div>
      </div>
<!--      <div class="virtual-tour" v-if="homeData && homeData.property" v-html="homeData.property.video">-->
<!--&lt;!&ndash;        <div class="virtual-tour-title">&ndash;&gt;-->
<!--&lt;!&ndash;          <p>виртуальный тур по музею</p>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="virtual-tour-content">&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="img">&ndash;&gt;-->
<!--&lt;!&ndash;            <p class="flex elem">&ndash;&gt;-->
<!--&lt;!&ndash;              <img class="mr-1" src="../assets/image/(w.svg" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;              <span>прогуляться</span>&ndash;&gt;-->
<!--&lt;!&ndash;              <img class="ml-1" src="../assets/image/)w.svg" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;            </p>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div></div>&ndash;&gt;-->
<!--      </div>-->
      <div class="education" v-if="homeData && homeData.education && homeData.education.educationBlock">
         <div class="education-title">
           <p>{{homeData.education.educationBlock.name}}</p>
         </div>
         <div class="education-content">
           <div>
             <p>{{homeData.education.educationBlock.previewText}}</p>
           </div>
           <img :src="homeData.education.educationBlock.previewPicture" alt="">
         </div>
         <div class="education-footer" v-if="homeData.education.langPhrase">
           <div>
             <a :href="homeData.education.educationBlock.program" class="flex "><img class="mr-1" src="../assets/image/(.svg" alt=""><span>{{homeData.education.langPhrase.about}}</span><img class="ml-1" src="../assets/image/).svg" alt=""></a>
           </div>
           <div>
             <a :href="homeData.education.educationBlock.schedule" class="flex "><img class="mr-1" src="../assets/image/(.svg" alt=""><span>{{homeData.education.langPhrase.schedule}}</span><img class="ml-1" src="../assets/image/).svg" alt=""></a>
           </div>
<!--           <div>-->
<!--             <a :href="homeData.education.educationBlock.materials" class="flex "><img class="mr-1" src="../assets/image/(.svg" alt=""><span>{{homeData.education.langPhrase.material}}</span><img class="ml-1" src="../assets/image/).svg" alt=""></a>-->
<!--           </div>-->
         </div>
      </div>
      <div class="news" v-if="homeData && homeData.news">
        <div class="poster-room-header line-block" v-if="homeData.news.langPhrase">
          <p class="poster-room-header-title">{{homeData.news.langPhrase.title_block}}</p>
          <div class="line-dn"></div>
          <NuxtLink :to="localePath('/news')" tag="a" class="poster-room-header-more">
            <img class="mr-1" src="../assets/image/(.svg" alt="">
            <span>{{homeData.news.langPhrase.all}}</span>
            <img class="ml-1" src="../assets/image/).svg" alt="">
          </NuxtLink>
        </div>
        <VueNewsSwiper :items="homeData.news.listItems"/>
        <div class="all-events">
          <NuxtLink :to="localePath('/news')" tag="p" class="flex cursor-pointer">
            <img class="mr-1" src="../assets/image/(.svg" alt="">
            <span>{{homeData.news.langPhrase.all}}</span>
            <img class="ml-1" src="../assets/image/).svg" alt="">
          </NuxtLink>
        </div>
      </div>
    </div>
</template>

<script>
import Galleria from "./Galleria";
import { mapActions, mapState} from 'vuex'
import VueNewsSwiper from "./VueNewsSwiper";
export default {
  name: "Main",
  components: {VueNewsSwiper, Galleria},
  data () {
    return {
      selectPage: 0
    }
  },
  computed: {
    ...mapState({
      homeData: (state) => state.language.homeData,
      head: (state) => state.language.head,
    })
  },
  created() {
    this.getHomeData().then(() => {
    })
  },
  methods: {
    ...mapActions({
      getHomeData: 'language/getHomeData',
    }),
  }
}
</script>

<style scoped lang="scss">

  #virtual-tour-play {
    width: 336px;
    height: 405px;
  }
  .all-events {
    display: none;

    @media (max-width: 650px) {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      margin-top: 20px;

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 20px;
        /* identical to box height, or 154% */

        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;

        /* Black brown */

        color: #221F1A;
      }
    }
  }
  .pt-30 {
    padding-top: 110px;
  }
  .min-block {
    @media (max-width: 800px) {
      display: none !important;
    }
  }
  .image-bock-img{
    max-width: 80%;
    margin-bottom: 40px;
  }
.image-bock-title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    color: #221F1A;
    max-width: 80%;

    @media (max-width: 1000px) {
      font-size: 40px;
      line-height: 40px;
    }
    @media (max-width: 650px) {
      font-size: 30px;
      line-height: 32px;
    }
  }

  .title-p {
    max-width: 565px;;
    font-style: italic;
    font-weight: normal;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    color: #221F1A;

    @media (max-width: 1000px) {
      font-size: 40px;
      line-height: 40px;
    }
    @media (max-width: 650px) {
      font-size: 30px;
      line-height: 32px;
    }
  }
}
.museum-block {
  padding: 20px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-title {
    width: 100%;
    border-bottom: 1px solid;
    padding-bottom: 20px;
    p{
      text-align: left;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 40px;
      text-transform: uppercase;
      color: #221F1A;

      @media (max-width: 1000px) {
        font-size: 30px;
        line-height: 30px;
      }
      @media (max-width: 650px) {
        font-size: 25px;
        line-height: 25px;
      }
    }
  }
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @media (max-width: 650px) {
      flex-direction: column;
    }

    &-text {
      height: 560px;
      border-right: 1px solid;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;

      @media (max-width: 850px) {
        height: 407px;
      }

      @media (max-width: 650px) {
        border: none;
        border-bottom: 1px solid;
        padding-bottom: 20px;
        margin-bottom: 20px;
      }

      .description {
        p{
          max-width: 471px;
          font-style: normal;
          font-weight: normal;
          font-size: 28px;
          line-height: 35px;
          color: #221F1A;
          margin-bottom: 20px;

          @media (max-width: 1000px) {
            font-size: 18px;
            line-height: 26px;
          }
        }
      }
      .more{
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          /* identical to box height, or 133% */

          text-align: right;
          text-transform: uppercase;

          /* Black brown */

          color: #221F1A;
        }

        @media (max-width: 650px) {
          justify-content: flex-start;
        }
      }
    }
    &-img {
      height: 560px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex: 1;

      @media (max-width: 850px) {
        height: 407px;
      }

      .page{
        font-size: 15px;
        line-height: 20px;
        text-align: right;
        text-transform: uppercase;
        color: #BDBDBD;
        margin: 5px;
        cursor: pointer;

      }
      @media (max-width: 650px) {
        .pagination-min {
          margin-top: 60px;
          margin-left: 134px;
        }
        .icon{
          margin-top: 60px;
        }
      }

      .pagination-min {
        display: none;
        margin-left: 53px;
        @media (max-width: 850px) {
          display: flex;
        }

        @media (max-width: 650px) {
          margin-left: 44%;
        }
      }

      .pagination-max {
        display: flex;
        margin-left: 120px;
        @media (max-width: 850px) {
          display: none;
        }
      }


      .active {
        color: #221F1A;
      }
    }
  }
}
.poster-room {
    background: #FFDD7C;
    padding: 20px;

    &-header {
      display: flex;
      flex-direction: column;


      @media (max-width: 650px) {
        padding-bottom: 20px;
        border-bottom: 1px solid;
      }

      &-title{
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        text-transform: uppercase;
        color: #221F1A;
        margin-bottom: 85px;

        @media (max-width: 1000px) {
          font-size: 30px;
          line-height: 30px;
        }
        @media (max-width: 650px) {
          font-size: 25px;
          line-height: 25px;
        }



      }
      &-more{
        display: flex;
        justify-content: flex-end;
        margin-top: 85px;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        text-align: right;
        text-transform: uppercase;
        color: #221F1A;
      }
    }

    &-content {
      margin-top: 20px;
      /*padding-top: 20px;*/
      border-top: 1px solid;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      @media (max-width: 650px) {
        margin-top: 0;
        border: none;
        flex-direction: column;
      }

      &-border-right {
        border-right: 1px solid #000000;
      }

      &-block:nth-child(2){
        border-right: 1px solid #000000;
        border-left: 1px solid #000000;
        @media (max-width: 850px) {
          padding-left: 0 !important;
        }
      }

      &-block:nth-child(5){
        border-right: 1px solid #000000;
        border-left: 1px solid #000000;
        @media (max-width: 850px) {
          padding-left: 0 !important;
        }
      }

      &-block:nth-child(3){
        @media (max-width: 850px) {
          padding-right: 0 !important;
        }
        @media (max-width: 650px) {
          padding-top: 20px;
        }
      }

      &-block {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 33.3%;
        border-bottom: 1px solid;
        padding: 20px;

        @media (max-width: 800px) {
          justify-content: space-between;
        }

        @media (max-width: 650px) {
          border: none;
          border-bottom: 1px solid;
          padding-left: 0;
          padding-right: 0;
        }

        &-title {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
          height: 60px;

          &-authnrMini {
            display: none;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;

            img {
              width: 7px;
              margin-bottom: 9px;
            }

            @media (max-width: 800px) {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 40px;
            }
          }

          &-authnr {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
            width: 50%;
            justify-content: end;


            p {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }


            img {
              width: 7px;
              margin-left: 10px;
            }

            @media (max-width: 800px) {
              display: none;
            }
          }


          &-text {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
            width: 50%;

            p {
              white-space: nowrap;
            }

            @media (max-width: 800px) {
              display: flex;
              justify-content: space-between;
              width: 100%;
            }

          }
        }

        &-body {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;


        }

        &-description {
          margin-top: 40px;
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 32px;
          text-align: center;
          text-transform: uppercase;
          color: #221F1A;
          max-width: 500px;
          margin-bottom: 60px;

          span {
            font-style: italic;
          }
        }

      }
    }
  }
.education {
  background: #FFDD7C;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;

  @media (max-width: 850px) {
    padding: 30px 20px;
  }

  &-title {
    p{
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 40px;
      text-transform: uppercase;
      color: #221F1A;

      @media (max-width: 1000px) {
        font-size: 30px;
        line-height: 30px;
      }
      @media (max-width: 650px) {
        font-size: 25px;
        line-height: 25px;
      }
    }
  }

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 85px;

    @media (max-width: 850px) {
      margin-top: 71px;
    }

    @media (max-width: 650px) {
      flex-direction: column-reverse;
    }

    p{
      max-width: 530px;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      color: #211F1A;

      @media (max-width: 800px) {
        font-size: 15px;
        line-height: 20px;
      }

      @media (max-width: 650px) {
        font-size: 18px;
        line-height: 26px;
      }

      span {
        color: red;
      }
    }
    img {
      width: 529px;
      height: 384px;
      margin-right: 100px;

      @media (max-width: 800px) {
        width: 294px;
        height: 213px;
        margin: 20px;
      }

      @media (max-width: 650px) {
        width: 335px;
        height: 244px;
      }
    }
  }
  &-footer {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid;
    align-items: center;
    padding-top: 20px;

    @media (max-width: 600px) {
      flex-wrap: wrap;
    }

    div:nth-child(1) {
      border-right: 1px solid;
    }

    div:nth-child(3) {
      @media (max-width: 600px) {
        width: 100%;
        margin-top: 20px;
        border-top: 1px solid;
      }
    }

    div {
      height: 110px;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;

      @media (max-width: 850px) {
        height: 70px;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        /* identical to box height, or 133% */

        text-align: right;
        text-transform: uppercase;

        /* Black brown */

        color: #221F1A;
      }

      @media (max-width: 600px) {
        width: 50%;
        flex: none;
      }
    }
    &-border {
      border-left: 1px solid;
      border-right: 1px solid;
    }
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
        }
      }
    }
  }
}

</style>
