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
               <p>+7 (495) 957 07 27</p>
              <p>г. Калининград, Октябрьский остров, улица</p>
              <p>Октябрьская, д. 67 Б</p>
              <p><span>●</span> в стадии строительства</p>
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
                  <div v-if="openText" class="contacts-maps-block-modal">
                    <div class="contacts-maps-block-modal-text">
                      <p>г. Калининград, Лаврушинский переулок, 10</p>
                    </div>
                    <div class="contacts-maps-block-modal-text">
                      <p>Вход со стороны Малого Толмачевского пер., 9</p>
                    </div>
                    <div  class="contacts-maps-block-modal-date">
                      <p>xxx xxxxxx xxxx xxx x</p>
                      <p> xxx xxxxx xxxxxxx xxxxx</p>
                    </div>
                    <div class="contacts-maps-block-modal-phone">
                      <p>+7 (495) 957 07 27</p>
                    </div>
                    <div class="contacts-maps-block-modal-email">
                      <img class="mr-1" src="../assets/image/(.svg" alt="">
                      <span>tretyakov@tretyakov.ru</span>
                      <img class="ml-1" src="../assets/image/).svg" alt="">
                    </div>
                    <div>
                      <img src="../assets/image/pic133.jpg" alt="">
                    </div>
                  </div>
              </div>
              <div class="contacts-maps-list-item">
                <div class="contacts-maps-list-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>ГЦСИ </p>
                </div>
                <div v-if="openText" class="contacts-maps-block-modal">
                  <div class="contacts-maps-block-modal-text">
                    <p>г. Калининград, Лаврушинский переулок, 10</p>
                  </div>
                  <div class="contacts-maps-block-modal-text">
                    <p>Вход со стороны Малого Толмачевского пер., 9</p>
                  </div>
                  <div  class="contacts-maps-block-modal-date">
                    <p>xxx xxxxxx xxxx xxx x</p>
                    <p> xxx xxxxx xxxxxxx xxxxx</p>
                  </div>
                  <div class="contacts-maps-block-modal-phone">
                    <p>+7 (495) 957 07 27</p>
                  </div>
                  <div class="contacts-maps-block-modal-email">
                    <img class="mr-1" src="../assets/image/(.svg" alt="">
                    <span>tretyakov@tretyakov.ru</span>
                    <img class="ml-1" src="../assets/image/).svg" alt="">
                  </div>
                  <div>
                    <img src="../assets/image/pic133.jpg" alt="">
                  </div>
                </div>
              </div>
              <div class="contacts-maps-list-item">
                <div class="contacts-maps-list-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Калининградский музей изобразительных искусств </p>
                </div>
                <div v-if="openText" class="contacts-maps-block-modal">
                  <div class="contacts-maps-block-modal-text">
                    <p>г. Калининград, Лаврушинский переулок, 10</p>
                  </div>
                  <div class="contacts-maps-block-modal-text">
                    <p>Вход со стороны Малого Толмачевского пер., 9</p>
                  </div>
                  <div  class="contacts-maps-block-modal-date">
                    <p>xxx xxxxxx xxxx xxx x</p>
                    <p> xxx xxxxx xxxxxxx xxxxx</p>
                  </div>
                  <div class="contacts-maps-block-modal-phone">
                    <p>+7 (495) 957 07 27</p>
                  </div>
                  <div class="contacts-maps-block-modal-email">
                    <img class="mr-1" src="../assets/image/(.svg" alt="">
                    <span>tretyakov@tretyakov.ru</span>
                    <img class="ml-1" src="../assets/image/).svg" alt="">
                  </div>
                  <div>
                    <img src="../assets/image/pic133.jpg" alt="">
                  </div>
                </div>
              </div>
              <div class="contacts-maps-list-item">
                <div class="contacts-maps-list-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Арт Ворота</p>
                </div>
                <div v-if="openText" class="contacts-maps-block-modal">
                  <div class="contacts-maps-block-modal-text">
                    <p>г. Калининград, Лаврушинский переулок, 10</p>
                  </div>
                  <div class="contacts-maps-block-modal-text">
                    <p>Вход со стороны Малого Толмачевского пер., 9</p>
                  </div>
                  <div  class="contacts-maps-block-modal-date">
                    <p>xxx xxxxxx xxxx xxx x</p>
                    <p> xxx xxxxx xxxxxxx xxxxx</p>
                  </div>
                  <div class="contacts-maps-block-modal-phone">
                    <p>+7 (495) 957 07 27</p>
                  </div>
                  <div class="contacts-maps-block-modal-email">
                    <img class="mr-1" src="../assets/image/(.svg" alt="">
                    <span>tretyakov@tretyakov.ru</span>
                    <img class="ml-1" src="../assets/image/).svg" alt="">
                  </div>
                  <div>
                    <img src="../assets/image/pic133.jpg" alt="">
                  </div>
                </div>
              </div>
              <div class="contacts-maps-list-item">
                <div class="contacts-maps-list-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>ГЦСИ </p>
                </div>
                <div v-if="openText" class="contacts-maps-block-modal">
                  <div class="contacts-maps-block-modal-text">
                    <p>г. Калининград, Лаврушинский переулок, 10</p>
                  </div>
                  <div class="contacts-maps-block-modal-text">
                    <p>Вход со стороны Малого Толмачевского пер., 9</p>
                  </div>
                  <div  class="contacts-maps-block-modal-date">
                    <p>xxx xxxxxx xxxx xxx x</p>
                    <p> xxx xxxxx xxxxxxx xxxxx</p>
                  </div>
                  <div class="contacts-maps-block-modal-phone">
                    <p>+7 (495) 957 07 27</p>
                  </div>
                  <div class="contacts-maps-block-modal-email">
                    <img class="mr-1" src="../assets/image/(.svg" alt="">
                    <span>tretyakov@tretyakov.ru</span>
                    <img class="ml-1" src="../assets/image/).svg" alt="">
                  </div>
                  <div>
                    <img src="../assets/image/pic133.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>
          <div class="contacts-maps-block" v-if="activeTab === 'map'">
            <div class="contacts-maps-block-info">
              <div class="contacts-maps-block-info-item">
                <img v-if="openModal" class="icon" src="../assets/image/Rectangle1108.svg" alt="">
                <p @click="openModal = true">Арт Ворота</p>
              </div>
              <div class="contacts-maps-block-info-item">
                <img v-if="openModal" class="icon" src="../assets/image/Rectangle1108.svg" alt="">
                <p @click="openModal = true">ГЦСИ</p>
              </div>
              <div class="contacts-maps-block-info-item">
                <img v-if="openModal" class="icon" src="../assets/image/Rectangle1108.svg" alt="">
                <p @click="openModal = true">Калининградский музей изобразительных искусств</p>
              </div>
              <div class="contacts-maps-block-info-item">
                <img v-if="openModal" class="icon" src="../assets/image/Rectangle1108.svg" alt="">
                <p @click="openModal = true">Арт Ворота</p>
              </div>
              <div class="contacts-maps-block-info-item">
                <img v-if="openModal" class="icon" src="../assets/image/Rectangle1108.svg" alt="">
                <p @click="openModal = true">ГЦСИ</p>
              </div>
            </div>
            <div v-if="openModal" class="contacts-maps-block-modal">
               <div class="contacts-maps-block-modal-close" @click="openModal = false">
                 <img src="../assets/image/x.svg" alt="">
               </div>
                <div class="contacts-maps-block-modal-text">
                  <p>г. Калининград, Лаврушинский переулок, 10</p>
                </div>
                <div class="contacts-maps-block-modal-text">
                  <p>Вход со стороны Малого Толмачевского пер., 9</p>
                </div>
                <div  class="contacts-maps-block-modal-date">
                  <p>xxx xxxxxx xxxx xxx x</p>
                  <p> xxx xxxxx xxxxxxx xxxxx</p>
                </div>
                <div class="contacts-maps-block-modal-phone">
                  <p>+7 (495) 957 07 27</p>
                </div>
                <div class="contacts-maps-block-modal-email">
                  <img class="mr-1" src="../assets/image/(.svg" alt="">
                  <span>tretyakov@tretyakov.ru</span>
                  <img class="ml-1" src="../assets/image/).svg" alt="">
                </div>
                <div>
                  <img src="../assets/image/pic133.jpg" alt="">
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
          <div class="contacts-faq-title">
            <p>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</p>
          </div>
          <div class="contacts-faq-content">
            <div class="contacts-faq-content-block">
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Где можно посетить выставки филиала?</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Здание филиала Третьяковской галереи строится на Октябрьском острове и до завершения строительства в 2023 году все выставки и мероприятия филиала проходят на площадках партнеров музея в Калининграде и области. Выбрать выставку можно в разделе Афиша.
                    Важно: у каждого из наших партнеров могут быть свои требования к посетителям в период пандемии, советуем ознакомиться с правилами заранее.
                  </p>
                </div>
              </div>
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Какие выставки открыты после карантина?</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Филиал открыт и работает по временным правилам, просим вас прочесть их перед визитом. Мы ежедневно проводим полную санитарную обработку музея и ждем вас на выставках. </p>
                  <p>Правила для посетителей простые: измерить температуру на входе (безопасно и бесконтактно), носить маску, соблюдать дистанцию и двигаться по указателям на полу.
                    Важно: антисептические средства мы просим оставить в камере хранения, так как при неаккуратном использовании спиртовые растворы могут нанести непоправимый вред ценным экспонатам.
                  </p>
                </div>
              </div>
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Как купить билет?</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Билеты можно приобрести в кассах музея или на сайте через форму «Купить билет» (ссылка на нужное окно). </p>
                </div>
              </div>
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Что такое «сеанс»?</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Сеанс — получасовой интервал, во время которого вы можете зайти в музей. Эта мера безопасности позволяет обеспечить равномерный поток посетителей и избежать большого скопления людей. </p>
                </div>
              </div>
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Как сдать билет?</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Подайте заявление на возврат в кассах музея не позднее, чем за сутки до оплаченного визита, в заявлении укажите счет для возврата средств (обратите внимание, не номер карты, а именно счет, который состоит из двадцати цифр). Возврат денег производится на карту, которая использовалась при оплате, в течение десяти рабочих дней. </p>
                </div>
              </div>
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Кто такие друзья Третьяковки? (пока на сайте будет скрыт)</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Это постоянные посетители музея, участники программы лояльности и меценаты, которые оказывают поддержку галерее и ее проектам. За участие друзья Третьяковки получают эксклюзивные бонусы.
                  </p>
                </div>
              </div>
              <div class="contacts-faq-content-block-item">
                <div class="contacts-faq-content-block-item-title" @click="openText = !openText">
                  <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                  <img v-else class="line" src="../assets/image/plus.svg" alt="">
                  <p>Экскурсии (пока на сайте будет скрыт)</p>
                </div>
                <div v-if="openText" class="contacts-faq-content-block-item-description">
                  <p >Вы можете купить билеты на сайте, в кассах филиала и забронировать её в экскурсионном бюро по телефону УКАЗАТЬ ТЕЛЕФОН</p>
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
            activeTab: 'map',
            openModal: false,
            openText: false
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