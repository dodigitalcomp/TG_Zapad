<template v-if="loading">
  <div>
    <Header/>
    <div class="search">
      <div class="search-header">
        <div class="search-header-input">
          <form @submit.prevent="searchData" class="search-header-input-block">
            <img src="../assets/image/search.svg" alt="">
            <input v-model="searchText" type="text">
            <button type="submit" >
              <img class="mr-1" src="../assets/image/(.svg" alt="">
              <span>найти</span>
              <img class="ml-1" src="../assets/image/).svg" alt="">
            </button>
          </form>
          <button @click="hideText"  v-if="searchText" class="close">
            <img src="../assets/image/x.svg" alt="">
          </button>
          <div v-if="searchContent" class="search-header-input-content">
            <div class="search-header-input-content-block">
              <p>Мероприятия</p>
              <p>Музей</p>
              <p>Музейный фонд</p>
              <p>Музыкальная программа</p>
              <p>Мифы</p>
            </div>
          </div>
        </div>
      </div>
      <div class="search-body" v-if="listItem && listItem.length">
        <div class="search-body-title">
          <p>результаты</p>
          <div class="search-body-title-right">
            <img class="mr-1" src="../assets/image/(.svg" alt="">
            <span>все события</span>
            <img class="ml-1" src="../assets/image/arrow.svg" alt="">
            <img class="ml-1" src="../assets/image/).svg" alt="">
          </div>
        </div>
        <div class="search-body-content" >
          <div class="search-body-content-left" v-if="blocks">
            <label class="search-body-content-left-item cursor-pointer"  @click="searchData()">
              <input class="search-body-content-left-item-radio" checked="true" name="filter" type="radio">
              <p  class="search-body-content-left-item-type">Все</p>
<!--              <div class="search-body-content-left-item-count">-->
<!--                <img class="mr-1" src="../assets/image/(.svg" alt="">-->
<!--                <span>30</span>-->
<!--                <img class="ml-1" src="../assets/image/).svg" alt="">-->
<!--              </div>-->
            </label>
            <label class="search-body-content-left-item cursor-pointer" @click="filter(item.url)" v-for="(item, i) in blocks" :key="i">
              <input class="search-body-content-left-item-radio" name="filter" type="radio">
              <p  class="search-body-content-left-item-type">{{item.name}}</p>
<!--              <div class="search-body-content-left-item-count">-->
<!--                <img class="mr-1" src="../assets/image/(.svg" alt="">-->
<!--                <span>30</span>-->
<!--                <img class="ml-1" src="../assets/image/).svg" alt="">-->
<!--              </div>-->
            </label>
          </div>
          <div class="search-body-content-right" v-if="listItem && listItem.length">
            <NuxtLink tag="div" :to="item.url ? item.url : '/'" class="search-body-content-right-item" v-for="(item, i) in listItem" :key="i">
              <div class="search-body-content-right-item-info">
                 <div class="search-body-content-right-item-info-date">
                   <p>{{item.type}}</p>
                   <p>{{item.date}}</p>
                 </div>
                <div class="search-body-content-right-item-info-imageMini">
                  <img src="../assets/image/pic111.jpg" alt="">
                </div>
                <div class="search-body-content-right-item-info-title search-text">
                  <p v-html="item.name"></p>
                </div>
                <div class="search-body-content-right-item-info-description search-text">
                  <p v-html="item.text"></p>
                </div>
              </div>
              <div class="search-body-content-right-item-image">
                <img :src="item.picture" alt="">
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="search-pagination line-block" v-if="pagination && pagination.current_page && pagination.max_page > 1">
        <div class="search-pagination-page">
          <vs-pagination
              :total-pages="pagination.max_page"
              :current-page="+pagination.current_page ? +pagination.current_page : 1"
              @change="changePage"
          ></vs-pagination>
        </div>
        <div class="line-dn"></div>
        <div class="search-pagination-footer"></div>
      </div>
    </div>
    <Footer/>
    <Meta :head-data="this.head" />
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import { mapActions, mapState} from 'vuex'
  import VsPagination from '@vuesimple/vs-pagination';
  import Meta from "../components/Meta";
  export default {
    name: "search",
    components: {Meta, Footer, Header, VsPagination},
    data() {
      return {
        searchContent: false,
        loading: false,
        searchText: '',
      }
    },
    computed: {
      ...mapState({
        listItem: (state) => state.search.listItem,
        head: (state) => state.search.head,
        blocks: (state) => state.search.blocks,
        pagination: (state) => state.search.pagination
      })
    },
    // created() {
    //   this.search().then(() => {
    //     this.loading = true
    //   })
    // },
    methods: {
      ...mapActions({
        search: 'search/search',
        searchByUrl: 'search/searchByUrl',
      }),
      hideText () {
        this.searchText = ''
        this.searchData()
      },
      changePage(page) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        let text = this.searchText + '&PAGEN_1=' + page
        this.search(text)
      },
      searchData() {
        this.search(this.searchText).then(() => {})
      },
      filter(url) {
        this.searchByUrl(url)
      }
    }
  }
