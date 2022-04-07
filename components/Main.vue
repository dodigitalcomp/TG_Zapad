<template>
    <div class="main pt-30">
      <div class="image-bock flex items-center justify-center flex-col ">
        <div class="image-bock-img">
          <img src="../assets/image/pic.jpg" alt="">
        </div>
        <div class="image-bock-title">
          <p class="title">Культурное городское пространство</p>
          <p class="title">Третьяковская галерея – Запад</p>
          <p class="title william">Россия и Европа. Искусство и общение. Творчество и развитие.</p>
        </div>
      </div>
      <div class="museum-block">
        <div class="museum-block-title">
          <p>о музее</p>
        </div>
        <div class="museum-block-content">
          <div class="museum-block-content-text">
            <div></div>
            <div class="description">
              <p>Филиал Государственной Третьяковской галереи —  новый центр притяжения в Калининграде. Это крупнейшая музейная площадка на западе России и комфортное городское пространство. Приходите на выставки и лекции, встречайтесь с друзьями и с искусством.</p>
            </div>
            <div class="more">
              <p class="flex pb-4"><img class="mr-1" src="../assets/image/(.svg" alt=""><span>подробнее</span><img class="ml-1" src="../assets/image/).svg" alt=""></p>
            </div>
          </div>
          <div class="museum-block-content-img">
            <div></div>
            <div>
              <Galleria/>
            </div>
            <div class="flex items-center justify-between w-full pb-3">
              <p class="pagination-max">
                <span class="page active">1</span>
                <span class="page">2</span>
                <span class="page">3</span>
              </p>
              <p class="pagination-min">
                <span class="page active">1</span>
                <span class="page">/</span>
                <span class="page">3</span>
              </p>
              <img class="icon" src="../assets/image/Ellipse.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="poster-room">
         <div class="poster-room-header line-block">
           <p class="poster-room-header-title">афиша событий</p>
           <div class="line-dn"></div>
           <p class="poster-room-header-more"><img class="mr-1" src="../assets/image/(.svg" alt=""><span>все события</span><img class="ml-1" src="../assets/image/).svg" alt=""></p>
         </div>
         <div class="poster-room-content">
           <div class="poster-room-content-block pr-5 poster-room-content-border-right min-block">
             <div class="poster-room-content-block-title">
               <div class="poster-room-content-block-title-text">
                 <p>1–21 ДЕК</p>
                 <p>Кинопоказ</p>
               </div>
               <div class="poster-room-content-block-title-authnr flex">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>Кинотеатр «Киносфера»</p>
                 <p>Калининград</p>
               </div>
             </div>
             <div class="poster-room-content-block-body">
               <div class="poster-room-content-block-img">
                 <img src="../assets/image/image24.jpg" alt="">
               </div>
               <div class="poster-room-content-block-title-authnrMini">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>Кинотеатр «Киносфера» </p>
                 <p>Калининград</p>
               </div>
               <div class="poster-room-content-block-description">
                 <p>Замки <span class="william">ЛуАры</span></p>
               </div>
             </div>
           </div>
           <div class="poster-room-content-block pl-5">
             <div class="poster-room-content-block-title">
               <div class="poster-room-content-block-title-text">
                 <p>14–28 ДЕК</p>
                 <p>Лекции</p>
               </div>
               <div class="poster-room-content-block-title-authnr flex">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>Инженерный корпус</p>
               </div>
             </div>
             <div class="poster-room-content-block-body">
               <div class="poster-room-content-block-img">
                 <img src="../assets/image/image31.jpg" alt="">
               </div>
               <div class="poster-room-content-block-description">
                 <p>Мифы и легенды в произведениях <span class="william">русских художников</span></p>
               </div>
               <div class="poster-room-content-block-title-authnrMini">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>Инженерный корпус</p>
               </div>
             </div>
           </div>
         </div>
         <div class="poster-room-content">
           <div class="poster-room-content-block pr-5 poster-room-content-border-right min-block">
             <div class="poster-room-content-block-title">
               <div class="poster-room-content-block-title-text">
                 <p>1 ДЕК 2020–14 ЯНВ 2021 </p>
                 <p>выставка</p>
               </div>
               <div class="poster-room-content-block-title-authnr flex">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>галерея A1–one каунас</p>
               </div>
             </div>
             <div class="poster-room-content-block-body">
               <div class="poster-room-content-block-img">
                 <img src="../assets/image/Pic-fit.jpg" alt="">
               </div>
               <div class="poster-room-content-block-description">
                 <p>Вильямс П.В. <span class="william">история одной работы</span></p>
               </div>
               <div class="poster-room-content-block-title-authnrMini">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>галерея A1–one каунас</p>
               </div>
             </div>
           </div>
           <div class="poster-room-content-block pr-5 pl-5 poster-room-content-border-right">
             <div class="poster-room-content-block-title">
               <div class="poster-room-content-block-title-text">
                 <p>1–31 ЯНВ 2021</p>
                 <p>Лекции</p>
               </div>
               <div class="poster-room-content-block-title-authnr flex">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>Инженерный корпус</p>
               </div>
             </div>
             <div class="poster-room-content-block-body">
               <div class="poster-room-content-block-img">
                 <img src="../assets/image/image30.jpg" alt="">
               </div>
               <div class="poster-room-content-block-description">
                 <p>«Маленький человек» Кабакова<span class="william"> и русская живопись XIX века</span></p>
               </div>
               <div class="poster-room-content-block-title-authnrMini">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>Инженерный корпус</p>
               </div>
             </div>
           </div>
           <div class="poster-room-content-block pr-5 pl-5">
             <div class="poster-room-content-block-title">
               <div class="poster-room-content-block-title-text">
                 <p>1 ЯНВ–31 ФЕВ 2021 </p>
                 <p>выставка</p>
               </div>
               <div class="poster-room-content-block-title-authnr flex">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>Музей Янтаря, Калининград</p>
               </div>
             </div>
             <div class="poster-room-content-block-body">
               <div class="poster-room-content-block-img">
                 <img src="../assets/image/Pic-fit1.jpg" alt="">
               </div>
               <div class="poster-room-content-block-description">
                 <p>фотография во времена <span class="william">самоизоляции</span></p>
               </div>
               <div class="poster-room-content-block-title-authnrMini">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>Музей Янтаря, Калининград</p>
               </div>
             </div>
           </div>
           <div class="all-events">
             <p class="flex ">
               <img class="mr-1" src="../assets/image/(.svg" alt="">
               <span>все события</span>
               <img class="ml-1" src="../assets/image/).svg" alt="">
             </p>
           </div>
         </div>
      </div>
      <div class="virtual-tour">
        <div class="virtual-tour-title">
          <p>виртуальный тур по музею</p>
        </div>
        <div class="virtual-tour-content">
          <div class="img">
            <p class="flex elem">
              <img class="mr-1" src="../assets/image/(w.svg" alt="">
              <span>прогуляться</span>
              <img class="ml-1" src="../assets/image/)w.svg" alt="">
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div class="education">
         <div class="education-title">
           <p>ОБУЧЕНИЕ</p>
         </div>
         <div class="education-content">
           <div>
             <p>Приходите учиться!</p>
             <p>Подготовка кураторов и арт-менеджеров — часть нашей миссии по культурному развитию региона. Программа подходит для новичков и для тех, кто хочет вырасти в профессии. <span>Дадим сильную теорию</span> отработаем ее на практике в лучших музеях страны и глубоко погрузимся в специфику работы в сфере искусства.</p>
           </div>
           <img src="../assets/image/Rectangle976.jpg" alt="">
         </div>
         <div class="education-footer">
           <div>
             <p class="flex "><img class="mr-1" src="../assets/image/(.svg" alt=""><span>о программе</span><img class="ml-1" src="../assets/image/).svg" alt=""></p>
           </div>
           <div class="education-footer-border">
             <p class="flex "><img class="mr-1" src="../assets/image/(.svg" alt=""><span>расписание</span><img class="ml-1" src="../assets/image/).svg" alt=""></p>
           </div>
           <div>
             <p class="flex "><img class="mr-1" src="../assets/image/(.svg" alt=""><span>материалы</span><img class="ml-1" src="../assets/image/).svg" alt=""></p>
           </div>
         </div>
      </div>
      <div class="news">
        <div class="poster-room-header line-block">
          <p class="poster-room-header-title">Новости</p>
          <div class="line-dn"></div>
          <p class="poster-room-header-more"><img class="mr-1" src="../assets/image/(.svg" alt=""><span>все новости</span><img class="ml-1" src="../assets/image/).svg" alt=""></p>
        </div>
        <div class="news-content">
          <span class="left">
            <img src="../assets/image/left.svg" alt="">
          </span>
          <span class="right">
            <img src="../assets/image/Vector-r.svg" alt="">
          </span>
          <div class="news-content-swiper news-content-swiper-border-r pr-5">
            <div class="news-content-swiper-title">
              <p>17 окт</p>
              <p>музей</p>
            </div>
            <div  class="news-content-swiper-content">
              <img src="../assets/image/Pic-fit3.jpg" alt="">
            </div>
            <div class="title">
              <p>ДОМ-МУЗЕЙ ВИКТОРА ВАСНЕЦОВА</p>
            </div>
            <div class="text">
              <p>Это многообразие связано и с особенностями каждой отдельной исторической эпохи, и с процессами.</p>
            </div>
          </div>
          <div class="news-content-swiper pl-5">
            <div class="news-content-swiper-title">
              <p>17 окт</p>
              <p>ход строительства</p>
            </div>
            <div class="news-content-swiper-content">
              <img src="../assets/image/image-museum.jpg" alt="">
            </div>
            <div class="title">
              <p>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p>
            </div>
            <div class="text">
              <p>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p>
            </div>
          </div>
        </div>
        <div class="all-events">
          <p class="flex "><img class="mr-1" src="../assets/image/(.svg" alt=""><span>все новости</span><img class="ml-1" src="../assets/image/).svg" alt=""></p>
        </div>
      </div>
    </div>
