<template>
  <div>
    <Header bgcolor="yellow" logoColor="black"/>
     <div class="event-page">
       <div class="event-page-header">
         <div class="event-page-header-title">
           <p>
             <img class="mr-1" src="../assets/image/(.svg" alt="">
             <img class="mr-1" src="../assets/image/Vector135.svg" alt="">
             <span>назад</span>
             <img class="ml-1" src="../assets/image/).svg" alt="">
           </p>
         </div>
         <div class="event-page-header-content">
           <div class="event-page-header-content-block">
             <div class="event-page-header-content-block-text">
               <div class="event-page-header-content-block-text-date">
                 <p>30 ноя, 19:00</p>
                 <p>лекция</p>
               </div>
             </div>
             <div class="event-page-header-content-block-imgMini">
               <img src="../assets/image/Pic-fit33.jpg" alt="">
             </div>
             <div class="event-page-header-content-block-title">
               <p>Мечты о свободе <span>Романтизм в России и германии</span></p>
             </div>
             <div class="event-page-header-content-block-description">
               <p>Для взрослых слушателей</p>
             </div>
           </div>
           <div class="event-page-header-content-img">
             <img src="../assets/image/Pic-fit33.jpg" alt="">
           </div>
         </div>
         <div class="event-page-header-footer">
           <div class="event-page-header-footer-item">
             <p>стоимость: 1500 ₽</p>
           </div>
           <div class="event-page-header-footer-item">
             <div class="event-page-header-footer-item-block">
               <img class="mr-1" src="../assets/image/(.svg" alt="">
               <span>купить билет</span>
               <img class="ml-1" src="../assets/image/).svg" alt="">
             </div>
           </div>
           <div class="event-page-header-footer-item">
             <div class="event-page-header-footer-item-block">
               <img class="mr-1" src="../assets/image/(.svg" alt="">
               <span>поделиться</span>
               <img class="ml-2" src="../assets/image/shareArrowIcon.svg" alt="">
               <img class="ml-2" src="../assets/image/).svg" alt="">
             </div>
           </div>
         </div>
       </div>
       <div class="event-page-content">
         <div class="event-page-content-buy-ticket">
           <div class="event-page-content-buy-ticket-date">
             <p>17 ноЯ — 29 дек</p>
           </div>
           <div class="event-page-content-buy-ticket-price">
             <p>стоимость: 1500 ₽ </p>
             <button class="button">
                <img class="mr-1" src="../assets/image/(.svg" alt="">
                <span>купить билет</span>
                <img class="ml-1" src="../assets/image/).svg" alt="">
             </button>
           </div>
         </div>
         <div class="event-page-content-info">
           <div class="event-page-content-info-title">
             <p>XVIII век — переход от Средневековья к Новому времени. Русское искусство проходит путь освоения западноевропейского опыта. Зарождается светская культура.</p>
           </div>
           <div class="event-page-content-info-description">
             <p>В Санкт-Петербурге основана Императорская Академия художеств.
               На русской почве неповторимое своеобразие приобретают барокко, рококо, классицизм, сентиментализм. Искусство классицизма воплотило идеалы эпохи Просвещения, стремившейся к познанию мира силами просвещенного разума и чувства. В иерархии академических жанров главная роль принадлежала исторической картине. Неоспоримы художественные достоинства портретов, созданных Фёдором Рокотовым, Дмитрием Левицким, Владимиром Боровиковским. </p>
           </div>
           <VueSwiper/>
           <div class="event-page-content-info-text">
             <p class="event-page-content-info-text-description">В Санкт-Петербурге основана Императорская Академия художеств.
               На русской почве неповторимое своеобразие приобретают барокко, рококо, классицизм, сентиментализм. Искусство классицизма воплотило идеалы эпохи Просвещения, стремившейся к познанию мира силами просвещенного разума и чувства. В иерархии академических жанров главная роль принадлежала исторической картине. Неоспоримы художественные достоинства портретов, созданных Фёдором Рокотовым, Дмитрием Левицким, Владимиром Боровиковским. </p>
           </div>
           <div class="event-page-content-info-buy-ticket">
             <div class="event-page-content-info-buy-ticket-date">
               <p>12 октября, 19 октября,26 октября, …</p>
               <p class="flex items-center mt-4">
                 <img class="mr-1" src="../assets/image/(.svg" alt="">
                 <span>все даты</span>
                 <img class="ml-1" src="../assets/image/).svg" alt="">
               </p>
             </div>
             <div class="event-page-content-info-buy-ticket-price">
               <p>стоимость: 1500 ₽ </p>
               <button class="button">
                 <img class="mr-1" src="../assets/image/(.svg" alt="">
                 <span>купить билет</span>
                 <img class="ml-1" src="../assets/image/).svg" alt="">
               </button>
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
  import VueSwiper from "../components/VueSwiper";
  export default {
    name: "eventPage",
    components: {VueSwiper, Footer, Header}
  }
</script>

<style scoped lang="scss">

  .event-page {
    &-header {
      padding: 140px 20px 30px 20px;
      background: #FFDD7C;
       &-title {
         p {
           display: flex;
           font-style: normal;
           font-weight: normal;
           font-size: 15px;
           line-height: 20px;
           text-transform: uppercase;
           color: #221F1A;
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
            order: 4;
            margin-top: 30px;
          }

          div:nth-child(4) {
            order: 3;
            margin-top: 40px;
          }

          div:nth-child(5) {
            order: 5;
            margin-top: 40px;

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
            margin-bottom: 120px;
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
              align-items: center;

              @media (max-width: 850px) {
                display: none;
              }

              img {
                margin-right: 15px;
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
            padding-bottom: 20px;
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

          @media (max-width: 650px) {
            width: 50%;
            flex: inherit;
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
        margin-right: 138px;

        @media (max-width: 850px) {
          margin-right: 62px;
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
            }
          }
        }

        &-virtual-tour {
          background-image: url("../assets/image/bg2.jpg");
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
              background-image: url("../assets/image/Untitled-removebg-preview.png");
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

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
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
        justify-content: space-between;
        flex: 1;
        height: 430px;

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
              max-width: 120px;
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

            img {
              margin-top: 5px;
              margin-right: 15px;
            }

            p {
              max-width: 120px;
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

          @media (max-width: 850px) {
            font-size: 22px;
            line-height: 25px;
          }

          p {
            max-width: 360px;

            span {
              font-style: italic;
            }
          }
        }
      }
    }


  }

</style>
