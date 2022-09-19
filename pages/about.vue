<template>
  <div>
    <Header bgcolor="yellow" logoColor="black"/>
    <div class="about">
      <div class="about-hider">
        <div class="about-hider-img" >
          <img v-if="property" :src="property.main_img" alt="">
        </div>
        <div class="about-hider-title">
          <p v-if="head">{{head.h1}}<span class="william" v-if="property"> {{property.cursiveTitle}}</span>
          </p>
        </div>
        <div class="about-hider-footer">
          <div  class="about-hider-footer-title">
            <p v-if="property">{{property.h2}}</p>
          </div>
          <div class="about-hider-footer-content">
            <div class="about-hider-footer-content-left">
              <p v-if="property">{{property.text}}</p>
            </div>
            <div class="about-hider-footer-content-right">
              <div class="about-hider-footer-content-right-line"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-content">
        <div class="about-content-galleria">
          <Galleria :images="slider" :index="selectPage"/>
        </div>
        <div class="about-content-pagination">
          <p class="about-content-pagination-max">
            <span class="page " :class="selectPage === i ? 'active' : ''" v-for="(item, i) in slider" @click="selectPage = i" :key="i">{{i + 1}}</span>
          </p>
          <p class="about-content-pagination-min">
            <span class="page " :class="selectPage === i ? 'active' : ''" v-for="(item, i) in slider" @click="selectPage = i" :key="i">{{i + 1}}</span>
          </p>
          <div class="icon">
            <img  src="../assets/image/Ellipse.svg" alt="">
          </div>
        </div>
      </div>
      <div class="about-block" v-if="aboutListItems && aboutListItems.length">
        <div class="about-block-title">
        </div>
        <div class="about-block-item" v-for="(item, i) in aboutListItems" :key="i">
          <div  class="about-block-item-img">
            <img :src="item.img" alt="">
          </div>
          <div  class="about-block-item-info">
            <div class="about-block-item-info-title">
              <p>{{item.name}}</p>
            </div>
            <div class="about-block-item-info-description">
              <p>{{item.text}}</p>
            </div>
            <NuxtLink tag="div" :to="item.link" class="about-block-item-info-button">
              <img class="mr-1" src="../assets/image/(.svg" alt="">
              <span>{{item.link_name}}</span>
              <img class="ml-1" src="../assets/image/).svg" alt="">
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="about-title" v-if="people && people.langPhrase">
        <p>{{people.langPhrase.title}}</p>
      </div>
      <div class="p-left-20" v-if="people && people.listItems">
        <Teachers :data="people.listItems"/>
      </div>
      <div class="about-partners">
        <div  class="about-partners-title" v-if="partners && partners.langPhrase">
          <p>{{partners.langPhrase.title}}</p>
        </div>
        <div class="about-partners-block" v-if="partners && partners.listItem">
          <a :href="item.link" class="about-partners-block-item" v-for="(item, i) in partners.listItem" :key="i">
            <img :src="item.logo" :alt="item.name">
          </a>
        </div>