</template>

<script>
  import Galleria from "./Galleria";

  export default {
        name: "Main",
      components: {Galleria},
      // mounted() {
      //   let canvas = document.getElementById('virtual-tour-play');
      //   if (canvas.getContext){
      //     let ctx = canvas.getContext('2d');
      //     ctx.beginPath();
      //     ctx.fillStyle = "#FFFFFF";
      //     ctx.strokeStyle = '#FFFFFF';
      //     ctx.moveTo(canvas.width, canvas.hidden);
      //     ctx.lineTo(canvas.width, 150);
      //     ctx.lineTo(0,80);
      //     ctx.fillText("( ПРОГУЛЯТЬСЯ )",150,140);
      //     ctx.closePath();
      //     ctx.stroke();
      //   }
      // }
    }
</script>

<style scoped lang="scss">

  #virtual-tour-play {
    width: 336px;
    height: 405px;
  }
  .all-events {
    display: none;

    @media (max-width: 650px) {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      margin-top: 20px;

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 20px;
        /* identical to box height, or 154% */

        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;

        /* Black brown */

        color: #221F1A;
      }
    }
  }
  .pt-30 {
    padding-top: 110px;
  }
  .min-block {
    @media (max-width: 800px) {
      display: none !important;
    }
  }
  .image-bock-img{
    max-width: 80%;
    margin-bottom: 40px;
  }
