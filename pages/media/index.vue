<template>
  <div>
    <Header ref="header"/>
    <div class="media">
      <div class="media-header">
        <div class="media-header-title">
          <p>медиа материалы</p>
        </div>
        <div class="media-header-filter">
          <div class="media-header-filter-left " >
            <div class="item" @click="openFilter = !openFilter" v-if="filter">
              <img class="mr-1" src="../../assets/image/(.svg" alt="">
              <p>{{filter.name}}</p>
              <img src="../../assets/image/arrow.svg" alt="">
              <img class="ml-1" src="../../assets/image/).svg" alt="">
              <div class="item-nav" v-if="openFilter">
                <p class="item-nav-text" @click="getData(item.link)" v-for="(item, i) in filter.variants" :key="i">{{item.name}}</p>
              </div>
            </div>
            <div class="item" @click="openSort = !openSort" v-if="sort">
              <img class="mr-1" src="../../assets/image/(.svg" alt="">
              <p>{{sort.name}}</p>
              <img src="../../assets/image/arrow.svg" alt="">
              <img class="ml-1" src="../../assets/image/).svg" alt="">
              <div class="item-nav" v-if="openSort">
                <p class="item-nav-text" @click="getData(item.link)" v-for="(item, i) in sort.variants" :key="i">{{item.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="media-content" v-if="mediaData && mediaData.length">
        <NuxtLink :to="item.url" class="media-content-item cursor-pointer" v-for="(item, i) in mediaData" :key="i">
          <div class="media-content-item-text">
            <div class="media-content-item-text-date">{{item.date}}</div>
            <div class="media-content-item-text-author flex">
              <div class="flex">
                <img src="../../assets/image/gallery.svg" alt="">
                <p>
                  <span>{{item.pictureCount}}</span>
                  <span v-if="langPhrase">{{langPhrase.photo}}</span>
                </p>
              </div>
              <div class="flex">
                <img src="../../assets/image/video.svg" alt="">
                <p>
                  <span>{{item.videoCount}}</span>
                  <span v-if="langPhrase">{{langPhrase.video}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="media-content-item-img">
            <img :src="item.picture" alt="">
          </div>
          <div class="media-content-item-title">
            <p>{{item.name}}</p>
          </div>
          <div></div>
        </NuxtLink>
      </div>
      <div class="media-pagination line-block">
        <div class="media-pagination-page" v-if="pagination && pagination.max_page > 1">
          <vs-pagination
              :total-pages="pagination.max_page"
              :current-page="+pagination.current_page ? +pagination.current_page : 1"
              @change="changePage"
          ></vs-pagination>
        </div>
        <div class="line-dn"></div>
        <div></div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import { mapActions, mapState} from 'vuex'
  export default {
    name: "media",
    data () {
      return {
        openFilter: false,
        openSort: false,
      }
    },
    computed: {
      ...mapState({
        mediaData: (state) => state.media.mediaData,
        head: (state) => state.media.head,
        filter: (state) => state.media.filter,
        sort: (state) => state.media.sort,
        pagination: (state) => state.media.pagination
      })
    },
    created() {
      this.getMedia()
    },
    methods: {
      ...mapActions({
        getMedia: 'media/getMedia'
      }),
      changePage(page) {
        this.getMedia(page)
      },
      getData(link) {
        this.getMediaByLink(link)
      },
    }
  }
</script>

<style scoped lang="scss">
  .bg-yellow {
    background: #FFDD7C;
  }
.media {
  padding-top: 160px;


  &-header {
    display: flex;
    flex-direction: column;
    padding: 20px;

    &-title {
      font-style: normal;
      font-weight: normal;
      font-size: 50px;
      line-height: 50px;
      text-transform: uppercase;
      color: #211F1A;
      margin-bottom: 40px;

      @media (max-width: 700px) {
        font-size: 30px;
        line-height: 32px;
      }
    }

    &-filter {
      display: flex;
      justify-content: flex-start;

      &-left {
        display: flex;

        span{
          margin: 5px;
        }

        .item {
          cursor: pointer;
          display: flex;
          align-items: center;
          margin-right: 20px;
          position: relative;

          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-align: right;
          text-transform: uppercase;
          color: #221F1A;


          @media (max-width: 700px) {
            margin-right: 5px;
            font-size: 13px;
            line-height: 15px;
          }

          img {
            margin: 5px;
          }


          &-nav {
            padding: 20px;
            position: absolute;
            text-align: left;
            cursor: pointer;
            background: white;
            border: 1px solid #221F1A;
            box-sizing: border-box;
            z-index: 10;

            top: 35px;

            &-text{
              margin-bottom: 15px;
              white-space: nowrap;

              &:hover {
                opacity: 0.5;
              }
            }

            &-filter {
              p {
                white-space: nowrap;
              }

              &-container {
                display: block;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 22px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
              }

              /* Hide the browser's default checkbox */
              &-container input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
              }

              /* Create a custom checkbox */
              .checkmark {
                position: absolute;
                top: -7px;
                left: 0;
                height: 20px;
                width: 20px;
                background-color: #ffffff;
                border: 1px solid black;
              }

              /* On mouse-over, add a grey background color */
              &-container:hover input ~ .checkmark {
                background-color: #ffffff;
                border: 1px solid black;
              }

              /* When the checkbox is checked, add a blue background */
              &-container input:checked ~ .checkmark {
                background-color: #ffffff;
                border: 1px solid black;
              }

              /* Create the checkmark/indicator (hidden when not checked) */
              .checkmark:after {
                content: "";
                position: absolute;
                display: none;
              }

              /* Show the checkmark when checked */
              &-container input:checked ~ .checkmark:after {
                display: block;
              }

              /* Style the checkmark/indicator */
              &-container .checkmark:after {
                left: 7px;
                top: 2px;
                width: 6px;
                height: 10px;
                border: solid black;
                border-width: 0 1px 1px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
              }


              &-title {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
              }

              &-content {
                margin-left: 20px;

                &-item {
                  margin-bottom: 15px;
                }
              }
            }
          }
        }
      }

      &-right {
        display: flex;

        span{
          margin: 5px;
        }

        .active {
          opacity: 0.7;
        }

        .item {
          display: flex;
          align-items: center;
          margin-right: 20px;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-transform: uppercase;
          color: #221F1A;
          cursor: pointer;

          img {
            margin-right: 5px;
          }
        }
      }
    }
  }

  &-content {
    display: flex;
    flex-wrap: wrap;

    &-item:nth-child(1) ,
    &-item:nth-child(4) ,
    &-item:nth-child(7) ,
    &-item:nth-child(10) {
      margin-left: 20px;
      padding-right: 20px;

      position: relative;

      &::after {
        display: block;
        content: '';
        top: 0;
        right: -5px;
        width: 5px;
        height: 20px;
        position: absolute;
        background: white;
      }
      &::before {
        display: block;
        content: '';
        bottom: 0;
        right: -5px;
        width: 5px;
        height: 20px;
        position: absolute;
        background: white;
      }
    }

    &-item:nth-child(2) ,
    &-item:nth-child(5) ,
    &-item:nth-child(8) ,
    &-item:nth-child(11) {
      padding-left: 20px;
      padding-right: 20px;

      position: relative;

      &::after {
        display: block;
        content: '';
        top: 0;
        right: -5px;
        width: 5px;
        height: 20px;
        position: absolute;
        background: white;
      }
      &::before {
        display: block;
        content: '';
        bottom: 0;
        right: -5px;
        width: 5px;
        height: 20px;
        position: absolute;
        background: white;
      }
    }

    &-item:nth-child(3) ,
    &-item:nth-child(6) ,
    &-item:nth-child(9) ,
    &-item:nth-child(12) {
      border-right: 0;
      padding-left: 20px;
    }

    &-item:nth-child(1) ,
    &-item:nth-child(3) ,
    &-item:nth-child(5) ,
    &-item:nth-child(7) ,
    &-item:nth-child(9) ,
    &-item:nth-child(11) {
      @media (max-width: 1040px) {
         padding-right: 20px;
         margin-left: 20px;
         padding-left: 0;
         position: relative;
         border-right: 1px solid;

         &::after {
           display: block;
           content: '';
           top: 0;
           right: -5px;
           width: 5px;
           height: 20px;
           position: absolute;
           background: white;
         }
         &::before {
           display: block;
           content: '';
           bottom: 0;
           right: -5px;
           width: 5px;
           height: 20px;
           position: absolute;
           background: white;
         }
      }

    }

    &-item:nth-child(2) ,
    &-item:nth-child(4) ,
    &-item:nth-child(6) ,
    &-item:nth-child(8) ,
    &-item:nth-child(10) ,
    &-item:nth-child(12) {
      @media (max-width: 1040px) {
        padding-left: 20px;
        padding-right: 0;
        border-right: 0;
        margin-left: 0;
      }
    }


    &-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 516px;
      border-top: 1px solid;
      width: 32.3%;
      padding-top: 20px;
      border-right: 1px solid;


      @media (max-width: 1040px) {
        width: 47.7%;
        height: 365px;
      }

      @media (max-width: 690px) {
        width: 100%;
        padding-right: 0 !important;
        padding-left: 0 !important;
        margin-left: 20px !important;
        margin-right: 20px;
        border-right: 0 !important;
      }


      &-input {
        display: flex;
        justify-content: center;

        &-block {
          display: flex;
          border: 1px solid;
          align-items: center;
          justify-content: space-between;
          padding-right: 20px;
          padding-left: 20px;
          width: 70%;
          /*padding: 20px;*/
          @media (max-width: 900px) {
            width: 80% ;
          }

          @media (max-width: 680px) {
            width: 90% ;
          }

          input {
            height: 60px;
            background: #FFDD7C;
            width: 80%;
            outline: none;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
          }

          button {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-align: right;
            text-transform: uppercase;
            color: #221F1A;
            white-space: nowrap;

            @media (max-width: 900px) {
              visibility: hidden;
              position: relative;
              &::after {
                content: url("../../assets/image/Vector98.svg");
                visibility: visible;
                display: block;
                position: absolute;
                right: 0px;
                top: 0px;
              }
            }
          }
        }

      }

      &-email {
        height: 516px;
      }

      &-text {
        display: flex;
        justify-content: space-between;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        text-transform: uppercase;
        color: #221F1A;

        &-author {
          div {
            margin-left: 20px;

            p {
              margin-left: 8px;
            }
          }
        }
      }

      &-img, &-title {
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
        
        @media (max-width: 850px) {
          font-size: 22px;
          line-height: 25px;
        }

        p {
          max-width: 360px;

        }
      }
    }
  }

  &-pagination {
    border-top: 1px solid;
    margin-right: 20px;
    margin-left: 20px;
    height: 250px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;

    &-page {
      display: flex;
      justify-content: flex-start;


      .active {
        opacity: 0.4;
      }

      span {
        margin-right: 12px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        text-align: right;
        color: #221F1A;

        @media (max-width: 650px) {
          font-size: 13px;
          line-height: 15px;
        }
      }

      img {
        margin-left: 12px;
        @media (max-width: 650px) {
          width: 9px;
          height: 17px;
        }

      }
    }
  }


}
</style>