<!--        <div class="about-partners-footer">-->
<!--          <div class="about-partners-footer-content">-->
<!--            <div class="about-partners-footer-content-block">-->
<!--              <div class="about-partners-footer-content-block-title">-->
<!--              </div>-->
<!--              <div class="about-partners-footer-content-block-description">-->
<!--                <p>Музей русского искусства в европейском регионе с кросс-культурной выставочной программой, который участвует в создании новых культурных связей между странами и формирует идентичность Калининграда как неотъемлемой части России. </p>-->
<!--              </div>-->
<!--              <div class="about-partners-footer-content-block-button">-->
<!--                <img class="mr-1" src="../assets/image/(.svg" alt="">-->
<!--                <span>Афиша событий</span>-->
<!--                <img class="ml-1" src="../assets/image/).svg" alt="">-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="about-partners-footer-content-right">-->
<!--              <div class="about-partners-footer-content-right-line">-->
<!--                <div class="about-partners-footer-content-right-line-block"></div>-->
<!--              </div>-->
<!--              <div class="about-partners-footer-content-right-img">-->
<!--                <img class="image" src="../assets/image/card1.jpg" alt="">-->
<!--                <div class="phone-text">-->
<!--                  <p>По вопросам участия в программе обращайтесь по адресу </p>-->
<!--                </div>-->
<!--                <div class="flex items-center email-text">-->
<!--                  <img class="mr-1" src="../assets/image/(.svg" alt="">-->
<!--                  <span>membership@tretyakov.ru</span>-->
<!--                  <img class="ml-1" src="../assets/image/).svg" alt="">-->
<!--                </div>-->
<!--                <div class="phone-text">-->
<!--                  <p>или по телефону</p>-->
<!--                </div>-->
<!--                <div class="phone-text">-->
<!--                  <p>+7 495 957-07-27</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import Galleria from "../components/Galleria";
  import Teachers from "../components/Teachers";
  import { mapActions, mapState} from 'vuex'
  export default {
    name: "about",
    components: {Teachers, Galleria, Footer, Header},
    data () {
      return {
        selectPage: 0
      }
    },
    computed: {
      ...mapState({
        aboutListItems: (state) => state.about.aboutListItems,
        partners: (state) => state.about.partners,
        people: (state) => state.about.people,
        property: (state) => state.about.property,
        slider: (state) => state.about.slider,
        head: (state) => state.about.head
      })
    },
    mounted() {
      this.getAbout().then(() => {
      })
    },
    methods: {
      ...mapActions({
        getAbout: 'about/getAbout',
      }),
    }
  }
</script>

