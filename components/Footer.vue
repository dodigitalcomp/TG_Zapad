<template>
  <div>
    <div class="footer">
      <div class="footer-block-logo">
        <img src="../assets/image/logo_sign.svg" alt="">
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
            <button>(отправить)</button>
          </label>
        </div>
        <div class="footer-block-about-conditions">
          <div>
            <p>Условия использования материалов сайта</p>
            <p>Политика конфиденциальности</p>
          </div>
          <div>
            <p>(Made by ONY)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-min">
      <div class="footer-block-logo">
        <img src="../assets/image/logo_sign.svg" alt="">
      </div>
      <div class="footer-block-info">
        <div class="footer-block-info-title">
          <a href="">Афиша</a>
          <a href="">образование</a>
          <a href="">о музее</a>
          <a href="">медиа</a>
          <a href="">новости</a>
          <a href="">программа лояльности</a>
          <a href="">контакты</a>
        </div>
        <div class="canvas">
          <canvas id="footer-arrow-min"></canvas>
        </div>
        <div class="footer-block-about-input">
          <p>Узнавайте больше об искусстве с нашей рассылкой</p>
          <label>
            <input type="text" placeholder="ваш email">
            <button>(отправить)</button>
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
          <p>2020 © Третьяковская галерея Запад</p>
        </div>
        <div class="footer-block-about">
          <div class="footer-block-about-conditions">
            <div>
              <p>Условия использования материалов сайта</p>
              <p>Политика конфиденциальности</p>
            </div>
            <div>
              <p>(Made by ONY)</p>
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

  .footer-min {
    padding: 40px 20px;
    display: none;
    @media (max-width: 800px) {
      display: flex;
      background: #221F1A;


      .footer-block-logo {
        margin-right: 100px;
      }

      #footer-arrow-min {
        width: 90%;
        height: 200px;
      }

      .footer-block-info-social {
        margin-top: 20px;
        margin-bottom: 10px;
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

    &-about {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-conditions {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #FFFFFF;
      }

      &-input {
        color: #FFFFFF;
        p {
          margin-bottom: 20px;
        }

        label {
          display: flex;
          justify-content: space-around;
          flex-wrap: nowrap;
          border: 1px solid #FFFFFF;
          padding: 9px;
          input[type="text"], textarea {
            background-color : #221F1A;
          }
          input{
            width: 70%;
            outline: none;
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
          margin-bottom: 10px;
        }
      }

      &-text {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #FFFFFF;
      }
      &-social {
        margin-top: 144px;
        margin-bottom: 274px;
        display: flex;
        a {
          margin: 10px;
        }
      }
    }
  }
}
</style>
