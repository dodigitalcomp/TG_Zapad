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
                          <img class="mr-1" src="../assets/image/(.svg" alt="">
                          <p>Фильтр</p>
                          <img src="../assets/image/arrow.svg" alt="">
                          <img class="ml-1" src="../assets/image/).svg" alt="">
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
                  <div class="events-header-filter-left max ">
                      <div class="item">
                          <img class="mr-1" src="../assets/image/(.svg" alt="">
                          <p class="whitespace-nowrap">Все события</p>
                          <img src="../assets/image/arrow.svg" alt="">
                          <img class="ml-1" src="../assets/image/).svg" alt="">
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
                      <div class="item">
                          <img class="mr-1" src="../assets/image/(.svg" alt="">
                          <p class="whitespace-nowrap">Аудитория</p>
                          <img src="../assets/image/arrow.svg" alt="">
                          <img class="ml-1" src="../assets/image/).svg" alt="">
                          <div class="item-nav hidden">
                              <p class="item-nav-text">Любая аудитория</p>
                              <p class="item-nav-text">Взрослые</p>
                              <p class="item-nav-text">Экскурсии</p>
                              <p class="item-nav-text">Подростки</p>
                              <p class="item-nav-text">Дети</p>
                              <p class="item-nav-text">Друзья музея</p>
                          </div>
                      </div>
                      <div class="item">
                          <img class="mr-1" src="../assets/image/(.svg" alt="">
                          <p class="whitespace-nowrap">Все площадки</p>
                          <img src="../assets/image/arrow.svg" alt="">
                          <img class="ml-1" src="../assets/image/).svg" alt="">
                          <div class="item-nav hidden" >
                              <div class="item-nav-filter">
                                  <div class="item-nav-filter-title">
                                      <label class="item-nav-filter-container">
                                          <input type="checkbox">
                                          <span class="checkmark"></span>
                                      </label>
                                      <p>Все площадки</p>
                                  </div>
                                  <div class="item-nav-filter-content">
                                      <div class="item-nav-filter-content-item">
                                          <div class="flex items-center">
                                              <label class="item-nav-filter-container">
                                                  <input type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <p>Калининград (Россия)</p>
                                              <img src="../assets/image/arrow.svg" alt="">
                                          </div>
                                          <div></div>
                                      </div>
                                      <div class="item-nav-filter-content-item">
                                          <div class="flex items-center">
                                              <label class="item-nav-filter-container">
                                                  <input type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <p>Москва (Россия)</p>
                                              <img src="../assets/image/arrow.svg" alt="">
                                          </div>
                                          <div></div>
                                      </div>
                                      <div class="item-nav-filter-content-item">
                                          <div class="flex items-center">
                                              <label class="item-nav-filter-container">
                                                  <input type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <p>Рига (Латвия)</p>
                                              <img src="../assets/image/arrow.svg" alt="">
                                          </div>
                                          <div></div>
                                      </div>
                                      <div class="item-nav-filter-content-item">
                                          <div class="flex items-center">
                                              <label class="item-nav-filter-container">
                                                  <input type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <p>Вильнюс (Литва)</p>
                                              <img src="../assets/image/arrow.svg" alt="">
                                          </div>
                                          <div class="ml-5">
                                              <div class="flex items-center mt-4">
                                                  <label class="item-nav-filter-container">
                                                      <input type="checkbox">
                                                      <span class="checkmark"></span>
                                                  </label>
                                                  <p>Museum of illusions</p>
                                              </div>
                                              <div class="flex items-center mt-4">
                                                  <label class="item-nav-filter-container">
                                                      <input type="checkbox">
                                                      <span class="checkmark"></span>
                                                  </label>
                                                  <p>Верхний замок-музей</p>
                                              </div>
                                              <div class="flex items-center mt-4">
                                                  <label class="item-nav-filter-container">
                                                      <input type="checkbox">
                                                      <span class="checkmark"></span>
                                                  </label>
                                                  <p>Национальный музей "Дворецвеликих князей литовских"</p>
                                              </div>
                                              <div class="flex items-center mt-4">
                                                  <label class="item-nav-filter-container">
                                                      <input type="checkbox">
                                                      <span class="checkmark"></span>
                                                  </label>
                                                  <p>Музей Холокоста</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="item">
                          <img class="mr-1" src="../assets/image/(.svg" alt="">
                          <p class="whitespace-nowrap">дата</p>