<style scoped lang="scss">

  .p-left-20 {
    padding-left: 20px;
  }
  .about {
    &-hider {
      background: #FFDD7C;
      padding-top: 120px;
      padding-left: 20px;
      padding-right: 20px;
      &-img {
        display: flex;
        justify-content: center;
        margin-bottom: 32px;
      }

      &-title {
        display: flex;
        justify-content: center;

        p {
          font-style: normal;
          font-weight: normal;
          font-size: 50px;
          line-height: 50px;
          text-align: center;
          text-transform: uppercase;
          color: #221F1A;
          max-width: 70%;
          span {
            font-style: italic;
          }

          @media (max-width: 850px) {
            font-size: 40px;
            line-height: 40px;
          }
          @media (max-width: 650px) {
            font-size: 30px;
            line-height: 32px;
          }


          span {
            font-style: italic;
          }
        }
      }

      &-footer {
        margin-top: 120px;

        &-title {
          margin-bottom: 20px;
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

        &-content {
          display: flex;
          border-top: 1px solid;
          height: 650px;
          padding-top: 20px;
          padding-bottom: 20px;

          @media (max-width: 850px) {
            height: 432px;
          }

          @media (max-width: 700px) {
            height: auto;
            padding-bottom: 60px;
            padding-top: 20px;
          }


          &-left {
            display: flex;
            align-items: center;
            max-width: 50%;
            border-right: 1px solid;

            @media (max-width: 700px) {
              max-width: 100%;
              border-right: 0;
            }

            p {
              max-width: 80%;
              font-style: normal;
              font-weight: normal;
              font-size: 28px;
              line-height: 35px;
              color: #221F1A;

              @media (max-width: 850px) {
                font-size: 18px;
                line-height: 26px;
              }

              @media (max-width: 700px) {
                max-width: 100%;
              }
            }
          }

          &-right {
            position: relative;
            width: 50%;

            @media (max-width: 700px) {
              display: none;
            }

            &-line {
              transform: rotate(50deg);
              position: absolute;
              left: 51%;
              top: -165px;
              height: 155%;
              width: 1px;
              background: black;

              @media (max-width: 1450px) {
                transform: rotate(48deg);
                left: 52%;
                top: -147px;
                height: 149%;
              }

              @media (max-width: 1380px) {
                transform: rotate(48deg);
                left: 52%;
                top: -98px;
                height: 130%;
              }

              @media (max-width: 1200px) {
                transform: rotate(129deg);
                left: -19%;
                top: 309px;
                height: 1px;
                width: 146%;
              }

              @media (max-width: 850px) {
                transform: rotate(131deg);
                left: -17%;
                top: 199px;
                height: 1px;
                width: 140%;
              }



            }
          }
        }

      }
     }

    &-content {
      padding: 100px 20px;
      &-galleria {
        display: flex;
        justify-content: center;
        margin-bottom: 107px;
      }

      &-pagination {

        display: flex;
        justify-content: start;
        align-items: center;

        @media (max-width: 650px) {
          justify-content: center;
        }
        .page{
          font-size: 15px;
          line-height: 20px;
          text-align: right;
          text-transform: uppercase;
          color: #BDBDBD;
          cursor: pointer;
          margin-right: 12px;
        }


        .active {
          color: #221F1A;
        }

        &-max {
          display: flex;
          margin-right: 12px;
          @media (max-width: 650px) {
            display: none;
          }
        }

        &-min {
          display: none;
          @media (max-width: 650px) {
            display: flex;
            justify-content: flex-end;
            width: 57%;
          }
        }

        .icon {
          display: flex;
          justify-content: flex-end;
        }
      }
    }

    &-block {
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 120px;

      @media (max-width: 850px) {
        margin-bottom: 100px;
      }
      @media (max-width: 650px) {
        margin-bottom: 60px;
      }

      &-title{
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        text-transform: uppercase;
        color: #221F1A;
        padding-bottom: 20px;
        border-bottom: 1px solid;

        @media (max-width: 850px) {
          font-size: 30px;
          line-height: 32px;
        }
        @media (max-width: 650px) {
          font-size: 25px;
          line-height: 25px;
        }

      }

      &-item {
        display: flex;
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid;

        @media (max-width: 650px) {
          flex-direction: column;
        }

        &-img {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid;

          @media (max-width: 650px) {
            width: 100%;
            border-right: 0;
          }
        }
        &-info {
          width: 50%;
          padding-left: 40px;
          @media (max-width: 650px) {
            width: 100%;
            padding-left: 0;
          }


          &-title {
            margin-top: 100px;
            font-style: normal;
            font-weight: normal;
            font-size: 30px;
            line-height: 32px;
            max-width: 60%;
            text-transform: uppercase;
            color: #221F1A;


            @media (max-width: 850px) {
              font-size: 22px;
              line-height: 25px;
              max-width: 100%;
              margin-right: 20px;
            }

            @media (max-width: 650px) {
              margin-top: 30px;
              max-width: 100%;
            }



          }

          &-description {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 26px;
            color: #221F1A;
            margin-top: 60px;
            max-width: 70%;

            span {
              color: red;
            }

            @media (max-width: 850px) {
              font-size: 15px;
              line-height: 20px;
              max-width: 100%;
              margin-right: 20px;
            }


            @media (max-width: 650px) {
              margin-top: 20px;
              max-width: 100%;
            }

          }

          &-button {
            margin-top: 80px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;

            @media (max-width: 650px) {
              margin-top: 30px;
              margin-bottom: 40px;
              justify-content: flex-start;
            }
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
      margin-bottom: 20px;
      margin-left: 20px;

      @media (max-width: 850px) {
        font-size: 30px;
        line-height: 32px;
      }

      @media (max-width: 650px) {
        font-size: 25px;
        line-height: 25px;
      }
    }

    &-partners {
      margin-top: 50px;
      padding: 40px 20px 0 20px;
      background: #FFDD7C;

      @media (max-width: 850px) {
        padding-bottom: 70px;
      }
      @media (max-width: 650px) {
        margin-top: 0;
        padding-bottom: 40px;
      }

      &-title {
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        text-transform: uppercase;
        color: #221F1A;
        border-bottom: 1px solid;
        padding-bottom: 20px;

        @media (max-width: 850px) {
          font-size: 30px;
          line-height: 32px;
        }

        @media (max-width: 650px) {
          font-size: 25px;
          line-height: 25px;
        }
      }

      &-block {
        display: flex;
        flex-wrap: wrap;
        padding: 59px 120px 100px 120px;

        @media (max-width: 850px) {
          padding: 59px 0 100px 0;
        }
        @media (max-width: 650px) {
          padding: 30px 0 60px 0;
        }

        &-item {
          width: calc(100% / 4);
          height: 175px;
          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: 850px) {
            height: 98px;
          }

          @media (max-width: 650px) {
            width: calc(100% / 2);
            img {
              width: 40%;
            }
          }

        }
      }

      &-footer {
        /*padding: 140px 20px 30px 20px;*/
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
          height: 490px;

          @media (max-width: 1300px) {
            flex-direction: column;
            height: auto;
          }

          @media (max-width: 650px) {
            flex-direction: column;
          }


          &-right {
            width: 50%;
            display: flex;

            @media (max-width: 1300px) {
              width: 100%;
              justify-content: center;
            }

            @media (max-width: 650px) {
              width: 100%;
            }

            &-line {
              width: 50%;
              min-width: 50%;
              border-right: 1px solid;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;

              @media (max-width: 650px) {
                display: none;
              }

              &-block {
                width: 1px;
                height: 123%;
                border-right: 1px solid;
                transform: rotate(36deg);
                background: #000000;

                @media (max-width: 1300px) {
                  transform: rotate(-28deg);
                  width: 100%;
                  height: 1px;
                }

                @media (max-width: 850px) {
                  transform: rotate(48deg);
                  width: 1px;
                  height: 148%;
                  position: absolute;
                  left: 48%;
                  top: -24%;
                }


                @media (max-width: 770px) {
                  transform: rotate(45deg);
                  width: 1px;
                  height: 139%;
                  position: absolute;
                  left: 47%;
                  top: -20%;
                }

              }
            }

            &-img {
              padding-right: 40px;
              padding-left: 40px;
              width: 50%;

              @media (max-width: 650px) {
                width: 100%;
                margin-top: 60px;
                margin-bottom: 10px;
              }

              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;

              .image {
                margin-bottom: 30px;
              }

              .phone-text {
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 20px;
                text-align: center;
                color: #221F1A;
              }

              .email-text {
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 20px;
                text-align: center;
                text-transform: uppercase;
                color: #211F1A;
                margin-bottom: 30px;

                @media (max-width: 650px) {
                  margin-top: 20px;
                }
              }
            }
          }

          &-block {
            padding-right: 20px;
            border-right: 1px solid;
            width: 50%;

            @media (max-width: 1300px) {
              width: 100%;
              border-right: 0;
              padding-top: 100px;
              padding-bottom: 100px;
              border-bottom: 1px solid;
              margin-bottom: 20px;
            }

            @media (max-width: 650px) {
              padding-top: 0;
              padding-bottom: 40px;
              padding-right: 0;
              margin-bottom: 0;
            }



              &-title {
                margin-top: 20px;
                font-style: normal;
                font-weight: normal;
                font-size: 30px;
                line-height: 32px;
                max-width: 60%;
                text-transform: uppercase;
                color: #221F1A;

                @media (max-width: 650px) {
                  max-width: 100%;
                  margin-top: 0;
                }
              }

              &-description {
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 26px;
                color: #221F1A;
                margin-top: 120px;
                max-width: 70%;

                @media (max-width: 650px) {
                  max-width: 100%;
                  margin-top: 40px;
                }
              }

              &-button {
                margin-top: 96px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 20px;
                text-transform: uppercase;
                color: #221F1A;

                @media (max-width: 650px) {
                   justify-content: flex-start;
                   margin-top: 30px;
                }
              }
          }

          &-img {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            @media (max-width: 850px) {
              display: none;
            }
          }
        }
      }

    }
  }

</style>