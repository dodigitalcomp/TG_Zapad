<template>
  <div>
    <Header bgcolor="yellow" logoColor="black"/>
     <div class="event-page">
       <div class="event-page-header">
         <div class="event-page-header-title">
           <NuxtLink tag="p" class="cursor-pointer" :to="localePath('/events')">
             <img class="mr-1" src="../../assets/image/(.svg" alt="">
             <img class="mr-1 arow" src="../../assets/image/Vector135.svg" alt="">
             <span>все события</span>
             <img class="ml-1" src="../../assets/image/).svg" alt="">
           </NuxtLink>
         </div>
         <div class="event-page-header-content" v-if="eventData">
           <div class="event-page-header-content-block">
             <div class="event-page-header-content-block-text">
               <div class="event-page-header-content-block-text-date">
                 <p>{{eventData.dateTime}}</p>
                 <p>{{eventData.type}}</p>
               </div>
               <NuxtLink :to="eventData.placeLink ? eventData.placeLink : ''"  tag="a" class="event-page-header-content-block-text-author" v-if="eventData.place">
                 <img src="../../assets/image/pin1.svg" alt="">
                 <p>{{eventData.place}}</p>
               </NuxtLink>
             </div>
             <div class="event-page-header-content-block-imgMini">
               <img :src="eventData.picture" alt="">
             </div>
             <div class="event-page-header-content-block-title">
               <p>{{eventData.name}} <span class="william">{{eventData.nameCursive}}</span></p>
             </div>
             <div class="event-page-header-content-block-description">
               <p>{{eventData.subtitle}}</p>
             </div>
             <div class="event-page-header-content-block-title">
               <p v-if="eventData.audience">{{eventData.audience}}</p>
             </div>
             <NuxtLink tag="a" :to="eventData.placeLink ? eventData.placeLink : ''"  v-if="eventData.place" class="event-page-header-content-block-authorMini">
               <img src="../../assets/image/pin1.svg" alt="">
               <p>{{eventData.place}}</p>
             </NuxtLink>
           </div>
           <div class="event-page-header-content-img">
             <img :src="eventData.picture" alt="">
           </div>
         </div>
         <div class="event-page-header-footer">
           <div class="event-page-header-footer-item" v-if="eventData.price">
             <p v-if="eventData">{{langPhrase.price}}: {{eventData.price}}</p>
           </div>
           <div class="event-page-header-footer-item" v-if="eventData.buy">
             <a :target="eventData.buy ? '_blank' : ''" :href="eventData.buy ? eventData.buy : null" class="event-page-header-footer-item-block cursor-pointer">
               <img class="mr-1" src="../../assets/image/(.svg" alt="">
               <span>купить билет</span>
               <img class="ml-2" src="../../assets/image/).svg" alt="">
             </a>
           </div>
           <div class="event-page-header-footer-item">
             <p class="event-page-header-footer-item-block cursor-pointer" :style="!eventData.price ? 'border-right: 0;' : ''" @click="share">
               <img class="mr-1" src="../../assets/image/(.svg" alt="">
               <span>{{langPhrase.share}}</span>
               <img class="ml-2" src="../../assets/image/shareArrowIcon.svg" alt="">
               <img class="ml-1" src="../../assets/image/).svg" alt="">
             </p>
           </div>
         </div>
       </div>
       <div class="event-page-content">
         <div class="event-page-content-buy-ticket">
           <div class="fixed-info" id="fixed-info">
             <div class="event-page-content-buy-ticket-date" v-if="eventData && eventData.dateList">
               <p v-for="(item, i) in eventData.dateList" :key="i"><span v-if="i < 2 || allData">{{ dateFormat(item)}}</span></p>
               <p class="flex items-center mt-4 cursor-pointer" v-if="eventData.dateList.length > 2" @click="allData = true">
                 <img class="mr-1" src="../../assets/image/(.svg" alt="">
                 <span v-if="langPhrase">{{langPhrase.allDate}}</span>
                 <img class="ml-1" src="../../assets/image/).svg" alt="">
               </p>
             </div>
