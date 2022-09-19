<template>
  <div>
    <Header/>
      <div class="contacts">
        <div class="contacts-header">
          <div class="contacts-header-title" v-if="head">
            <p>{{head.h1}}</p>
          </div>
          <div class="contacts-header-content">
            <div class="contacts-header-content-item" v-if="contactsData">
              <p>{{contactsData.phone}}</p>
              <p>{{contactsData.address}}</p>
              <p><span>●</span>{{contactsData.status}}</p>
            </div>
          </div>
          <div class="contacts-header-footer" v-if="contactsData && contactsData.langPhrase">
            <div class="contacts-header-footer-item">
              <img class="mr-1" src="../assets/image/(.svg" alt="">
              <span>{{contactsData.langPhrase.callback}}</span>
              <img class="ml-1" src="../assets/image/).svg" alt="">
            </div>
          </div>
        </div>
        <div class="contacts-maps" v-if="places">
          <div class="contacts-maps-title" v-if="places.langPhrase">
            <p>{{places.langPhrase.title}}</p>
          </div>
          <div class="contacts-maps-tab">
            <p :class="activeTab === 'map' ? 'active' : ''" @click="activeTab = 'map'">НА карте</p>
            <p :class="activeTab === 'list' ? 'active' : ''" @click="activeTab = 'list'">СПИСКОМ</p>
          </div>
          <div v-if="activeTab === 'list' && placesList && placesList.length" class="contacts-maps-list">
              <div class="contacts-maps-list-item" v-for="(item, i) in placesList" :key="i">
                <div class="contacts-maps-list-item-title" @click="openText = !openText">
                  <img v-if="item.active" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>{{item.name}}</p>
                </div>
                  <div v-if="openText" class="contacts-maps-block-modal">
                    <div class="contacts-maps-block-modal-text">
                      <p>{{item.text}}</p>
                    </div>
