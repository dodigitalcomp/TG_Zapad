<template>
  <div>
    <Header/>
    <div class="search">
      <div class="search-header">
        <div class="search-header-input">
          <div class="search-header-input-block">
            <img src="../assets/image/search.svg" alt="">
            <input type="text">
            <button @click="searchContent = !searchContent">
              <img class="mr-1" src="../assets/image/(.svg" alt="">
              <span>найти</span>
              <img class="ml-1" src="../assets/image/).svg" alt="">
            </button>
          </div>
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
      <div class="search-body">
        <div class="search-body-title">
          <p>результаты</p>
          <div class="search-body-title-right">
            <img class="mr-1" src="../assets/image/(.svg" alt="">
            <span>все события</span>
            <img class="ml-1" src="../assets/image/arrow.svg" alt="">
            <img class="ml-1" src="../assets/image/).svg" alt="">
          </div>
        </div>
        <div class="search-body-content">
          <div class="search-body-content-left">
            <div class="search-body-content-left-item">
              <input class="search-body-content-left-item-radio" checked="true" name="filter" type="radio">
              <p  class="search-body-content-left-item-type">Все</p>
              <div class="search-body-content-left-item-count">
                <img class="mr-1" src="../assets/image/(.svg" alt="">
                <span>30</span>
                <img class="ml-1" src="../assets/image/).svg" alt="">
              </div>
            </div>
            <div class="search-body-content-left-item">
              <input class="search-body-content-left-item-radio" name="filter" type="radio">
              <p  class="search-body-content-left-item-type">события</p>
              <div class="search-body-content-left-item-count">
                <img class="mr-1" src="../assets/image/(.svg" alt="">
                <span>30</span>
                <img class="ml-1" src="../assets/image/).svg" alt="">
              </div>
            </div>
            <div class="search-body-content-left-item">
              <input class="search-body-content-left-item-radio" name="filter" type="radio">
              <p  class="search-body-content-left-item-type">новости</p>
              <div class="search-body-content-left-item-count">
                <img class="mr-1" src="../assets/image/(.svg" alt="">
                <span>30</span>
                <img class="ml-1" src="../assets/image/).svg" alt="">
              </div>
            </div>
            <div class="search-body-content-left-item">
              <input class="search-body-content-left-item-radio" name="filter" type="radio">
              <p  class="search-body-content-left-item-type">образование</p>
              <div class="search-body-content-left-item-count">
                <img class="mr-1" src="../assets/image/(.svg" alt="">
                <span>30</span>
                <img class="ml-1" src="../assets/image/).svg" alt="">
              </div>
            </div>
            <div class="search-body-content-left-item">
              <input class="search-body-content-left-item-radio" name="filter" type="radio">
              <p  class="search-body-content-left-item-type">информация</p>
              <div class="search-body-content-left-item-count">
                <img class="mr-1" src="../assets/image/(.svg" alt="">
                <span>30</span>
                <img class="ml-1" src="../assets/image/).svg" alt="">
              </div>
            </div>
          </div>
          <div class="search-body-content-right">
            <div class="search-body-content-right-item">
              <div class="search-body-content-right-item-info">
                 <div class="search-body-content-right-item-info-date">
                   <p>выставка</p>
                   <p>12 окт — 24 отк</p>
                 </div>
                <div class="search-body-content-right-item-info-imageMini">
                  <img src="../assets/image/pic111.jpg" alt="">
                </div>
                <div class="search-body-content-right-item-info-title">
                  <p><span>Мифы</span> и легенды в произведениях русских художников</p>
                </div>
                <div class="search-body-content-right-item-info-description">
                  <p>В артефактах нашли свое отражение <span>мифы</span>  и легенды, характерные для эпохи того времени.</p>
                </div>
              </div>
              <div class="search-body-content-right-item-image">
                <img src="../assets/image/pic111.jpg" alt="">
              </div>
            </div>
            <div class="search-body-content-right-item">
              <div class="search-body-content-right-item-info">
                <div class="search-body-content-right-item-info-date">
                  <p>выставка</p>
                  <p>12 окт — 24 отк</p>
                </div>
                <div class="search-body-content-right-item-info-imageMini">
                  <img src="../assets/image/pic111.jpg" alt="">
                </div>
                <div class="search-body-content-right-item-info-title">
                  <p><span>Мифы</span> и легенды в произведениях русских художников</p>
                </div>
                <div class="search-body-content-right-item-info-description">
                  <p>В артефактах нашли свое отражение <span>мифы</span>  и легенды, характерные для эпохи того времени.</p>
                </div>
              </div>
              <div class="search-body-content-right-item-image">
                <img src="../assets/image/pic111.jpg" alt="">
              </div>
            </div>
            <div class="search-body-content-right-item">
              <div class="search-body-content-right-item-info">
                <div class="search-body-content-right-item-info-date">
                  <p>выставка</p>
                  <p>12 окт — 24 отк</p>
                </div>
                <div class="search-body-content-right-item-info-imageMini">
                  <img src="../assets/image/pic111.jpg" alt="">
                </div>
                <div class="search-body-content-right-item-info-title">
                  <p><span>Мифы</span> и легенды в произведениях русских художников</p>
                </div>
                <div class="search-body-content-right-item-info-description">
                  <p>В артефактах нашли свое отражение <span>мифы</span>  и легенды, характерные для эпохи того времени.</p>
                </div>
              </div>
              <div class="search-body-content-right-item-image">
                <img src="../assets/image/pic111.jpg" alt="">
              </div>
            </div>
            <div class="search-body-content-right-item">
              <div class="search-body-content-right-item-info">
                <div class="search-body-content-right-item-info-date">
                  <p>выставка</p>
                  <p>12 окт — 24 отк</p>
                </div>
                <div class="search-body-content-right-item-info-imageMini">
                  <img src="../assets/image/pic111.jpg" alt="">
                </div>
                <div class="search-body-content-right-item-info-title">
                  <p><span>Мифы</span> и легенды в произведениях русских художников</p>
                </div>
                <div class="search-body-content-right-item-info-description">
                  <p>В артефактах нашли свое отражение <span>мифы</span>  и легенды, характерные для эпохи того времени.</p>
                </div>
              </div>
              <div class="search-body-content-right-item-image">
                <img src="../assets/image/pic111.jpg" alt="">
              </div>
            </div>
            <div class="search-body-content-right-item">
              <div class="search-body-content-right-item-info">
                <div class="search-body-content-right-item-info-date">
                  <p>выставка</p>
                  <p>12 окт — 24 отк</p>
                </div>
                <div class="search-body-content-right-item-info-imageMini">
                  <img src="../assets/image/pic111.jpg" alt="">
                </div>
                <div class="search-body-content-right-item-info-title">
                  <p><span>Мифы</span> и легенды в произведениях русских художников</p>
                </div>
                <div class="search-body-content-right-item-info-description">
                  <p>В артефактах нашли свое отражение <span>мифы</span>  и легенды, характерные для эпохи того времени.</p>
                </div>
              </div>
              <div class="search-body-content-right-item-image">
                <img src="../assets/image/pic111.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="search-pagination line-block">
        <div class="search-pagination-page">
          <div class="flex">
            <span>1</span>
            <span class="active">2</span>
            <span>3</span>
            <span>4</span>
            <span>...</span>
            <span>10</span>
          </div>
          <img src="../assets/image/Vector99.svg" alt="">
        </div>
        <div class="line-dn"></div>
        <div class="search-pagination-footer"></div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "search",
  components: {Footer, Header},
  data () {
    return {
      searchContent: false,
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
            margin-right: 34px;
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

            &-info {
              padding-right: 20px;
              border-right: 1px solid;
              margin-bottom: 20px;
              margin-top: 20px;

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

                  span {
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