<!--                          <p>-->
<!--                           <date-picker-->
<!--                               input-class="date-picker"-->
<!--                               placeholder="MM/DD/YYYY"-->
<!--                               format="MM/dd/yyyy"-->
<!--                               v-model="date_today" />-->
<!--                          </p>-->
                          <img src="../assets/image/arrow.svg" alt="">
                          <img class="ml-1" src="../assets/image/).svg" alt="">
                      </div>
                  </div>
                  <div class="events-header-filter-right">
                      <img class="mr-1" src="../assets/image/(.svg" alt="">
                      <div class="item">
                          <img src="../assets/image/календарь.svg" alt="">
                          <p>Календарь</p>
                      </div>
                      <span class="slesh">/</span>
                      <div class="item active">
                          <img src="../assets/image/события.svg" alt="">
                          <p>события</p>
                      </div>
                      <img class="ml-1" src="../assets/image/).svg" alt="">
                  </div>
              </div>
            </div>
            <div class="events-content">
                <div class="events-content-block">
                    <div class="events-content-block-text">
                        <p class="events-content-block-text-day">четверг, сегодня</p>
                        <p class="events-content-block-text-date">7 октября</p>
                    </div>
                    <div class="events-content-block-items">
                        <div class="events-content-block-item">
                            <div class="events-content-block-item-image">
                                <img src="../assets/image/Pic-fit3.jpg" alt="">
                            </div>
                            <div class="events-content-block-item-body">
                                <div class="events-content-block-item-body-text">
                                    <div class="events-content-block-item-body-text-date">
                                        <p>10:00–20:00</p>
                                        <p>выставка</p>
                                    </div>
                                    <div class="events-content-block-item-body-text-author">
                                        <img src="../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>Музей Янтаря,</p>
                                            <p>Калининград</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="events-content-block-item-imageMini">
                                    <img src="../assets/image/Pic-fit3.jpg" alt="">
                                </div>
                                <div class="events-content-block-item-body-description">
                                    <p>Истоки мира</p>
                                </div>
                                <div>
                                    <div class="events-content-block-item-body-text-authorMini">
                                        <img src="../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>Музей Янтаря,</p>
                                            <p>Калининград</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="events-content-block-item border-top">
                            <div class="events-content-block-item-image">
                                <img src="../assets/image/Pic-fit3.jpg" alt="">
                            </div>
                            <div class="events-content-block-item-body">
                                <div class="events-content-block-item-body-text">
                                    <div class="events-content-block-item-body-text-date">
                                        <p>19:00</p>
                                        <p>Кинопоказ</p>
                                    </div>
                                    <div class="events-content-block-item-body-text-author">
                                        <img src="../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>Музей Янтаря,</p>
                                            <p>Калининград</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="events-content-block-item-imageMini">
                                    <img src="../assets/image/Pic-fit3.jpg" alt="">
                                </div>
                                <div class="events-content-block-item-body-description">
                                    <p>Мифы и легенды в произведениях <span class="william"> русских художников</span></p>
                                </div>
                                <div>
                                    <div class="events-content-block-item-body-text-authorMini">
                                        <img src="../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>Музей Янтаря,</p>
                                            <p>Калининград</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="events-content-block">
                    <div class="events-content-block-text">
                        <p class="events-content-block-text-day">Пятница, завтра</p>
                        <p class="events-content-block-text-date">8 октября</p>
                    </div>
                    <div class="events-content-block-items">
                        <div class="events-content-block-item">
                            <div class="events-content-block-item-image">
                                <img src="../assets/image/Pic-fit3.jpg" alt="">
                            </div>
                            <div class="events-content-block-item-body">
                                <div class="events-content-block-item-body-text">
                                    <div class="events-content-block-item-body-text-date">
                                        <p>10:00–12:00</p>
                                        <p>выставка</p>
                                    </div>
                                    <div class="events-content-block-item-body-text-author">
                                        <img src="../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>Музей Янтаря,</p>
                                            <p>Калининград</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="events-content-block-item-imageMini">
                                    <img src="../assets/image/Pic-fit3.jpg" alt="">
                                </div>
                                <div class="events-content-block-item-body-description">
                                    <p>«Маленький человек» <span class="william">и русская живопись XIX века</span></p>
                                </div>
                                <div>
                                    <div class="events-content-block-item-body-text-authorMini">
                                        <img src="../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>Музей Янтаря,</p>
                                            <p>Калининград</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="events-content-block">
                    <div class="events-content-block-text">
                        <p class="events-content-block-text-day">Суббота</p>
                        <p class="events-content-block-text-date">9 октября</p>
                    </div>
                    <div class="events-content-block-items">
                        <div class="events-content-block-item">
                            <div class="events-content-block-item-image">
                                <img src="../assets/image/Pic-fit3.jpg" alt="">
                            </div>
                            <div class="events-content-block-item-body">
                                <div class="events-content-block-item-body-text">
                                    <div class="events-content-block-item-body-text-date">
                                        <p>10:00–12:00</p>
                                        <p>выставка</p>
                                    </div>
                                    <div class="events-content-block-item-body-text-author">
                                        <img src="../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>Музей Янтаря,</p>
                                            <p>Калининград</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="events-content-block-item-imageMini">
                                    <img src="../assets/image/Pic-fit3.jpg" alt="">
                                </div>
                                <div class="events-content-block-item-body-description">
                                    <p>Замки <span class="william">ЛуАры</span></p>
                                </div>
                                <div>
                                    <div class="events-content-block-item-body-text-authorMini">
                                        <img src="../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>Музей Янтаря,</p>
                                            <p>Калининград</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="events-content-block-item border-top">
                            <div class="events-content-block-item-image">
                                <img src="../assets/image/Pic-fit3.jpg" alt="">
                            </div>
                            <div class="events-content-block-item-body">
                                <div class="events-content-block-item-body-text">
                                    <div class="events-content-block-item-body-text-date">
                                        <p>10:00–12:00</p>
                                        <p>выставка</p>
                                    </div>
                                    <div class="events-content-block-item-body-text-author">
                                        <img src="../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>Музей Янтаря,</p>
                                            <p>Калининград</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="events-content-block-item-imageMini">
                                    <img src="../assets/image/Pic-fit3.jpg" alt="">
                                </div>
                                <div class="events-content-block-item-body-description">
                                    <p>Истоки<span class="william"> мира</span></p>
                                </div>
                                <div>
                                  <div class="events-content-block-item-body-text-authorMini">
                                    <img src="../assets/image/pin1.svg" alt="">
                                      <div>
                                          <p>Музей Янтаря,</p>
                                          <p>Калининград</p>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="events-content-block-item border-top">
                            <div class="events-content-block-item-image">
                                <img src="../assets/image/Pic-fit3.jpg" alt="">
                            </div>
                            <div class="events-content-block-item-body">
                                <div class="events-content-block-item-body-text">
                                    <div class="events-content-block-item-body-text-date">
                                        <p>10:00–12:00</p>
                                        <p>выставка</p>
                                    </div>
                                    <div class="events-content-block-item-body-text-author">
                                        <img src="../assets/image/pin1.svg" alt="">
                                        <div>
                                            <p>Музей Янтаря,</p>
                                            <p>Калининград</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="events-content-block-item-imageMini">
                                    <img src="../assets/image/Pic-fit3.jpg" alt="">
                                </div>
                                <div class="events-content-block-item-body-description">
                                    <p>Мифы и легенд в произведениях <span class="william">русских художников</span></p>
                                </div>
                                <div>
                                  <div class="events-content-block-item-body-text-authorMini">
                                      <img src="../assets/image/pin1.svg" alt="">
                                      <div>
                                          <p>Музей Янтаря,</p>
                                          <p>Калининград</p>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="events-calendar hidden">
                <div class="events-calendar-item">
                    <div  class="events-calendar-item-text">
                       <div class="events-calendar-item-text-date">
                           <p>10:00–12:00</p>
                           <p>выставка</p>
                       </div>
                       <div class="events-calendar-item-text-author">
                           <img src="../assets/image/pin1.svg" alt="">
                           <div>
                               <p>Музей Янтаря,</p>
                               <p>Калининград</p>
                           </div>
                       </div>
                    </div>
                    <div class="events-calendar-item-image">
                        <img src="../assets/image/Pic-fit3.jpg" alt="">
                    </div>
                    <div class="events-calendar-item-description">
                        <p>Истоки<span class="william"> мира</span></p>
                    </div>
                    <div>
                        <div class="events-calendar-item-text-mini">
                            <img src="../assets/image/pin1.svg" alt="">
                            <div>
                                <p>Музей Янтаря,</p>
                                <p>Калининград</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="events-calendar-item">
                    <div  class="events-calendar-item-text">
                        <div class="events-calendar-item-text-date">
                            <p>10:00–12:00</p>
                            <p>выставка</p>
                        </div>
                        <div class="events-calendar-item-text-author">
                            <img src="../assets/image/pin1.svg" alt="">
                            <div>
                                <p>Музей Янтаря,</p>
                                <p>Калининград</p>
                            </div>
                        </div>
                    </div>
                    <div class="events-calendar-item-image">
                        <img src="../assets/image/Pic-fit3.jpg" alt="">
                    </div>
                    <div class="events-calendar-item-description">
                        <p>Истоки<span class="william"> мира</span></p>
                    </div>
                    <div>
                        <div class="events-calendar-item-text-mini">
                            <img src="../assets/image/pin1.svg" alt="">
                            <div>
                                <p>Музей Янтаря,</p>
                                <p>Калининград</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="events-calendar-item">
                    <div  class="events-calendar-item-text">
                        <div class="events-calendar-item-text-date">
                            <p>10:00–12:00</p>
                            <p>выставка</p>
                        </div>
                        <div class="events-calendar-item-text-author">
                            <img src="../assets/image/pin1.svg" alt="">
                            <div>
                                <p>Музей Янтаря,</p>
                                <p>Калининград</p>
                            </div>
                        </div>
                    </div>
                    <div class="events-calendar-item-image">
                        <img src="../assets/image/Pic-fit3.jpg" alt="">
                    </div>
                    <div class="events-calendar-item-description">
                        <p>Истоки<span class="william"> мира</span></p>
                    </div>
                    <div>
                        <div class="events-calendar-item-text-mini">
                            <img src="../assets/image/pin1.svg" alt="">
                            <div>
                                <p>Музей Янтаря,</p>
                                <p>Калининград</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="events-calendar-item">
                    <div  class="events-calendar-item-text">
                        <div class="events-calendar-item-text-date">
                            <p>10:00–12:00</p>
                            <p>выставка</p>
                        </div>
                        <div class="events-calendar-item-text-author">
                            <img src="../assets/image/pin1.svg" alt="">
                            <div>
                                <p>Музей Янтаря,</p>
                                <p>Калининград</p>
                            </div>
                        </div>
                    </div>
                    <div class="events-calendar-item-image">
                        <img src="../assets/image/Pic-fit3.jpg" alt="">
                    </div>
                    <div class="events-calendar-item-description">
                        <p>Истоки<span class="william"> мира</span></p>
                    </div>
                    <div>
                        <div class="events-calendar-item-text-mini">
                            <img src="../assets/image/pin1.svg" alt="">
                            <div>
                                <p>Музей Янтаря,</p>
                                <p>Калининград</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="events-calendar-item">
                    <div  class="events-calendar-item-text">
                        <div class="events-calendar-item-text-date">
                            <p>10:00–12:00</p>
                            <p>выставка</p>
                        </div>
                        <div class="events-calendar-item-text-author">
                            <img src="../assets/image/pin1.svg" alt="">
                            <div>
                                <p>Музей Янтаря,</p>
                                <p>Калининград</p>
                            </div>
                        </div>
                    </div>
                    <div class="events-calendar-item-image">
                        <img src="../assets/image/Pic-fit3.jpg" alt="">
                    </div>
                    <div class="events-calendar-item-description">
                        <p>Истоки<span class="william"> мира</span></p>
                    </div>
                    <div>
                        <div class="events-calendar-item-text-mini">
                            <img src="../assets/image/pin1.svg" alt="">
                            <div>
                                <p>Музей Янтаря,</p>
                                <p>Калининград</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="events-calendar-item">
                    <div  class="events-calendar-item-text">
                        <div class="events-calendar-item-text-date">
                            <p>10:00–12:00</p>
                            <p>выставка</p>
                        </div>
                        <div class="events-calendar-item-text-author">
                            <img src="../assets/image/pin1.svg" alt="">
                            <div>
                                <p>Музей Янтаря,</p>
                                <p>Калининград</p>
                            </div>
                        </div>
                    </div>
                    <div class="events-calendar-item-image">
                        <img src="../assets/image/Pic-fit3.jpg" alt="">
                    </div>
                    <div class="events-calendar-item-description">
                        <p>Истоки<span class="william"> мира</span></p>
                    </div>
                    <div>
                        <div class="events-calendar-item-text-mini">
                            <img src="../assets/image/pin1.svg" alt="">
                            <p>Музей Янтаря, Калининград</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="events-pagination line-block">
              <div class="events-pagination-page">
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
              <div></div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
    name: 'IndexPage',
    components: {Footer},
    data () {
        return {
            date_today:new Date()
        }
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