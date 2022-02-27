<template>
  <div>
    <Header/>
      <div class="contacts">
        <div class="contacts-header">
          <div class="contacts-header-title">
            <p>Контакты</p>
          </div>
          <div class="contacts-header-content">
            <div class="contacts-header-content-item">
              <div class="contacts-header-content-item-text">
                <p>Колл-центр</p>
              </div>
              <div class="contacts-header-content-item-info">
                <div class="contacts-header-content-item-info-phone">
                  <p>+7 (495) 957 07 27</p>
                </div>
                <div class="contacts-header-content-item-info-email">
                  <img class="mr-1" src="../assets/image/(.svg" alt="">
                  <span>tretyakov@tretyakov.ru</span>
                  <img class="ml-1" src="../assets/image/).svg" alt="">
                </div>
              </div>
              <div class="contacts-header-content-item-date">
                <p>xx xx xxxxx xxxx xxxx</p>
                <p> xxx xxxx xxx xxxx xxx xxx</p>
              </div>
            </div>
            <div class="contacts-header-content-item">
              <div class="contacts-header-content-item-text">
                <p>Колл-центр</p>
              </div>
              <div class="contacts-header-content-item-info">
                <div class="contacts-header-content-item-info-phone">
                  <p>+7 (495) 957 07 27</p>
                </div>
                <div class="contacts-header-content-item-info-email">
                  <img class="mr-1" src="../assets/image/(.svg" alt="">
                  <span>tretyakov@tretyakov.ru</span>
                  <img class="ml-1" src="../assets/image/).svg" alt="">
                </div>
              </div>
              <div class="contacts-header-content-item-date">
                <p>xxx xxxxxx xxxx xxx x</p>
                <p> xxx xxxxx xxxxxxx xxxxx</p>
              </div>
            </div>
            <div class="contacts-header-content-item">
              <div class="contacts-header-content-item-text">
                <p>Колл-центр</p>
              </div>
              <div class="contacts-header-content-item-info">
                <div class="contacts-header-content-item-info-phone">
                  <p>+7 (495) 957 07 27</p>
                </div>
                <div class="contacts-header-content-item-info-email">
                  <img class="mr-1" src="../assets/image/(.svg" alt="">
                  <span>tretyakov@tretyakov.ru</span>
                  <img class="ml-1" src="../assets/image/).svg" alt="">
                </div>
              </div>
              <div class="contacts-header-content-item-date">
                <p>xxxxx xxxxxx xxxxxx</p>
                <p> xxxxx  xxxxxx xxxxx xxxx</p>
              </div>
            </div>
          </div>
          <div class="contacts-header-footer">
            <div class="contacts-header-footer-item">
              <img class="mr-1" src="../assets/image/(.svg" alt="">
              <span>Обратная связь</span>
              <img class="ml-1" src="../assets/image/).svg" alt="">
            </div>
          </div>
        </div>
        <div class="contacts-maps">
          <div class="contacts-maps-title">
            <p>Площадки мероприятий</p>
          </div>
          <div class="contacts-maps-tab">
            <p :class="activeTab === 'map' ? 'active' : ''" @click="activeTab = 'map'">НА карте</p>
            <p :class="activeTab === 'list' ? 'active' : ''" @click="activeTab = 'list'">СПИСКОМ</p>
          </div>
          <div v-if="activeTab === 'list'" class="contacts-maps-list">
              <div class="contacts-maps-list-item">
                <div class="contacts-maps-list-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Арт Ворота</p>
                </div>
                <div v-if="openText" class="contacts-maps-list-item-description">
                  <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
                </div>
              </div>
              <div class="contacts-maps-list-item">
                <div class="contacts-maps-list-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>ГЦСИ </p>
                </div>
                <div v-if="openText" class="contacts-maps-list-item-description">
                  <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
                </div>
              </div>
              <div class="contacts-maps-list-item">
                <div class="contacts-maps-list-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Калининградский музей изобразительных искусств </p>
                </div>
                <div v-if="openText" class="contacts-maps-list-item-description">
                  <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
                </div>
              </div>
              <div class="contacts-maps-list-item">
                <div class="contacts-maps-list-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Арт Ворота</p>
                </div>
                <div v-if="openText" class="contacts-maps-list-item-description">
                  <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
                </div>
              </div>
              <div class="contacts-maps-list-item">
                <div class="contacts-maps-list-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>ГЦСИ </p>
                </div>
                <div v-if="openText" class="contacts-maps-list-item-description">
                  <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
                </div>
              </div>
            </div>
          <div class="contacts-maps-block" v-if="activeTab === 'map'">
            <div class="contacts-maps-block-info">
              <p>Арт Ворота</p>
              <p>ГЦСИ </p>
              <p>Калининградский музей изобразительных искусств </p>
              <p>Арт Ворота</p>
              <p>ГЦСИ </p>
            </div>
            <div class="contacts-maps-block-map">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe style="width: 100%" id="gmap_canvas" src="https://maps.google.com/maps?q=kaliningrad&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contacts-faq">
          <div class="contacts-faq-title">
            <p>Частые вопросы</p>
          </div>
          <div class="contacts-faq-content">
            <div class="contacts-faq-content-block">
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Кто такие друзья Третьяковки?</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
                </div>
              </div>
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Кто такие друзья Третьяковки?</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
                </div>
              </div>
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Кто такие друзья Третьяковки?</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
                </div>
              </div>
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Кто такие друзья Третьяковки?</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
                </div>
              </div>
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Кто такие друзья Третьяковки?</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
                </div>
              </div>
              <div class="contacts-faq-content-block-text">
                <img class="mr-1" src="../assets/image/(.svg" alt="">
                <span>показать ещё</span>
                <img class="ml-1" src="../assets/image/).svg" alt="">
              </div>
            </div>
            <div class="contacts-faq-content-right">
              <div class="contacts-faq-content-right-block">
                <img class="mr-1" src="../assets/image/(.svg" alt="">
                <span>задать вопрос</span>
                <img class="ml-1" src="../assets/image/).svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
  </div>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";
    export default {
        name: "contacts",
        components: {Footer, Header},
      data () {
          return {
            activeTab: 'map'
          }
      }
    }