</script>

<style scoped lang="scss">

  .search {
    padding: 160px 20px 0 20px;

    &-header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 35px;

      &-input {
        width: 70%;
        background: #FFDD7C;
        position: relative;

        .close {
          position: absolute;
          right: 10px;
          width: 18px;
          height: 18px;
          top: calc(50% - 9px);
        }


        @media (max-width: 650px) {
          width: 100%;
        }
          &-block {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 20px;

          input {
            margin-left: 20px;
            width: 100%;
            background: #FFDD7C;
            outline: none;
            height: 60px;
          }

          button {
            display: flex;
            align-items: center;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
            margin-right: 54px;
          }

        }

        &-content {
          width: 100%;
          position: absolute;
          top: 60px;
          background: #FFDD7C;

          &-block {
            border-top: 1px solid;
            margin-left: 20px;
            margin-right: 20px;
            padding: 30px 40px 40px 40px;

            p {
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 26px;
              color: #221F1A;
              margin-bottom: 20px;
            }
          }
        }
      }
    }

    &-body {
      &-title {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        text-transform: uppercase;
        color: #221F1A;
        margin-bottom: 20px;

        &-right {
          display: none;
        }

        @media (max-width: 850px) {
          display: flex;
          justify-content: space-between;

          &-right {
            display: flex;
            align-items: center;
          }
        }
      }

      &-content {
        display: flex;
        border-top: 1px solid;

        &-left {
          margin-top: 20px;
          width: 20%;
          border-right: 1px solid;
          margin-bottom: 20px;

          @media (max-width: 850px) {
            display: none;
          }

          &-item:first-child{
            margin-bottom: 40px;
          }

          &-item {
            display: flex;
            align-items: center;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
            margin-bottom: 20px;

            &-radio {
              margin-right: 5px;

              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;

              border-radius: 50%;
              width: 10px;
              height: 10px;

              border: 2px solid #999;
              transition: 0.2s all linear;
            }

            &-radio:checked {
              border: 5.2px solid black;
            }

            &-count {
              margin-left: 5px;
              display: flex;
              align-items: center;
            }
          }

        }

        &-right {
          flex: 1;
          padding-left: 20px;

          @media (max-width: 850px) {
            padding-left: 0;
          }

          &-item:last-child {
            border-bottom: 0;
          }

          &-item {
            display: flex;
            border-bottom: 1px solid;
            justify-content: space-around;

            &-info {
              padding-right: 20px;
              border-right: 1px solid;
              margin-bottom: 20px;
              margin-top: 20px;
              width: 65%;

              @media (max-width: 850px) {
                max-width: 70%;
              }

              @media (max-width: 650px) {
                max-width: 100%;
                border-right: 0;
                padding-right: 0;
              }

              &-imageMini {
                display: none;
                @media (max-width: 650px) {
                  display: flex;
                  justify-content: center;
                  margin-bottom: 30px;

                  img {
                    width: 199px;
                    height: 150px;
                  }
                }
              }

              &-date {
                display: flex;
                justify-content: space-between;
                margin-bottom: 30px;

                p {
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 20px;
                  text-transform: uppercase;
                  color: #221F1A;

                  @media (max-width: 650px) {
                    font-size: 13px;
                    line-height: 15px;
                  }
                }
              }

              &-title {
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
                p {
                  max-width: 50%;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 30px;
                  line-height: 32px;
                  text-align: center;
                  text-transform: uppercase;
                  color: #221F1A;

                  @media (max-width: 850px) {
                    max-width: 100%;
                  }

                  @media (max-width: 650px) {
                    font-size: 22px;
                    line-height: 25px;
                  }

                  b {
                    background: #FFDD7C;
                  }
                }
              }

              &-description {
                display: flex;
                justify-content: center;
                margin-bottom: 70px;

                @media (max-width: 650px) {
                  margin-bottom: 40px;
                }

                p {
                  max-width: 50%;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 20px;
                  text-align: center;
                  color: #221F1A;
                  @media (max-width: 850px) {
                    max-width: 100%;
                  }
                  span {
                    background: #FFDD7C;
                  }
                }
              }
            }



            &-image {
              width: 30%;
              display: flex;
              justify-content: center;
              align-items: center;

              @media (max-width: 650px) {
                display: none;
              }

              img {
                @media (max-width: 850px) {
                  width: 187px;
                  height: 141px;
                }
              }
            }
          }
        }
      }
    }

    &-pagination {
      border-top: 1px solid;
      height: 240px;
      padding-top: 20px;
      padding-bottom: 20px;
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