.image-bock-title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    color: #221F1A;
    max-width: 80%;

    @media (max-width: 1000px) {
      font-size: 40px;
      line-height: 40px;
    }
    @media (max-width: 650px) {
      font-size: 30px;
      line-height: 32px;
    }
  }

  .title-p {
    max-width: 565px;;
    font-style: italic;
    font-weight: normal;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    color: #221F1A;

    @media (max-width: 1000px) {
      font-size: 40px;
      line-height: 40px;
    }
    @media (max-width: 650px) {
      font-size: 30px;
      line-height: 32px;
    }
  }
}
.museum-block {
  padding: 20px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-title {
    width: 100%;
    border-bottom: 1px solid;
    padding-bottom: 20px;
    p{
      text-align: left;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 40px;
      text-transform: uppercase;
      color: #221F1A;

      @media (max-width: 1000px) {
        font-size: 30px;
        line-height: 30px;
      }
      @media (max-width: 650px) {
        font-size: 25px;
        line-height: 25px;
      }
    }
  }
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @media (max-width: 650px) {
      flex-direction: column;
    }

    &-text {
      height: 560px;
      border-right: 1px solid;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;

      @media (max-width: 850px) {
        height: 407px;
      }

      @media (max-width: 650px) {
        border: none;
        border-bottom: 1px solid;
        padding-bottom: 20px;
        margin-bottom: 20px;
      }

      .description {
        p{
          max-width: 471px;
          font-style: normal;
          font-weight: normal;
          font-size: 28px;
          line-height: 35px;
          color: #221F1A;
          margin-bottom: 20px;

          @media (max-width: 1000px) {
            font-size: 18px;
            line-height: 26px;
          }
        }
      }
      .more{
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          /* identical to box height, or 133% */

          text-align: right;
          text-transform: uppercase;

          /* Black brown */

          color: #221F1A;
        }

        @media (max-width: 650px) {
          justify-content: flex-start;
        }
      }
    }
    &-img {
      height: 560px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex: 1;

      @media (max-width: 850px) {
        height: 407px;
      }

      .page{
        font-size: 15px;
        line-height: 20px;
        text-align: right;
        text-transform: uppercase;
        color: #BDBDBD;
        margin: 5px;
        cursor: pointer;

      }
      @media (max-width: 650px) {
        .pagination-min {
          margin-top: 60px;
          margin-left: 134px;
        }
        .icon{
          margin-top: 60px;
        }
      }

      .pagination-min {
        display: none;
        margin-left: 53px;
        @media (max-width: 850px) {
          display: flex;
        }

        @media (max-width: 650px) {
          margin-left: 44%;
        }
      }

      .pagination-max {
        display: flex;
        margin-left: 120px;
        @media (max-width: 850px) {
          display: none;
        }
      }


      .active {
        color: #221F1A;
      }
    }
  }
}
.poster-room {
    background: #FFDD7C;
    padding: 20px;

    &-header {
      display: flex;
      flex-direction: column;


      @media (max-width: 650px) {
        padding-bottom: 20px;
        border-bottom: 1px solid;
      }

      &-title{
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        text-transform: uppercase;
        color: #221F1A;
        margin-bottom: 85px;

        @media (max-width: 1000px) {
          font-size: 30px;
          line-height: 30px;
        }
        @media (max-width: 650px) {
          font-size: 25px;
          line-height: 25px;
        }



      }
      &-more{
        display: flex;
        justify-content: flex-end;
        margin-top: 85px;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        text-align: right;
        text-transform: uppercase;
        color: #221F1A;
      }
    }

    &-content {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid;
      display: flex;
      justify-content: space-between;

      @media (max-width: 650px) {
        margin-top: 0;
        border: none;
        flex-direction: column;
      }

      &-border-right {
        border-right: 1px solid #000000;
      }

      &-block:nth-child(2){
        @media (max-width: 850px) {
          padding-left: 0 !important;
        }
      }

      &-block:nth-child(3){
        @media (max-width: 850px) {
          padding-right: 0 !important;
        }
        @media (max-width: 650px) {
          padding-top: 20px;
        }
      }

      &-block {
        display: flex;
        flex-direction: column;
        flex: 1;

        @media (max-width: 800px) {
          justify-content: space-between;
        }

        @media (max-width: 650px) {
          border: none;
          border-bottom: 1px solid;
          padding-left: 0;
          padding-right: 0;
        }

        &-title {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 88px;

          &-authnrMini {
            display: none;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;

            img {
              width: 7px;
              margin-bottom: 9px;
            }

            @media (max-width: 800px) {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 40px;
            }
          }

          &-authnr {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;

            img {
              width: 7px;
              margin-left: 10px;
            }

            @media (max-width: 800px) {
              display: none;
            }
          }


          &-text {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;

            @media (max-width: 800px) {
              display: flex;
              justify-content: space-between;
              width: 100%;
            }

          }
        }

        &-body {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;


        }

        &-description {
          margin-top: 40px;
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 32px;
          text-align: center;
          text-transform: uppercase;
          color: #221F1A;
          max-width: 500px;
          margin-bottom: 60px;

          span {
            font-style: italic;
          }
        }

      }
    }
  }