</script>

<style scoped lang="scss">

  #gmap_canvas {
    height: 530px;

    @media (max-width: 850px) {
      height: 450px;
    }
  }

  .contacts {
    padding: 120px 20px 150px 20px;

    @media (max-width: 850px) {
      padding-bottom: 60px;
    }

    @media (max-width: 650px) {
      padding-bottom: 40px;
    }

    &-header {

      &-title {
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 50px;
        text-transform: uppercase;
        color: #221F1A;
        margin-bottom: 40px;

        @media (max-width: 850px) {
          font-size: 40px;
          line-height: 40px;
        }

        @media (max-width: 850px) {
          font-size: 30px;
          line-height: 32px;
        }
      }

      &-content {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid;
        border-bottom: 1px solid;

        @media (max-width: 720px) {
          flex-direction: column;
        }

        &-item:nth-child(1) {
          border-right: 1px solid;
          padding-right: 20px;

          @media (max-width: 720px) {
            border-bottom: 1px solid;
            border-right: 0;
            padding-right: 0;
            padding-bottom: 20px;
          }
        }

        &-item:nth-child(2) {
          padding-right: 20px;
          padding-left: 20px;
          @media (max-width: 720px) {
            padding-left: 0;
            padding-right: 0;
            border-bottom: 1px solid;
            padding-bottom: 20px;
          }
        }

        &-item:nth-child(3) {
          border-left: 1px solid;
          padding-left: 20px;

          @media (max-width: 720px) {
            padding-left: 0;
            border-left: 0;

          }
        }

        &-item {
          margin-top: 20px;
          margin-bottom: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;

          &-text {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
            margin-bottom: 100px;
          }

          &-info {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            &-phone {
              font-style: normal;
              font-weight: normal;
              font-size: 22px;
              line-height: 25px;
              text-transform: uppercase;
              color: #221F1A;
              margin-bottom: 5px;
            }
            &-email {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              text-align: center;
              text-transform: uppercase;
              color: #221F1A;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 100px;
            }
          }

          &-date {
            display: flex;

            p {
              max-width: 71px;
              margin-right: 20px;
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              /* or 133% */

              text-transform: uppercase;

              /* Black brown */

              color: #221F1A;
            }
          }
        }

      }

      &-footer {
        border-bottom: 1px solid;
        padding-bottom: 60px;
        padding-top: 60px;
        display: flex;
        justify-content: center;
        margin-bottom: 120px;

        @media (max-width: 850px) {
          margin-bottom: 100px;
        }
        @media (max-width: 650px) {
          margin-bottom: 80px;
        }

        &-item {
          display: flex;
          align-items: center;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-align: right;
          text-transform: uppercase;
          color: #211F1A;

        }
      }

     }

    &-maps {
      margin-bottom: 120px;

      @media (max-width: 850px) {
        margin-bottom: 100px;
      }
      @media (max-width: 650px) {
        margin-bottom: 80px;
      }

      &-tab {
        display: none;

        @media (max-width: 850px) {
          display: flex;
          justify-content: center;
          border-top: 1px solid;

          .active {
            border-bottom: 5px solid;
            margin-bottom: 0;
          }

          p {
            cursor: pointer;
            text-align: center;
            margin-top: 30px;
            margin-bottom: 30px;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            /* identical to box height, or 133% */

            text-transform: uppercase;

            /* Black brown */

            color: #221F1A;
            min-width: 170px;
          }
        }
      }

      &-list {
        display: flex;
        flex-direction: column;

        &-item {
          padding-top: 20px;


          &-description {
            margin-left: 34px;
            margin-top: 40px;
            margin-bottom: 40px;
          }

          &-title {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            .line {
              margin-right: 16px;
            }
          }

          &-title, &-description {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 26px;
            color: #221F1A;
            @media (max-width: 850px) {
              font-size: 15px;
              line-height: 20px;
              max-width: 100%;
              margin-right: 20px;

            }
          }
        }
      }


      &-title {
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        text-transform: uppercase;
        color: #221F1A;
        margin-bottom: 40px;

        @media (max-width: 850px) {
          font-size: 30px;
          line-height: 32px;
        }
        @media (max-width: 850px) {
          font-size: 25px;
          line-height: 25px;
        }
      }

      &-block {
        display: flex;
        border-top: 1px solid;
        border-bottom: 1px solid;
        padding-top: 20px;
        padding-bottom: 20px;

        &-info {
          padding-top: 50px;
          border-right: 1px solid;
          padding-right: 60px;

          @media (max-width: 850px) {
            display: none;
          }

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 26px;
            color: #221F1A;
            margin-bottom: 20px;
            max-width: 289px;
          }
        }
        &-map {
          width: 100%;
          padding-left: 20px;
          height: 530px;

          @media (max-width: 850px) {
            padding-left: 0;
            height: 420px;
          }
        }

      }
    }

    &-faq {

      &-title {
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        text-transform: uppercase;
        color: #221F1A;
        margin-bottom: 40px;

        @media (max-width: 850px) {
          font-size: 30px;
          line-height: 32px;
        }

        @media (max-width: 650px) {
          font-size: 25px;
          line-height: 25px;
        }
      }

      &-content {
        border-top: 1px solid;
        padding-top: 20px;
        border-bottom: 1px solid;
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;

        @media (max-width: 850px) {
         flex-direction: column;
        }

        &-block {
          max-width: 65%;
          width: 65%;
          border-right: 1px solid;

          @media (max-width: 850px) {
            max-width: 100%;
            margin-right: 20px;
            width: 100%;
            border-right: 0;
            border-bottom: 1px solid;
          }

          &-text {
            display: flex;
            align-items: center;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            /* identical to box height, or 133% */

            text-align: right;
            text-transform: uppercase;

            /* tgz_black */

            color: #211F1A;
            margin-bottom: 70px;
            margin-top: 40px;


            @media (max-width: 650px) {
              margin-bottom: 40px;
            }
          }

          &-item {
            padding-top: 20px;

            &-description {
              margin-left: 34px;
              margin-top: 40px;
              margin-bottom: 40px;
            }

            &-title {
              display: flex;
              align-items: center;
              margin-bottom: 20px;

              .line {
                margin-right: 16px;
              }
            }

            &-title, &-description {
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 26px;
              color: #221F1A;
              @media (max-width: 850px) {
                font-size: 15px;
                line-height: 20px;
                max-width: 100%;
                margin-right: 20px;

              }
            }
          }
        }

        &-right {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;

          @media (max-width: 850px) {
            padding-top: 40px;
            padding-bottom: 20px;
          }


          &-block {
            display: flex;
            align-items: center;
            justify-content: center;
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
        }
      }
    }


  }

</style>