<!--             <div class="event-page-content-buy-ticket-author" v-if="eventData.cycle">-->
<!--               <p class="normal-case mb-4">{{langPhrase.fromCycle}}</p>-->
<!--               <p class="mb-4">{{eventData.cycle}}</p>-->
<!--               <NuxtLink v-if="eventData.cycleLink" tag="p" :to="eventData.cycleLink" class="flex items-center cursor-pointer">-->
<!--                 <img class="mr-1" src="../../assets/image/(.svg" alt="">-->
<!--                 <span>Подробнее</span>-->
<!--                 <img class="ml-1" src="../../assets/image/).svg" alt="">-->
<!--               </NuxtLink>-->
<!--             </div>-->
             <div class="event-page-content-buy-ticket-price" v-if="eventData.price">
               <p v-if="eventData">{{langPhrase.price}}: {{eventData.price}}</p>
               <a :target="eventData.buy ? '_blank' : ''" :href="eventData.buy ? eventData.buy : null" class="button">
                 <img class="mr-1" src="../../assets/image/(.svg" alt="">
                 <span>{{langPhrase.buyTicket}}</span>
                 <img class="ml-1" src="../../assets/image/).svg" alt="">
               </a>
             </div>
           </div>

         </div>
         <div class="event-page-content-info" id="info-block">
<!--           <div class="event-page-content-info-title">-->
<!--             <p>{{eventData.detailText}}</p>-->
<!--           </div>-->
           <div class="event-page-content-info-text">
             <p class="event-page-content-info-text-description" v-html="eventData.previewText"> </p>
           </div>
<!--           <div class="event-page-content-info-description" v-html="eventData.previewText"></div>-->
           <VueSwiper :images="eventData.photos" text="Подпись к фото. В Санкт-Петербурге основана. Императорская Академия художеств. "/>
           <div class="event-page-content-info-text">
             <p class="event-page-content-info-text-description" v-html="eventData.detailText"> </p>
           </div>
           <div class="event-page-content-info-virtual-tour " :class="eventData.video ? 'iframe-height-100' : ''" v-if="eventData && eventData.video" v-html="eventData.video">
<!--             <div></div>-->
<!--             <div class="event-page-content-info-virtual-tour-content">-->
<!--               <div class="img">-->
<!--                 <p class="flex elem">-->
<!--                   <img class="mr-1" src="../../assets/image/(w.svg" alt="">-->
<!--                   <span>смотреть</span>-->
<!--                   <img class="ml-1" src="../../assets/image/)w.svg" alt="">-->
<!--                 </p>-->
<!--               </div>-->
<!--             </div>-->
<!--             <div class="event-page-content-info-virtual-tour-title">-->
<!--               <p>04:33</p>-->
<!--             </div>-->
           </div>
           <div class="event-page-content-info-buy-ticket">
<!--             <div class="event-page-content-info-buy-ticket-date" v-if="eventData && eventData.dateList">-->
<!--               <p v-for="(item, i) in eventData.dateList" :key="i"><span v-if="i < 2 || allData">{{dateFormat(item)}}</span></p>-->
<!--               <p class="flex items-center mt-4 cursor-pointer" v-if="eventData.dateList.length > 2" @click="allData = true">-->
<!--                 <img class="mr-1" src="../../assets/image/(.svg" alt="">-->
<!--                 <span v-if="langPhrase">{{langPhrase.allDate}}</span>-->
<!--                 <img class="ml-1" src="../../assets/image/).svg" alt="">-->
<!--               </p>-->
<!--             </div>-->
<!--             <div class="event-page-content-info-buy-ticket-author" v-if="eventData.cycle">-->
<!--               <p class="normal-case mb-4">{{langPhrase.fromCycle}}</p>-->
<!--               <p class="mb-4">{{eventData.cycle}}</p>-->
<!--               <NuxtLink v-if="eventData.cycleLink" tag="p" :to="eventData.cycleLink" class="flex items-center cursor-pointer">-->
<!--                 <img class="mr-1" src="../../assets/image/(.svg" alt="">-->
<!--                 <span>Подробнее</span>-->
<!--                 <img class="ml-1" src="../../assets/image/).svg" alt="">-->
<!--               </NuxtLink>-->
<!--             </div>-->
             <div class="event-page-content-info-buy-ticket-price">
               <p v-if="eventData">{{langPhrase.price}}: {{eventData.price}}</p>
               <a :target="eventData.buy ? '_blank' : ''" :href="eventData.buy" class="button">
                 <img class="mr-1" src="../../assets/image/(.svg" alt="">
                 <span>{{langPhrase.buyTicket}}</span>
                 <img class="ml-1" src="../../assets/image/).svg" alt="">
               </a>
             </div>
           </div>
