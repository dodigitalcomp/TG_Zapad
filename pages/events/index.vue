<template>
    <div>
        <Header bgcolor="yellow" logoColor="black" ref="header"/>
        <div class="events">
            <div class="events-header">
              <div class="events-header-title">
                  <p>Афиша событий</p>
              </div>
              <div class="events-header-filter">
                  <div class="events-header-filter-left mini ">
                      <div class="item">
                          <img class="mr-1" src="../../assets/image/(.svg" alt="">
                          <p>Фильтр</p>
                          <img src="../../assets/image/arrow.svg" alt="">
                          <img class="ml-1" src="../../assets/image/).svg" alt="">
                          <div class="item-nav hidden">
                              <p class="item-nav-text">Все события</p>
                              <p class="item-nav-text">Выставки</p>
                              <p class="item-nav-text">Экскурсии</p>
                              <p class="item-nav-text">Лекции</p>
                              <p class="item-nav-text">Творческие мастерские</p>
                              <p class="item-nav-text">Концерты</p>
                              <p class="item-nav-text">Кино</p>
                              <p class="item-nav-text">ДискусCии</p>
                              <p class="item-nav-text">Конференции</p>
                          </div>
                      </div>
                  </div>
                  <div class="events-header-filter-left max " v-if="sortPanelData">
                      <div class="item" @click="sortPanelData.filterByAuditoria[0].isActive = !sortPanelData.filterByAuditoria[0].isActive" v-if="sortPanelData.filterByAuditoria && sortPanelData.filterByAuditoria[0]">
                          <img class="mr-1" src="../../assets/image/(.svg" alt="">
                          <p class="whitespace-nowrap">{{sortPanelData.filterByAuditoria[0].name}}</p>
                          <img src="../../assets/image/arrow.svg" alt="">
                          <img class="ml-1" src="../../assets/image/).svg" alt="">
                          <div class="item-nav" v-if="sortPanelData.filterByAuditoria[0].isActive">
                              <p class="item-nav-text" @click="getByUrl(item.link)" v-for="(item, i) in sortPanelData.filterByAuditoria[0].variants" :key="i">{{item.name}}</p>
                          </div>
                      </div>
                      <div class="item" @click="sortPanelData.filterByType[0].isActive = !sortPanelData.filterByType[0].isActive" v-if="sortPanelData.filterByType && sortPanelData.filterByType[0]">
                          <img class="mr-1" src="../../assets/image/(.svg" alt="">
                          <p class="whitespace-nowrap">{{sortPanelData.filterByType[0].name}}</p>
                          <img src="../../assets/image/arrow.svg" alt="">
                          <img class="ml-1" src="../../assets/image/).svg" alt="">
                          <div class="item-nav" v-if="sortPanelData.filterByType[0].isActive">
                              <p class="item-nav-text" @click="getByUrl(item.link)" v-for="(item, i) in sortPanelData.filterByType[0].variants" :key="i">{{item.name}}</p>
                          </div>
                      </div>
                      <div class="item" @click="sortPanelData.sort['sortByDate'].isActive = !sortPanelData.sort['sortByDate'].isActive" v-if="sortPanelData.sort && sortPanelData.sort['sortByDate']">
                          <img class="mr-1" src="../../assets/image/(.svg" alt="">
                          <p class="whitespace-nowrap">{{sortPanelData.sort['sortByDate'].name}}</p>
                          <img src="../../assets/image/arrow.svg" alt="">
                          <img class="ml-1" src="../../assets/image/).svg" alt="">
                          <div class="item-nav" v-if="sortPanelData.sort['sortByDate'].isActive">
                              <p class="item-nav-text" @click="getByUrl(item.link)" v-for="(item, i) in sortPanelData.sort['sortByDate'].variants" :key="i">{{item.name}}</p>
                          </div>
                      </div>
                  </div>
                  <div class="events-header-filter-right">
                      <img class="mr-1" src="../../assets/image/(.svg" alt="">
                      <div class="item" @click="pageType = 1" :class="pageType === 1 ? 'active' : ''" >
                          <img src="../../assets/image/календарь.svg" alt="">
                          <p>{{langPhrase.grid_v1}}</p>
                      </div>
                      <span class="slesh">/</span>
                      <div class="item" :class="pageType === 2 ? 'active' : ''" @click="pageType = 2">
                          <img src="../../assets/image/события.svg" alt="">
                          <p>{{langPhrase.grid_v2}}</p>
                      </div>
                      <img class="ml-1" src="../../assets/image/).svg" alt="">
                  </div>
              </div>
            </div>
            <div class="events-content" v-if="pageType === 1">
                <div class="events-content-block" v-for="(item, i) in events" :key="i">
                    <div class="events-content-block-text">
                        <p class="events-content-block-text-day">{{item.dateFrom}}</p>