<!--                    <div class="contacts-maps-block-modal-text">-->
<!--                      <p>Вход со стороны Малого Толмачевского пер., 9</p>-->
<!--                    </div>-->
                    <div  class="contacts-maps-block-modal-date">
                      <p>{{item.mapCenter}}</p>
                    </div>
                    <div class="contacts-maps-block-modal-phone">
                      <p>{{item.phone}}</p>
                    </div>
                    <div class="contacts-maps-block-modal-email">
                      <img class="mr-1" src="../assets/image/(.svg" alt="">
                      <span>{{item.email}}</span>
                      <img class="ml-1" src="../assets/image/).svg" alt="">
                    </div>
                    <div>
                      <img :src="item.picture" alt="">
                    </div>
                  </div>
              </div >
            </div>
          <div class="contacts-maps-block" v-if="activeTab === 'map' && placesList && placesList.length">
            <div class="contacts-maps-block-info">
              <div class="contacts-maps-block-info-item" v-for="(item, i) in placesList" :key="i">
                <img v-if="item.active" class="icon" src="../assets/image/Rectangle1108.svg" alt="">
                <p @click="activeIndex = i">{{item.name}}</p>
              </div>
            </div>
            <div v-if="placesList[activeIndex]" class="contacts-maps-block-modal">
               <div class="contacts-maps-block-modal-close" @click="activeIndex = null">
                 <img src="../assets/image/x.svg" alt="">
               </div>
                <div class="contacts-maps-block-modal-text">
                  <p>{{placesList[activeIndex].text}}</p>
                </div>
                <div  class="contacts-maps-block-modal-date">
                  <p>{{placesList[activeIndex].mapCenter}}</p>
                </div>
                <div class="contacts-maps-block-modal-phone">
                  <p>{{placesList[activeIndex].phone}}</p>
                </div>
                <div class="contacts-maps-block-modal-email">
                  <img class="mr-1" src="../assets/image/(.svg" alt="">
                  <span>{{placesList[activeIndex].email}}</span>
                  <img class="ml-1" src="../assets/image/).svg" alt="">
                </div>
                <div>
                  <img :src="placesList[activeIndex].picture" alt="">
                </div>
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
          <div class="contacts-faq-title" v-if="faq && faq.langPhrase">
            <p>{{faq.langPhrase.title}}</p>
          </div>
          <div class="contacts-faq-content" v-if="faqList && faqList.length">
            <div class="contacts-faq-content-block">
              <div class="contacts-faq-content-block-item" v-for="(item, i) in faqList" :key="i">
                <div class="contacts-faq-content-block-item-title" @click="faqList[i].active = !faqList[i].active">
                  <img v-if="item.active" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>{{item.question}}</p>
                </div>
                <div v-if="item.active" class="contacts-faq-content-block-item-description">
                  <p>{{item.answer}}</p>
                </div>
              </div>
              <div class="contacts-faq-content-block-text" v-if="faqList.length > 10">
                <img class="mr-1" src="../assets/image/(.svg" alt="">
                <span>показать ещё</span>
                <img class="ml-1" src="../assets/image/).svg" alt="">
              </div>
            </div>
            <div class="contacts-faq-content-right">
              <div class="contacts-faq-content-right-block" v-if="contactsData && contactsData.langPhrase">
                <img class="mr-1" src="../assets/image/(.svg" alt="">
                <span>{{contactsData.langPhrase.makeQuestion}}</span>
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
import { mapActions, mapState} from 'vuex'
export default {
    name: "contacts",
    components: {Footer, Header},
  data () {
      return {
        activeTab: 'map',
        faqList: [],
        placesList: [],
        openModal: false,
        activeIndex: null,
        openText: false
      }
  },
  computed: {
    ...mapState({
      contactsData: (state) => state.contacts.contactsData,
      places: (state) => state.contacts.places,
      head: (state) => state.contacts.head,
      faq: (state) => state.contacts.faq,
    })
  },
  mounted() {
    this.getData().then(() => {
      if (this.faq.listItem && this.faq.listItem.length) {
        const arr = JSON.parse(JSON.stringify(this.faq.listItem))
        this.faqList = arr.map((item) => {
          item.active = false
          return item
        })
      }
      if (this.places.listItems && this.places.listItems.length) {
        const arr = JSON.parse(JSON.stringify(this.places.listItems))
        this.placesList = arr.map((item) => {
          item.active = false
          return item
        })
      }
    })
  },
  methods: {
    ...mapActions({
      getData: 'contacts/getData',
    }),
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
        justify-content: flex-start;

        &-item {
          margin-left: 20px;
          font-size: 17px;
          line-height: 20px;
          p {
            margin-top: 10px;

            span {
              margin-top: 2px;
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
        border-top: 1px solid;

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
          padding-top: 30px;
          border-right: 1px solid;
          padding-right: 60px;
          width: 40%;

          @media (max-width: 850px) {
            display: none;
          }

          &-item {
            display: flex;
            align-items: start;

            .icon {
              margin-right: 20px;
              margin-top: 11px;
            }

            p {
              cursor: pointer;
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 26px;
              color: #221F1A;
              margin-bottom: 20px;
              max-width: 289px;
            }
          }
        }

        &-modal {
          padding-left: 20px;
          width: 50%;
          border-right: 1px solid;
          padding-right: 20px;

          @media (max-width: 850px) {
            width: 96%;
            padding-left: 0;
            border-right: 0;
          }

          &-close {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 11px;

            img {
              cursor: pointer;
              width: 18px;
              height: 18px;
            }
          }

          &-text {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            color: #221F1A;
            margin-bottom: 20px;
          }

          &-phone {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
          }

          &-date {
            display: flex;
            margin-bottom: 20px;
            p {
              margin-right: 20px;
              max-width: 71px;
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              text-transform: uppercase;
              color: #221F1A;
            }
          }

          &-email {
            display: flex;
            align-items: center;
            font-size: 15px;
            line-height: 20px;
            text-align: center;
            text-transform: uppercase;
            color: #221F1A;
            margin-bottom: 40px;
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