<!--           <div class="event-page-content-info-held" v-if="eventData && eventData.people && eventData.people.length">-->
<!--             <div class="event-page-content-info-held-title">-->
<!--               <p>{{langPhrase.eventConducted}}</p>-->
<!--             </div>-->
<!--             <div class="event-page-content-info-held-items">-->
<!--               <div class="flex items-center mt-4" v-for="(item, i) in eventData.people" :key="i">-->
<!--                 <img class="image" :src="item.img" alt="">-->
<!--                 <div class="m-4">-->
<!--                   <p>{{item.name}}</p>-->
<!--                   <p class="city">{{item.staffPost}}</p>-->
<!--                 </div>-->
<!--               </div>-->
<!--             </div>-->
<!--           </div>-->
         </div>
       </div>

       <div class="events-content" v-if="eventData && eventData.shedule && Object.keys(eventData.shedule).length">
         <p class="events-content-title">Расписание</p>
         <div class="events-content-block" v-for="(items, key) in eventData.shedule" :key="key">
           <div class="events-content-block-text">
             <p class="events-content-block-text-day">{{dateFormatDay(key) }}  {{ dateFormatWeek(key) }}</p>
             <p class="events-content-block-text-date">{{dateFormat(key, 1) }}</p>
           </div>
           <div class="events-content-block-items">
             <nuxt-link tag="a" :to="item.link ? item.link : ''" class="events-content-block-item" v-for="(item, i) in items" :key="i">
               <div class="events-content-block-item-image">
                 <img :src="item.image" alt="">
               </div>
               <div class="events-content-block-item-body">
                 <div class="events-content-block-item-body-text">
                   <div class="events-content-block-item-body-text-date">
                     <p>{{item.dateTime}}</p>
                     <p>{{item.type}}</p>
                     <p>{{item.audience}}</p>
                   </div>
                   <NuxtLink tag="a" :to="item.placeLink ? item.placeLink : '#'"  v-if="item.place" class="events-content-block-item-body-text-author">
                     <img src="../../assets/image/pin1.svg" alt="">
                     <p>{{item.place}}</p>
                   </NuxtLink>
                 </div>
                 <div class="events-content-block-item-imageMini">
                   <img src="../../assets/image/Pic-fit3.jpg" alt="">
                 </div>
                 <div class="events-content-block-item-body-description">
                   <p>{{item.name}} <span class="william"> {{item.nameCursive}}</span></p>
                 </div>
                 <div>
                   <NuxtLink tag="a" :to="item.placeLink ? item.placeLink : '#'" v-if="item.place" class="events-content-block-item-body-text-authorMini">
                     <img src="../../assets/image/pin1.svg" alt="">
                     <p>{{item.place}}</p>
                   </NuxtLink>
                 </div>
                 <div class="events-content-block-item-body-authorImg">
                   <div class="flex">
                     <img :src="peo.img" :title="peo.name" alt="" v-for="(peo, index) in item.people" :key="index">
                   </div>
                 </div>
               </div>
             </nuxt-link>
           </div>
         </div>
       </div>
       <Partners v-if="partners && partners.listItem && partners.listItem.length" :items="partners.listItem"/>
       <div class="event-page-pagination line-block mt-20" v-if="sameEvents">
         <div class="event-page-pagination-title" v-if="sameEvents.langPhrase">
           <p>{{sameEvents.langPhrase.title}}</p>
         </div>
         <div class="line-dn"></div>
         <div class="event-page-pagination-footer">
           <NuxtLink tag="p" :to="localePath('/events')" class="flex cursor-pointer">
             <img class="mr-1" src="../../assets/image/(.svg" alt="">
             <span>все события</span>
             <img class="ml-2" src="../../assets/image/).svg" alt="">
           </NuxtLink>
         </div>
       </div>
       <div class="event-page-block" v-if="sameEvents.listItems && sameEvents.listItems.length">
         <NuxtLink tag="div" :to="item.url" class="event-page-block-item cursor-pointer" v-for="(item, i) in sameEvents.listItems" :key="i">
           <div class="event-page-block-item-text">
             <div class="event-page-block-item-text-date">
               <p>{{item.time}}</p>
               <p>{{item.type}}</p>
             </div>
             <NuxtLink :to="item.placeLink ? item.placeLink : ''" :data-title="item.place" v-if="item.place" tag="a" class="event-page-block-item-text-author">
               <img src="../../assets/image/pin1.svg" alt="">
               <p>{{item.place}}</p>
             </NuxtLink>
           </div>
           <div class="event-page-block-item-img">
             <img :src="item.picture" alt="">
           </div>
           <div class="event-page-block-item-title">
             <p>{{item.name}} <span class="william">{{item.name_cursive}}</span></p>
           </div>
           <NuxtLink :to="item.placeLink ? item.placeLink : ''" tag="a" v-if="item.place"  class="event-page-block-item-authorMini">
             <img src="../../assets/image/pin1.svg" alt="">
             <p>{{item.place}}</p>
           </NuxtLink>
           <div class="event-page-block-item-description"></div>
         </NuxtLink>
       </div>
       <div v-else style="border-bottom: 1px solid; margin: 20px;"></div>
     </div>
    <Footer/>
    <Meta :head-data="this.head" />
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  import VueSwiper from "../../components/VueSwiper";
  import Partners from "../../components/Partniors";
  import { mapActions, mapState} from 'vuex'
  import Meta from "../../components/Meta";
  export default {
    name: "eventPage",
    components: {Meta, Partners, VueSwiper, Footer, Header},
    data () {
      return {
        info: null,
        allData: false
      }
    },
    computed: {
        ...mapState({
            head: (state) => state.events.head,
            langPhrase: (state) => state.events.langPhrase,
            eventData: (state) => state.events.event,
            sameEvents: (state) => state.events.sameEvents,
            partners: (state) => state.events.partners,
        })
    },
    created() {
        if (this.$route.params.id) {
            this.getEvent(this.$route.params.id + '/')
        }
    },
    methods: {
        ...mapActions({
            getEvent: 'events/getEvent'
        }),
      async share () {
        if (window.navigator.share) {
          const shareData = {
            title: this.eventData.name,
            text: this.eventData.nameCursive,
            url: window.location.href
          }
          try {
            await window.navigator.share(shareData);
          } catch (err) {
            console.log(err)
          }
        }
      },
     scrollHandler () {
       const block = document.getElementById('info-block')
       if (block) {
         const blockScrollY = (block.offsetTop + block.offsetHeight) - 550
         let scroll = 700
         let scrollEnd = 2356
         let top = '90%'
         if (window.innerWidth < 850) {
           scroll = 960
           scrollEnd = 2192
           top = '73%'
         }

         if (window.scrollY > scroll && window.scrollY < blockScrollY) {
           this.info.style.position = 'fixed'
           this.info.style.top = '180px'
           this.info.style.left = '20px'
         }  else if (window.scrollY >= blockScrollY) {
           this.info.style.position = 'absolute'
           this.info.style.top = (blockScrollY - 750) + 'px'
           this.info.style.left = '0'
         } else {
           this.info.style.position = 'relative'
           this.info.style.top = '0'
           this.info.style.left = '0'
         }
       }
      }
    },
    beforeDestroy () {
      removeEventListener('scroll', this.scrollHandler)
    },
    mounted() {
      this.info = document.getElementById('fixed-info')
      if (this.info) {
        addEventListener('scroll', this.scrollHandler)
      }
    }
  }
