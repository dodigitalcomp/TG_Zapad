<template>
  <div>
    <div class="footer">
      <div class="footer-block-logo">
        <img class="footer-block-logo-image" src="../assets/image/logo_sign.svg" alt="">
        <canvas height="632" id="footer-arrow"></canvas>
      </div>
      <div class="footer-block-info">
        <div class="footer-block-info-title">
          <a href="">Афиша</a>
          <a href="">образование</a>
          <a href="">о музее</a>
          <a href="">медиа</a>
        </div>
        <div class="footer-block-info-social">
          <a href="">
            <img src="../assets/image/fb.svg" alt="">
          </a>
          <a href="">
            <img src="../assets/image/insta.svg" alt="">
          </a>
          <a href="">
            <img src="../assets/image/ok.svg" alt="">
          </a>
          <a href="">
            <img src="../assets/image/vk.svg" alt="">
          </a>
        </div>
        <div class="footer-block-info-text">
          <p>2020 © Третьяковская галерея Запад</p>
        </div>
      </div>
      <div class="footer-block-about">
        <div class="footer-block-about-title">
          <a href="">новости</a>
          <a href="">программа лояльности</a>
          <a href="">контакты</a>
        </div>
        <div class="footer-block-about-input">
          <p>Узнавайте больше об искусстве с нашей рассылкой</p>
          <label>
            <input type="text" placeholder="ваш email">
            <button class="flex items-center">
              <img class="mr-1" src="../assets/image/(w.svg" alt="">
              <span>отправить</span>
              <img class="ml-1" src="../assets/image/)w.svg" alt="">
            </button>
          </label>
        </div>
        <div class="footer-block-about-conditions">
          <div>
            <p>Условия использования материалов сайта</p>
            <p>Политика конфиденциальности</p>
          </div>
          <div>
            <p class="made flex items-center">
              <img class="mr-1" src="../assets/image/(w.svg" alt="">
              <span>Made by ONY</span>
              <img class="ml-1" src="../assets/image/)w.svg" alt="">
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-min">
      <div class="footer-block-logo img-max">
        <img src="../assets/image/logo_sign.svg" alt="">
      </div>
      <div class="footer-block-info">
        <div class="mini-block">
          <img class="img-min" src="../assets/image/logo_sign.svg"  alt="">
          <div class="footer-block-info-title">
            <a href="">Афиша</a>
            <a href="">образование</a>
            <a href="">о музее</a>
            <a href="">медиа</a>
            <a href="">новости</a>
            <a href="">программа лояльности</a>
            <a href="">контакты</a>
          </div>
        </div>
        <div class="canvas">
          <canvas id="footer-arrow-min"></canvas>
        </div>
        <div class="footer-block-about-input">
          <p>Узнавайте больше об искусстве с нашей рассылкой</p>
          <label>
            <input type="text" placeholder="ваш email">
            <button class="flex items-center">
                <img class="mr-1" src="../assets/image/(w.svg" alt="">
                <span>отправить</span>
                <img class="ml-1" src="../assets/image/)w.svg" alt="">
             </button>
          </label>
        </div>
        <div class="footer-block-info-social">
          <a href="">
            <img src="../assets/image/fb.svg" alt="">
          </a>
          <a href="">
            <img src="../assets/image/insta.svg" alt="">
          </a>
          <a href="">
            <img src="../assets/image/ok.svg" alt="">
          </a>
          <a href="">
            <img src="../assets/image/vk.svg" alt="">
          </a>
        </div>
        <div class="footer-block-info-text">
          <p class="info-text-max">2020 © Третьяковская галерея Запад</p>
          <div class="conditions-mini">
            <p>Правила использования</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
        <div class="footer-block-about">
          <div class="footer-block-about-conditions">
            <div class="conditions-max">
              <p>Условия использования материалов сайта</p>
              <p>Политика конфиденциальности</p>
            </div>
            <p class="info-text-mini">2020 © Третьяковская галерея Запад</p>
            <div>
              <p class="made flex items-center">
                <img class="mr-1" src="../assets/image/(w.svg" alt="">
                <span>Made by ONY</span>
                <img class="ml-1" src="../assets/image/)w.svg" alt="">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
      mounted() {
          let canvas = document.getElementById('footer-arrow');
          if (canvas.getContext){
              let ctx = canvas.getContext('2d');
              ctx.beginPath();
              ctx.strokeStyle = '#FFFFFF';
              ctx.moveTo(canvas.width + 1 ,0);
              ctx.lineTo(1, canvas.height /2);
              ctx.lineTo(canvas.height / 2, canvas.height);
              ctx.closePath();
              ctx.stroke();
          }
          let canvasMin = document.getElementById('footer-arrow-min');
          if (canvasMin.getContext){
              let ctx = canvasMin.getContext('2d');
              ctx.beginPath();
              ctx.strokeStyle = '#FFFFFF';
              ctx.moveTo(canvasMin.width + 1 ,10);
              ctx.lineTo(1, canvasMin.height /2);
              ctx.lineTo(canvasMin.height * 3, canvasMin.height);
              ctx.closePath();
              ctx.stroke();
          }
      }
  }
