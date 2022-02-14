<template>
    <div class="main pt-30">
      <div class="image-bock flex items-center justify-center flex-col ">
        <div class="image-bock-img">
          <img src="../assets/image/pic.jpg" alt="">
        </div>
        <div class="image-bock-title">
          <p class="title">новое культурное</p>
          <p class="title-p">пространство для горожан</p>
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
              <p>Новый музейный комплекс—филиал Третьяковской галереи. Первый художественный музей такого масштаба в Калининградской области. </p>
            </div>
            <div class="more">
              <p>(подробнее)</p>
            </div>
          </div>
          <div class="museum-block-content-img">
            <div></div>
            <div>
              <Swiper/>
            </div>
            <div class="flex items-center justify-between w-full">
              <p class="flex ml-20 pagination">
                <span class="page active">1</span>
                <span class="page">2</span>
                <span class="page">3</span>
              </p>
              <img class="icon" src="../assets/image/Ellipse.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="poster-room">
         <div class="poster-room-header">
           <p class="poster-room-header-title">афиша событий</p>
           <hr class="line-dn">
           <p class="poster-room-header-more">(все события)</p>
         </div>
         <div class="poster-room-content">
           <div class="poster-room-content-block pr-5 poster-room-content-border-right min-block">
             <div class="poster-room-content-block-title">
               <div class="poster-room-content-block-title-text">
                 <p>1–21 ДЕК</p>
                 <p>Кинопоказ</p>
               </div>
               <div class="poster-room-content-block-title-authnr">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>Кинотеатр «Киносфера»
                   Калининград</p>
               </div>
             </div>
             <div class="poster-room-content-block-body">
               <div class="poster-room-content-block-img">
                 <img src="../assets/image/image24.jpg" alt="">
               </div>
               <div class="poster-room-content-block-title-authnrMini">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>Кинотеатр «Киносфера»
                   Калининград</p>
               </div>
               <div class="poster-room-content-block-description">
                 <p>Замки <span>ЛуАры</span></p>
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
                 <p>Мифы и легенды в произведениях <span>русских художников</span></p>
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
                 <p>Вильямс П.В. <span>история одной работы</span></p>
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
                 <p>«Маленький человек» Кабакова<span> и русская живопись XIX века</span></p>
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
                 <p>фотография во времена <span>самоизоляции</span></p>
               </div>
               <div class="poster-room-content-block-title-authnrMini">
                 <img class="mr-2" src="../assets/image/pin1.svg" alt="">
                 <p>Музей Янтаря, Калининград</p>
               </div>
             </div>
           </div>
           <div class="all-events">
             <p>(все события)</p>
           </div>
         </div>
      </div>
      <div class="virtual-tour">
        <div class="virtual-tour-title">
          <p>виртуальный тур по музею</p>
        </div>
        <div class="virtual-tour-content">
          <canvas height="300" id="virtual-tour-play"></canvas>
        </div>
        <div></div>
      </div>
      <div class="education">
         <div class="education-title">
           <p>Обучение</p>
         </div>
         <div class="education-content">
           <p>Мы готовим специалистов в области искусства и музейного дела для работы в качестве кураторов и арт-менеджеров. Выпускники программы будут свободно ориентироваться в мире актуального искусства и современных музейных практик, обладать широкой теоретической подготовкой в сфере искусства и музейной деятельности.</p>
           <img src="../assets/image/Rectangle976.jpg" alt="">
         </div>
         <div class="education-footer">
           <div>
             <p>(о программе)</p>
           </div>
           <div class="education-footer-border">
             <p>(расписание)</p>
           </div>
           <div>
             <p>(материалы)</p>
           </div>
         </div>
      </div>
      <div class="news">
        <div class="poster-room-header">
          <p class="poster-room-header-title">Новости</p>
          <hr class="line-dn">
          <p class="poster-room-header-more">(все новости)</p>
        </div>
        <div class="news-content">
          <span class="left">&#10094;</span>
          <span class="right">&#10095;</span>
          <div class="news-content-swiper news-content-swiper-border-r">
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
          <div class="news-content-swiper">
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
          <p>(все события)</p>
        </div>
      </div>
    </div>
</template>

<script>
    import Swiper from "./Swiper";
    export default {
        name: "Main",
      components: {Swiper},
      mounted() {
        let canvas = document.getElementById('virtual-tour-play');
        if (canvas.getContext){
          let ctx = canvas.getContext('2d');
          ctx.beginPath();
          ctx.fillStyle = "#FFFFFF";
          ctx.strokeStyle = '#FFFFFF';
          ctx.moveTo(270,270);
          ctx.lineTo(270,10);
          ctx.lineTo(40,135);
          ctx.fillText("( прогуляться )",150,140);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }
</script>

<style scoped lang="scss">
  .all-events {
    display: none;

    @media (max-width: 650px) {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;

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
    max-width: 70%;
    margin-bottom: 40px;
  }
.image-bock-title {
  margin-top: 30px;
  .title {
    font-style: normal;
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
    @media (max-width: 500px) {
      font-size: 30px;
      line-height: 32px;
    }
  }
  .title-p {
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
    @media (max-width: 500px) {
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
      @media (max-width: 500px) {
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

        @media (max-width: 500px) {
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

      .page{
        font-size: 15px;
        line-height: 20px;
        text-align: right;
        text-transform: uppercase;
        color: #BDBDBD;
        margin: 5px;
        cursor: pointer;

      }
      @media (max-width: 500px) {
        .pagination {
          margin-top: 60px;
          margin-left: 134px;
        }
        .icon{
          margin-top: 60px;
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


      @media (max-width: 500px) {
        padding-bottom: 20px;
        border-bottom: 1px solid;
      }

      .line-dn {
        border-top: 1px solid #000000;
        transform: rotate(-8deg);

        @media (max-width: 1000px) {
          transform: rotate(-15deg);
        }

        @media (max-width: 500px) {
          transform: rotate(-20deg);
        }

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
        @media (max-width: 500px) {
          font-size: 25px;
          line-height: 25px;
        }



      }
      &-more{
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
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid;
      display: flex;
      justify-content: space-between;

      @media (max-width: 500px) {
        border: none;
        flex-direction: column;
      }

      &-border-right {
        border-right: 1px solid #000000;
      }

      &-block {
        display: flex;
        flex-direction: column;
        flex: 1;

        @media (max-width: 800px) {
          justify-content: space-between;
        }

        @media (max-width: 500px) {
          border: none;
          border-bottom: 1px solid;
          margin-bottom: 40px;
        }

        &-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
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
      @media (max-width: 500px) {
        font-size: 25px;
        line-height: 25px;
      }
    }
  }

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.education {
  background: #FFDD7C;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;

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

    @media (max-width: 650px) {
      flex-direction: column-reverse;
    }

    p{
      max-width: 530px;
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
      height: 100px;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

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
    margin-top: 40px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    display: flex;
    justify-content: space-around;
    margin-bottom: 150px;
    position: relative;

    @media (max-width: 500px) {
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
      left: 20px;
      cursor: pointer;
      @media (max-width: 500px) {
        display: none !important;
      }
    }
    .right{
      display: block;
      font-size: 50px;
      position: absolute;
      top: 200px;
      right: 20px;
      cursor: pointer;
      @media (max-width: 500px) {
        display: none !important;
      }
    }

    .news-content-swiper-border-r {
      border-right: 1px solid;
      @media (max-width: 500px) {
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
      padding-left: 20px;
      padding-right: 20px;

      @media (max-width: 500px) {
        border-top: none;
        border-bottom: 1px solid;
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