</script>

<style scoped lang="scss">


  .mt-20 {
    margin-top: 40px;
  }

  .events-content {
    margin-bottom: 20px;
    &-title {
      margin-bottom: 20px;
      margin-left: 20px;
      margin-top: 40px;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 40px;
      /* identical to box height, or 107% */

      text-transform: uppercase;

      /* Black brown */

      color: #221F1A;

      @media (max-width: 850px) {
        font-size: 30px;
        line-height: 32px;
      }
    }

    &-block {
      border-top: 1px solid;
      margin-left: 20px;
      margin-right: 20px;
      display: flex;

      &:last-child {
        border-bottom: 1px solid;
      }


      @media (max-width: 920px) {
        flex-direction: column;
      }
      &-text {
        margin-top: 20px;
        margin-bottom: 20px;
        flex: 2;
        border-right: 1px solid;

        @media (max-width: 920px) {
          border-right: 0;
          border-bottom: 1px solid;
          padding-bottom: 20px;
          margin-bottom: 0;
        }

        &-day {
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-transform: uppercase;
          color: #221F1A;
        }

        &-date {
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 32px;
          text-transform: uppercase;
          color: #221F1A;
        }
      }

      &-items {
        flex: 6;
      }

      &-item {
        padding-bottom: 20px;
        padding-top: 20px;
        min-height: 270px;
        display: flex;
        flex: 6;
        border-top: 1px solid;

        &:first-child {
          border-top: 0;
        }

        @media (max-width: 700px) {
          height: auto;
        }

        &-image {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 269px;
          border-right: 1px solid;
          padding: 20px;

          @media (max-width: 700px) {
            display: none;
          }
        }

        &-imageMini {
          display: none;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          margin-top: 30px;
          @media (max-width: 700px) {
            display: flex;
          }
        }

        &-body {
          padding-left: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-content: space-between;
          justify-content: space-between;

          @media (max-width: 700px) {
            padding-left: 0;
          }
          &-text {
            display: flex;
            justify-content:  space-between;
            &-date, &-authorMini, &-author {
              p {
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 20px;
                text-transform: uppercase;
                color: #221F1A;

                @media (max-width: 700px) {
                  font-size: 13px;
                  line-height: 15px;
                  max-width: 100px;
                }
              }

            }

            &-date {
              @media (max-width: 700px) {
                display: flex;
                justify-content: space-between;
                width: 100%;
              }
            }

            &-authorMini {
              display: none;
              @media (max-width: 700px) {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 20px;
                margin-top: 30px;

                img {
                  margin-bottom: 9px;
                }
              }
            }

            &-author {
              display: flex;
              justify-content: center;
              align-items: flex-start;
              img {
                margin-top: 5px;
                margin-right: 15px;
              }

              @media (max-width: 700px) {
                display: none;
              }
            }


          }

          &-authorImg {
            display: flex;
            justify-content: flex-end;

            @media (max-width: 650px) {
              justify-content: center;
            }

            img {
              width: 50px;
              height: 50px;
              margin-left: 20px;
              cursor: pointer;

              @media (max-width: 650px) {
                margin-left: 10px;
                margin-right: 10px;
              }
            }
          }

          &-description {
            font-style: normal;
            font-weight: normal;
            font-size: 27px;
            line-height: 30px;
            display: flex;
            align-items: center;
            text-align: center;
            text-transform: uppercase;
            color: #221F1A;
            justify-content: center;
            margin-top: 20px;
            padding-left: 10%;
            padding-right: 10%;

            /*p {*/
            /*  max-width: 480px;*/
            /*}*/

            @media (max-width: 700px) {
              font-size: 22px;
              line-height: 25px;
            }

            span{
              font-style: italic;
            }
          }
        }
      }
    }
  }


  .event-page {
    &-header {
      padding: 140px 20px 30px 20px;
      background: #FFDD7C;
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

        @media (max-width: 850px) {
          height: 720px;
        }

        @media (max-width: 650px) {
          height: 549px;
        }

        &-block {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding-right: 20px;
          border-right: 1px solid;

          div:nth-child(3) {
            @media (max-width: 850px) {
              order: 4;
              margin-top: 30px;
            }

          }

          div:nth-child(4) {
            @media (max-width: 850px) {
              order: 3;
              margin-top: 40px;

            }

          }

          div:nth-child(6) {
            @media (max-width: 850px) {
              order: 5;
              margin-top: 40px;
              p {
                margin-top: 9px;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 20px;
                /* or 133% */

                text-align: center;
                text-transform: uppercase;

                /* Black brown */

                color: #221F1A;
              }
            }

            @media (max-width: 650px) {
              margin-top: 0;
            }
          }

          @media (max-width: 850px) {
            border-right: 0;
            padding-right: 0;
          }

          &-imgMini {
            display: none;

            @media (max-width: 850px) {
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 400px;
                height: 300px;
              }
            }

            @media (max-width: 650px) {
              img {
                width: 285px;
                height: 214px;
              }
            }
          }

          &-authorMini {
            display: none;

            @media (max-width: 850px) {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;

              p {
                max-width: 199px;
              }
            }

            @media (max-width: 650px) {
              font-size: 13px;
              line-height: 15px;
              margin-top: 0;
            }
          }

          &-text {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 100px;
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
              @media (max-width: 850px) {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex: 1;
              }
            }

            &-author {
              display: flex;
              align-items: flex-start;

              @media (max-width: 850px) {
                display: none;
              }

              img {
                margin-top: 5px;
                margin-right: 15px;
              }

              p {
                max-width: 200px;
              }
            }


          }

          &-title {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            p {
              font-style: normal;
              font-weight: normal;
              font-size: 50px;
              line-height: 50px;
              text-align: center;
              text-transform: uppercase;
              color: #221F1A;
              max-width: 639px;

              span {
                font-style: italic;
              }

              @media (max-width: 850px) {
                font-size: 40px;
                line-height: 40px;
                max-width: 604px;
              }

              @media (max-width: 650px) {
                font-size: 22px;
                line-height: 25px;
                max-width: 335px;
              }


            }
          }

          &-description {
            display: flex;
            justify-content: center;
            p {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              text-transform: uppercase;
              color: #221F1A;
              text-align: center;

              @media (max-width: 650px) {
                font-size: 13px;
                line-height: 15px;
              }
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

      &-footer {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        @media (max-width: 650px) {
          flex-wrap: wrap;
          justify-content: center;
        }

        &-item:nth-child(2) {
          border-right: 1px solid;
          border-left: 1px solid;

          @media (max-width: 650px) {
            border-right: 0;
          }
        }

        &-item:nth-child(3) {
          @media (max-width: 650px) {
            border-top: 1px solid;
            width: 100%;
            margin-top: 20px;
            padding-top: 30px;
            padding-bottom: 0;
          }
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

          @media (max-width: 850px) {
            padding-bottom: 20px;
            padding-top: 20px;
          }

          @media (max-width: 650px) {
            padding-bottom: 10px;
            padding-top: 10px;
            width: 50%;
            flex: inherit;
            font-size: 13px;
            line-height: 20px;
          }

          &-block {
            display: flex;
            align-items: center;
          }
        }
      }
     }

    &-content {
      padding-top: 80px;
      padding-left: 20px;
      display: flex;

      @media (max-width: 850px) {
        padding-top: 60px;
      }
      @media (max-width: 650px) {
        padding-top: 40px;
      }

      &-buy-ticket {
        min-width: 345px;
        position: relative;

        @media (max-width: 850px) {
          min-width: 265px;
        }
        @media (max-width: 650px) {
          display: none;
        }

        &-date, &-author, &-price {
          max-width: 217px;
          border-top: 1px solid;
          padding-bottom: 20px;
          padding-top: 20px;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-transform: uppercase;
          color: #221F1A;
        }

        &-author {
        }

        &-price {

          .button {
            margin-top: 20px;
            justify-content: center;
            align-items: center;
            display: flex;
            width: 217px;
            height: 60px;
            left: 20px;
            border: 1px solid #221F1A;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
          }
        }
      }

      &-info {
        &-title {
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 32px;
          text-transform: uppercase;
          color: #221F1A;
          margin-bottom: 40px;

          @media (max-width: 850px) {
            font-size: 22px;
            line-height: 25px;
          }

          p {
            max-width: 60%;

            @media (max-width: 850px) {
              max-width: 100%;
            }
          }
        }

        &-description {
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          color: #221F1A;
          margin-bottom: 40px;

          p {
            max-width: 60%;

            @media (max-width: 850px) {
              font-size: 15px;
              line-height: 20px;
              max-width: 100%;
              margin-right: 20px;

            }
          }
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
              display: flex;

              img {
                margin-left: 22px;
              }
            }
          }
        }

        &-text {
          &-title {
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 25px;
            text-transform: uppercase;
            color: #221F1A;
            margin-bottom: 40px;
            max-width: 60%;

            @media (max-width: 850px) {
              font-size: 22px;
              line-height: 25px;
              max-width: 100%;
            }
          }

          &-description {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 26px;
            color: #221F1A;
            margin-bottom: 40px;
            max-width: 60%;

            @media (max-width: 850px) {
              font-size: 15px;
              line-height: 20px;
              max-width: 100%;
              margin-right: 20px;
            }
          }
        }

        &-virtual-tour {
          /*background-image: url("../../assets/image/bg2.jpg");*/
          background-size: 100% 600px;
          background-repeat: no-repeat;
          height: 600px;
          width: 100%;
          padding-top: 30px;
          padding-left: 20px;
          padding-bottom: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          @media (max-width: 850px) {
            background-size: 100% 300px;
            height: 300px;
          }

          @media (max-width: 650px) {
            background-repeat: round;
            background-size: 100% 220px;
            height: 220px;
            width: 96%;
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


              .elem {
                margin-left: 30px;
                span {
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 20px;
                  text-align: right;
                  text-transform: uppercase;
                  color: #FFFFFF;

                  @media (max-width: 650px) {
                    font-size: 13px;
                    line-height: 20px;
                  }
                }
              }
            }
          }
        }

        &-buy-ticket {
          display: none;
          @media (max-width: 650px) {
            display: block;
            width: 100%;
            padding-right: 20px;
            margin-top: 60px;

          &-date, &-author, &-price {
            width: 100%;
            border-top: 1px solid;
            padding-bottom: 20px;
            padding-top: 20px;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
          }

          &-date {
          }

          &-price {

            .button {
              margin-top: 20px;
              justify-content: center;
              align-items: center;
              display: flex;
              width: 217px;
              height: 60px;
              left: 20px;
              border: 1px solid #221F1A;
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              text-transform: uppercase;
              color: #221F1A;
            }
          }
          }
        }

        &-held {
          margin-top: 60px;
          margin-bottom: 60px;
          max-width: 70%;

          @media (max-width: 850px) {
            max-width: 100%;
            margin-right: 20px;
          }
          &-title {
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 25px;
            text-transform: uppercase;
            color: #221F1A;
            padding-bottom: 13px;
            border-bottom: 1px solid;
          }

          &-items {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 26px;
            color: #221F1A;

            .image {
              min-width: 120px;
              width: 120px;
              height: 120px;
            }

            .city {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              text-transform: uppercase;
              color: #221F1A;

              @media (max-width: 850px) {
                font-size: 13px;
                line-height: 15px;
              }
            }
          }
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
        justify-content: start;
        flex: 1;
        height: 430px;

        &:last-child {
          border-right: 0;
        }

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
              max-width: 142px;
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              /* or 133% */

              text-align: center;
              text-transform: uppercase;

              /* Black brown */

              color: #221F1A;

              @media (max-width: 650px) {
                font-size: 13px;
                line-height: 15px;
                max-width: 173px;
              }

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
            position: relative;





            img {
              margin-top: 5px;
              margin-right: 15px;
              display: inline;
            }

            p {
              text-align: left;
              max-width: min-content;
              display: inline;
              min-width: 200px;
              /*white-space: nowrap;*/
              /*text-overflow: ellipsis;*/
              /*overflow: hidden;*/
              /*white-space: nowrap;*/


              /*@supports (-webkit-line-clamp: 2) {*/
              /*  !*overflow: hidden;*!*/
              /*  !*text-overflow: ellipsis;*!*/
              /*  white-space: initial;*/
              /*  display: -webkit-box;*/
              /*  -webkit-line-clamp: 2;*/
              /*  -webkit-box-orient: vertical;*/
              /*}*/
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
          padding-left: 10%;
          padding-right: 10%;

          @media (max-width: 850px) {
            font-size: 22px;
            line-height: 25px;
          }

          p {
            /*max-width: 360px;*/

            span {
              font-style: italic;
            }
          }
        }
      }
    }


  }

</style>