</script>

<style scoped lang="scss">


  .info-text-mini {
    display: none;

    @media (max-width: 500px) {
      display: block;
      font-size: 13px;
      line-height: 20px;
    }
  }

  .info-text-max {
    display: block;

    @media (max-width: 500px) {
      display: none;
    }
  }

  .conditions-mini {
    display: none;

    @media (max-width: 500px) {
      display: block;
    }
  }

  .conditions-max {
    display: block;

    @media (max-width: 500px) {
      display: none;
    }
  }

  .mini-block {
    @media (max-width: 500px) {
      display: flex;
      align-items: flex-start;
    }
  }

  .img-min {
    display: none;
    
    @media (max-width: 500px) {
      display: block;
      margin-top: 3px;
    }
  }
  .img-max {
    display: block;

    @media (max-width: 500px) {
      display: none !important;
    }
  }
  .footer-min {
    padding: 40px 20px;
    display: none;
    @media (max-width: 800px) {
      display: flex;
      background: #221F1A;


      #footer-arrow-min {
        width: 100%;
        height: 200px;

      }


      .footer-block-info {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        flex: 1;
      }

      @media (max-width: 500px) {
        .footer-block-logo {
          margin-right: 0px;
          height: 200px;
          display: inline;
        }
        .footer-block-info-title {
          margin-left: 80px;
        }
      }

    }
  }

.footer {
  @media (max-width: 800px) {
    display: none !important;
  }
  background: #221F1A;
  display: flex;
  padding: 40px 20px;
  justify-content: space-between;

  #footer-arrow {
    flex: 1;
  }
  &-block {

    &-logo {
      position: relative;
      &-image {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    &-about {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
        
        @media (max-width: 800px) {
            width: 100%;
        }

      &-conditions {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #FFFFFF;

        display: flex;
        justify-content: space-between;

        @media (max-width: 800px) {
           align-items: flex-end;
        }

        @media (max-width: 500px) {
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            border-top: 1px solid white;
            padding-top: 20px;
        }

        .made {
          white-space: nowrap;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-align: right;
          text-transform: uppercase;
          color: #FFFFFF;

          .ml {
            margin-left: 5px;
          }

          .mr{
            margin-right: 5px;
          }

            @media (max-width: 500px) {
               text-align: left;
               margin-top: 15px;
               font-size: 13px;
               line-height: 20px;
            }
        }
      }

      &-input {
        color: #FFFFFF;
        p {
          margin-bottom: 20px;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;

          @media (max-width: 850px) {
            font-size: 15px;
            line-height: 20px;
          }
          @media (max-width: 650px) {
            font-size: 13px;
          }
        }

        label {
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
          border: 1px solid #FFFFFF;
          padding-left: 20px;
          padding-right: 20px;
          width: 100%;
          align-items: center;
          input{
            background-color : #221F1A;
            width: 70%;
            height: 60px;
            outline: none;

            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #FFFFFF;

            &::placeholder {
              color: #FFFFFF;
              opacity: 1;
            }

            &:-ms-input-placeholder { /* Internet Explorer 10-11 */
              color: #FFFFFF;
            }

            &::-ms-input-placeholder { /* Microsoft Edge */
              color: #FFFFFF;
            }
          }

          button {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-align: right;
            text-transform: uppercase;
            white-space: nowrap;

            @media (max-width: 650px) {
              visibility: hidden;
              position: relative;
              &::after {
                content: url("../assets/image/arrow-r.svg");
                visibility: visible;
                display: block;
                position: absolute;
                right: 0;
                top: 0;
              }
            }
          }
        }
      }

      &-title {
        display: flex;
        flex-direction: column;
        a {
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 25px;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 10px;
        }
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-title {
        display: flex;
        flex-direction: column;
        a {
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 25px;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 15px;
          
          @media (max-width: 850px) {
            font-size: 15px;
            line-height: 20px;
            margin-bottom: 20px;
          }
          @media (max-width: 650px) {
            font-size: 13px;
            line-height: 15px;
          }
        }
      }

      &-text {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #FFFFFF;
        margin-bottom: 21px;

        @media (max-width: 650px) {
          font-size: 13px;
          line-height: 20px;
        }

      }
      &-social {
        margin-top: 15px;
        display: flex;
        align-items: center;
        a {
          margin: 10px;
          margin-right: 30px;
        }
        @media (max-width: 800px) {
          margin-top: 20px;
          margin-bottom: 60px;
          a{
            margin-right: 47px;

            img {
              width: 16px;
              height: 16px;
            }
          }
        }

          @media (max-width: 500px) {
              width: 100%;
              justify-content: space-between;
          }
      }
    }
  }
}
</style>