.virtual-tour {
  background-image: url("../assets/image/bg.jpg");
  height: 700px;
  padding-top: 40px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-title {
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 40px;
      text-transform: uppercase;
      color: #FFFFFF;
      max-width: 365px;

      @media (max-width: 1000px) {
        font-size: 30px;
        line-height: 30px;
      }
      @media (max-width: 650px) {
        font-size: 25px;
        line-height: 25px;
      }
    }
  }

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      height: 405px;
      width: 336px;
      background-image: url("../assets/image/Untitled-removebg-preview.png");
      background-repeat: no-repeat;
      background-size: 510px 405px;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 950px) {
        height: 274px;
        width: 219px;
        background-size: 332px 274px;
      }

      .elem {
        margin-left: 30px;
        span {
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          /* identical to box height, or 133% */

          text-align: right;
          text-transform: uppercase;

          /* White */

          color: #FFFFFF;
        }
      }
    }
  }
}
.education {
  background: #FFDD7C;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;

  @media (max-width: 850px) {
    padding: 30px 20px;
  }

  &-title {
    p{
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 40px;
      text-transform: uppercase;
      color: #221F1A;

      @media (max-width: 1000px) {
        font-size: 30px;
        line-height: 30px;
      }
      @media (max-width: 650px) {
        font-size: 25px;
        line-height: 25px;
      }
    }
  }

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 85px;

    @media (max-width: 850px) {
      margin-top: 71px;
    }

    @media (max-width: 650px) {
      flex-direction: column-reverse;
    }

    p{
      max-width: 530px;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      color: #211F1A;

      @media (max-width: 800px) {
        font-size: 15px;
        line-height: 20px;
      }

      @media (max-width: 650px) {
        font-size: 18px;
        line-height: 26px;
      }

      span {
        color: red;
      }
    }
    img {
      width: 529px;
      height: 384px;
      margin-right: 100px;

      @media (max-width: 800px) {
        width: 294px;
        height: 213px;
        margin: 20px;
      }

      @media (max-width: 650px) {
        width: 335px;
        height: 244px;
      }
    }
  }
  &-footer {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid;
    align-items: center;
    padding-top: 20px;

    @media (max-width: 600px) {
      flex-wrap: wrap;
    }

    div:nth-child(2) {
      @media (max-width: 600px) {
        border-right: 0;
      }
    }

    div:nth-child(3) {
      @media (max-width: 600px) {
        width: 100%;
        margin-top: 20px;
        border-top: 1px solid;
      }
    }

    div {
      height: 110px;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 850px) {
        height: 70px;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        /* identical to box height, or 133% */

        text-align: right;
        text-transform: uppercase;

        /* Black brown */

        color: #221F1A;
      }

      @media (max-width: 600px) {
        width: 50%;
        flex: none;
      }
    }
    &-border {
      border-left: 1px solid;
      border-right: 1px solid;
    }
  }
}
.news {
  padding: 40px 20px;
  &-content {
    margin-top: 20px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    display: flex;
    justify-content: space-around;
    margin-bottom: 150px;
    position: relative;

    @media (max-width: 650px) {
      border-bottom: none;
      border-top: none;
      margin-bottom: 20px;
      flex-direction: column;
    }

    .left {
      display: block;
      font-size: 50px;
      position: absolute;
      top: 200px;
      left: 0;
      cursor: pointer;
      @media (max-width: 650px) {
        display: none !important;
      }
    }
    .right{
      display: block;
      font-size: 50px;
      position: absolute;
      top: 200px;
      right: 0;
      cursor: pointer;
      @media (max-width: 650px) {
        display: none !important;
      }
    }

    .news-content-swiper-border-r {
      border-right: 1px solid;
      @media (max-width: 650px) {
        border-right: none;
        }
    }

    &-swiper {
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 1;

      @media (max-width: 650px) {
        margin-top: 0;
        border-top: none;
        border-bottom: 1px solid;
        padding-left: 0;
        padding-right: 0;
      }

      &-title{
        display: flex;
        justify-content: space-between;

        p {
          font-style: normal;
          font-weight: normal;
          font-size: 13px;
          line-height: 15px;
          /* identical to box height, or 115% */

          text-align: right;
          text-transform: uppercase;

          /* Black brown */

          color: #221F1A;
        }
      }
      .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 32px;
        text-align: center;
        text-transform: uppercase;
        color: #221F1A;
        flex: 1;

        @media (max-width: 1000px) {
          font-size: 22px;
          line-height: 25px;
        }

        p {
          max-width: 340px;
        }
      }

      .text {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        color: #221F1A;
        flex: 1;
        margin-bottom: 70px;
        p {
          max-width: 340px;
        }
      }
      &-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        flex: 1;
        img {
          max-width: 250px;
        }
      }
    }
  }
}

</style>