<!--                        <p class="events-content-block-text-date">7 октября</p>-->
                    </div>
                    <div class="events-content-block-items">
                        <NuxtLink tag="a" :to="event.url" class="events-content-block-item" :class="index >= 1 ? 'border-top' : ''" v-for="(event, index) in item.listItems" :key="index">
                            <div class="events-content-block-item-image">
                                <img :src="event.picture" alt="">
                            </div>
                            <div class="events-content-block-item-body">
                                <div class="events-content-block-item-body-text">
                                    <div class="events-content-block-item-body-text-date">
                                        <p>{{event.time}}</p>
                                        <p>{{event.type}}</p>
                                    </div>
                                    <div class="events-content-block-item-body-text-author">
                                        <img src="../../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>{{event.place}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="events-content-block-item-imageMini">
                                    <img :src="event.picture" alt="">
                                </div>
                                <div class="events-content-block-item-body-description">
                                    <p>{{event.name}}</p>
                                </div>
                                <div>
                                    <div class="events-content-block-item-body-text-authorMini">
                                        <img src="../../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>{{event.place}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="events-calendar" v-if="pageType === 2">
                <NuxtLink tag="div" :to="item.url" class="events-calendar-item" v-for="(item, i) in listItems" :key="i">
                    <div  class="events-calendar-item-text">
                       <div class="events-calendar-item-text-date">
                           <p>{{item.time}}</p>
                           <p>{{item.type}}</p>
                       </div>
                       <div class="events-calendar-item-text-author">
                           <img src="../../assets/image/pin1.svg" alt="">
                           <div>
                               <p>{{item.name}}</p>
                           </div>
                       </div>
                    </div>
                    <div class="events-calendar-item-image">
                        <img :src="item.picture" alt="">
                    </div>
                    <div class="events-calendar-item-description">
                        <p>{{item.name_cursive}}</p>
                    </div>
                    <div>
                        <div class="events-calendar-item-text-mini">
                            <img src="../../assets/image/pin1.svg" alt="">
                            <div>
                                <p>{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
<!--                <div class="events-calendar-item">-->
<!--                    <div  class="events-calendar-item-text">-->
<!--                        <div class="events-calendar-item-text-date">-->
<!--                            <p>10:00–12:00</p>-->
<!--                            <p>выставка</p>-->
<!--                        </div>-->
<!--                        <div class="events-calendar-item-text-author">-->
<!--                            <img src="../../assets/image/pin1.svg" alt="">-->
<!--                            <div>-->
<!--                                <p>Музей Янтаря,</p>-->
<!--                                <p>Калининград</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="events-calendar-item-image">-->
<!--                        <img src="../../assets/image/Pic-fit3.jpg" alt="">-->
<!--                    </div>-->
<!--                    <div class="events-calendar-item-description">-->
<!--                        <p>Истоки<span class="william"> мира</span></p>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <div class="events-calendar-item-text-mini">-->
<!--                            <img src="../../assets/image/pin1.svg" alt="">-->
<!--                            <div>-->
<!--                                <p>Музей Янтаря,</p>-->
<!--                                <p>Калининград</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="events-calendar-item">-->
<!--                    <div  class="events-calendar-item-text">-->
<!--                        <div class="events-calendar-item-text-date">-->
<!--                            <p>10:00–12:00</p>-->
<!--                            <p>выставка</p>-->
<!--                        </div>-->
<!--                        <div class="events-calendar-item-text-author">-->
<!--                            <img src="../../assets/image/pin1.svg" alt="">-->
<!--                            <div>-->
<!--                                <p>Музей Янтаря,</p>-->
<!--                                <p>Калининград</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="events-calendar-item-image">-->
<!--                        <img src="../../assets/image/Pic-fit3.jpg" alt="">-->
<!--                    </div>-->
<!--                    <div class="events-calendar-item-description">-->
<!--                        <p>Истоки<span class="william"> мира</span></p>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <div class="events-calendar-item-text-mini">-->
<!--                            <img src="../../assets/image/pin1.svg" alt="">-->
<!--                            <div>-->
<!--                                <p>Музей Янтаря,</p>-->
<!--                                <p>Калининград</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="events-calendar-item">-->
<!--                    <div  class="events-calendar-item-text">-->
<!--                        <div class="events-calendar-item-text-date">-->
<!--                            <p>10:00–12:00</p>-->
<!--                            <p>выставка</p>-->
<!--                        </div>-->
<!--                        <div class="events-calendar-item-text-author">-->
<!--                            <img src="../../assets/image/pin1.svg" alt="">-->
<!--                            <div>-->
<!--                                <p>Музей Янтаря,</p>-->
<!--                                <p>Калининград</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="events-calendar-item-image">-->
<!--                        <img src="../../assets/image/Pic-fit3.jpg" alt="">-->
<!--                    </div>-->
<!--                    <div class="events-calendar-item-description">-->
<!--                        <p>Истоки<span class="william"> мира</span></p>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <div class="events-calendar-item-text-mini">-->
<!--                            <img src="../../assets/image/pin1.svg" alt="">-->
<!--                            <div>-->
<!--                                <p>Музей Янтаря,</p>-->
<!--                                <p>Калининград</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="events-calendar-item">-->
<!--                    <div  class="events-calendar-item-text">-->
<!--                        <div class="events-calendar-item-text-date">-->
<!--                            <p>10:00–12:00</p>-->
<!--                            <p>выставка</p>-->
<!--                        </div>-->
<!--                        <div class="events-calendar-item-text-author">-->
<!--                            <img src="../../assets/image/pin1.svg" alt="">-->
<!--                            <div>-->
<!--                                <p>Музей Янтаря,</p>-->
<!--                                <p>Калининград</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="events-calendar-item-image">-->
<!--                        <img src="../../assets/image/Pic-fit3.jpg" alt="">-->
<!--                    </div>-->
<!--                    <div class="events-calendar-item-description">-->
<!--                        <p>Истоки<span class="william"> мира</span></p>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <div class="events-calendar-item-text-mini">-->
<!--                            <img src="../../assets/image/pin1.svg" alt="">-->
<!--                            <div>-->
<!--                                <p>Музей Янтаря,</p>-->
<!--                                <p>Калининград</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="events-calendar-item">-->
<!--                    <div  class="events-calendar-item-text">-->
<!--                        <div class="events-calendar-item-text-date">-->
<!--                            <p>10:00–12:00</p>-->
<!--                            <p>выставка</p>-->
<!--                        </div>-->
<!--                        <div class="events-calendar-item-text-author">-->
<!--                            <img src="../../assets/image/pin1.svg" alt="">-->
<!--                            <div>-->
<!--                                <p>Музей Янтаря,</p>-->
<!--                                <p>Калининград</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="events-calendar-item-image">-->
<!--                        <img src="../../assets/image/Pic-fit3.jpg" alt="">-->
<!--                    </div>-->
<!--                    <div class="events-calendar-item-description">-->
<!--                        <p>Истоки<span class="william"> мира</span></p>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <div class="events-calendar-item-text-mini">-->
<!--                            <img src="../../assets/image/pin1.svg" alt="">-->
<!--                            <p>Музей Янтаря, Калининград</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
            <div class="events-pagination line-block">
              <div class="events-pagination-page" v-if="pagination && pagination.max_page > 1">
                  <vs-pagination
                          :total-pages="pagination.max_page"
                          :current-page="pagination.current_page ? pagination.current_page : 1"
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
import Footer from "../../components/Footer";
import { mapActions, mapState} from 'vuex'
import VsPagination from '@vuesimple/vs-pagination';
export default {
    name: 'IndexPage',
    components: {Footer, VsPagination},
    data () {
        return {
            date_today:new Date(),
            pageType: 1,
            sortPanelData: 1,
        }
    },
    computed: {
        ...mapState({
            events: (state) => state.events.events,
            listItems: (state) => state.events.listItems,
            langPhrase: (state) => state.events.langPhrase,
            pagination: (state) => state.events.pagination,
            sortPanel: (state) => state.events.sortPanel,
        })
    },
    created() {
        this.getEvents(1).then(() => {
           const arr = JSON.parse(JSON.stringify(this.sortPanel))
           this.sortPanelData = arr
        })
    },
    methods: {
        ...mapActions({
            getEvents: 'events/getEvents',
            getByUrlEvents: 'events/getByUrlEvents',
        }),
        getByUrl (url) {
            this.getByUrlEvents(url).then(() => {
                const arr = JSON.parse(JSON.stringify(this.sortPanel))
                this.sortPanelData = arr
            })
        },
        changePage(page) {
            this.getEvents(page)
        },
    }
}
</script>
<style scoped lang="scss">

.hidden {
    display: none !important;
}
.events {
    background: #FFDD7C;
    padding-top: 161px;

    .mini {
        display: none;

        @media (max-width: 920px) {
            display: flex;
        }
    }

    .max {
        display: flex;

        @media (max-width: 920px) {
            display: none;
        }
    }

    .border-top {
        border-top: 1px solid;
        position: relative;

        &::after {
            @media (min-width: 920px)  {
              content: '';
                display: block;
                position: absolute;
                top: -2px;
                left: 0;
                width: 20px;
                height: 3px;
                background: #FFDD7C;
            }
        }


    }

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
            justify-content: space-between;

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

                .slesh {
                    margin-left: 10px;
                    margin-right: 10px;
                }

                .item {
                    display: flex;
                    align-items: center;
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
        &-block {
            border-top: 1px solid;
            margin-left: 20px;
            margin-right: 20px;
            display: flex;


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
                height: 270px;
                display: flex;
                flex: 6;

                @media (max-width: 700px) {
                    height: auto;
                }

                &-image {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 269px;
                    border-right: 1px solid;

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

                    &-description {
                        font-style: normal;
                        font-weight: normal;
                        font-size: 30px;
                        line-height: 32px;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        text-transform: uppercase;
                        color: #221F1A;
                        justify-content: center;

                        p {
                            max-width: 480px;
                        }

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

    &-calendar {
        display: flex;
        flex-wrap: wrap;

        &-item:nth-child(odd) {
            border-right: 1px solid;
            line-height: 10px;
            margin-left: 20px;
            padding-right: 20px;
            position: relative;

            @media (max-width: 680px) {
                border-right: 0;
            }

            &::after{
                position: absolute;
                top: 0;
                right: -5px;
                content: '';
                display: block;
                width: 10px;
                height: 20px;
                background: #FFDD7C;
                @media (max-width: 680px) {
                    display: none;
                }
            }

            &::before {
                position: absolute;
                bottom: 0;
                right: -5px;
                content: '';
                display: block;
                width: 10px;
                height: 20px;
                background: #FFDD7C;

                @media (max-width: 680px) {
                    display: none;
                }
            }
        }
        &-item:nth-child(even) {
            margin-right: 20px;
            padding-left: 20px;
        }

        &-item {
            border-top: 1px solid;
            height: 620px;
            display: flex;
            padding-top: 20px;
            flex-direction: column;
            justify-content: space-between;
            width: 47%;

            @media (max-width: 920px) {
                height: 420px;
            }

            @media (max-width: 680px) {
                width: 100%;
            }

            &-text {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;

                &-date, &-mini,  &-author {
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
                        }
                    }

                }

                &-date {
                  @media (max-width: 920px) {
                      display: flex;
                      justify-content: space-between;
                      width: 100%;
                  }
                }

                &-mini {
                    display: none;
                    @media (max-width: 920px) {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 20px;
                    }
                }

                &-author {
                    display: flex;
                    align-items: center;

                    img {
                        margin-right: 15px;
                    }

                    @media (max-width: 920px) {
                        display: none;
                    }
                }
            }

            &-image{
                display: flex;
                justify-content: center;
                align-items: center;
                /*flex: auto;*/
            }

            &-description {
                font-style: normal;
                font-weight: normal;
                font-size: 30px;
                line-height: 32px;
                display: flex;
                align-items: flex-start;
                /*flex: auto;*/
                text-transform: uppercase;
                color: #221F1A;
                justify-content: center;

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

    &-pagination {
        border-top: 1px solid;
        margin-right: 20px;
        margin-left: 20px;
        height: 240px;
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