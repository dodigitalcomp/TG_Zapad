<template>
  <div>
    <div class="footer">
      <div class="footer-block-logo">
        <img class="footer-block-logo-image" src="../assets/image/logo_sign.svg" alt="">
        <canvas height="632" id="footer-arrow"></canvas>
      </div>
      <div class="footer-block-info">
        <div class="footer-block-info-title" v-if="menuData && menuData.footerLeft">
          <NuxtLink v-for="(item, index) in menuData.footerLeft" :key="index" :to="item.link" tag="a">{{item.name}}</NuxtLink>
        </div>
        <div>
          <div class="footer-block-info-social" v-if="menuData && menuData.iconLinks && menuData.iconLinks.social_link">
            <a :href="item.link" target="_blank" v-for="(item ,index) in menuData.iconLinks.social_link" :key="index">
              <img :src="item.img" alt="">
            </a>
          </div>
          <div class="footer-block-info-partnior" v-if="menuData && menuData.iconLinks && menuData.iconLinks.partners">
            <a :href="item.link" target="_blank" v-for="(item ,index) in menuData.iconLinks.partners" :key="index">
              <img :src="item.img" alt="">
            </a>
<!--            <a href="">-->
<!--              <img src="../assets/image/partniors/T__logo_white_RU.svg" alt="">-->
<!--            </a>-->
<!--            <a class="ml-20" href="">-->
<!--              <img src="../assets/image/partniors/T__lavrus_white.svg" alt="">-->
<!--            </a>-->
          </div>
        </div>
        <div class="footer-block-info-text" v-if="menuData && menuData.langPhrase">
          <p>{{ menuData.langPhrase.copyright }}</p>
        </div>
      </div>
      <div class="footer-block-about">
        <div class="footer-block-about-title" v-if="menuData && menuData.footerRight">
          <NuxtLink v-for="(item, index) in menuData.footerRight" :key="index" :to="item.link" tag="a">{{item.name}}</NuxtLink>
        </div>
        <div class="footer-block-about-input">
          <p>Узнавайте больше об искусстве с нашей рассылкой</p>
          <label>
            <input v-model="formData.email" type="text" placeholder="ваш email">
            <button @click="saveData" class="flex items-center">
              <img class="mr-1" src="../assets/image/(w.svg" alt="">
              <span>отправить</span>
              <img class="ml-1" src="../assets/image/)w.svg" alt="">
            </button>
          </label>
          <div class="footer-block-info-partnior partnior-item">
<!--            <a href="">-->
<!--              <img src="../assets/image/partniors/T__MT_logo_white.svg" alt="">-->
<!--            </a>-->
          </div>
        </div>
        <div class="footer-block-about-conditions">
          <div v-if="menuData && menuData.langPhrase">
            <p>{{ menuData.langPhrase.conditions }}</p>
            <p>{{ menuData.langPhrase.politica }}</p>
          </div>
          <div>
            <a target="_blank" href="https://ony.ru/" class="made flex items-center justify-end">
              <img class="mr-1" src="../assets/image/(w.svg" alt="">
              <span>Made by ONY</span>
              <img class="ml-1" src="../assets/image/)w.svg" alt="">
            </a>
            <a target="_blank" href="https://www.dodigital.ru/" class="made flex items-center justify-end mt-20">
              <img class="mr-1" src="../assets/image/(w.svg" alt="">
              <span>Made by DO DIGITAL</span>
              <img class="ml-1" src="../assets/image/)w.svg" alt="">
            </a>
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
          <div class="footer-block-info-title" v-if="menuData && menuData.footerLeft">
            <NuxtLink v-for="(item, index) in menuData.footerLeft" :key="index" :to="item.link" tag="a">{{item.name}}</NuxtLink>
          </div>
        </div>
        <div class="canvas">
          <canvas id="footer-arrow-min"></canvas>
        </div>
        <div class="footer-block-about-input">
          <p>Узнавайте больше об искусстве с нашей рассылкой</p>
          <label>
            <input v-model="formData.email" type="text" placeholder="ваш email">
            <button @click="saveData" class="flex items-center">
                <img class="mr-1" src="../assets/image/(w.svg" alt="">
                <span>отправить</span>
                <img class="ml-1" src="../assets/image/)w.svg" alt="">
             </button>
          </label>
        </div>
        <div>
          <div class="footer-block-info-social" v-if="menuData && menuData.iconLinks && menuData.iconLinks.social_link">
            <a :href="item.link" target="_blank" v-for="(item ,index) in menuData.iconLinks.social_link" :key="index">
              <img :src="item.img" alt="">
            </a>
          </div>
          <div class="footer-block-info-partnior" v-if="menuData && menuData.iconLinks && menuData.iconLinks.partners">
            <a :href="item.link" target="_blank" v-for="(item ,index) in menuData.iconLinks.partners" :key="index">
              <img :src="item.img" alt="">
            </a>
          </div>
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
              <a target="_blank" href="https://ony.ru/" class="made flex items-center">
                <img class="mr-1" src="../assets/image/(w.svg" alt="">
                <span>Made by ONY</span>
                <img class="ml-1" src="../assets/image/)w.svg" alt="">
              </a>
              <a target="_blank" href="https://www.dodigital.ru/" class="made flex items-center">
                <img class="mr-1" src="../assets/image/(w.svg" alt="">
                <span>Made by DO DIGITAL</span>
                <img class="ml-1" src="../assets/image/)w.svg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import swal from 'sweetalert2';
  export default {
    name: "Footer",
      data () {
        return {
          formData: {
            email: '',
            name: 'email',
            subject: 'Подписаться',
          }
        }
      },
      methods: {
        ...mapActions({
          saveForm: 'contacts/saveForm',
        }),
        saveData() {
          if (this.formData.email) {
            this.saveForm(this.formData).then(() => {
              this.formData.email = ''
              swal.fire(
              'Ваше сообщение отправлено!',
              'Ответы на ваши вопросв придут на указанный e-mail',
              'success'
              )
            }).catch(() => {
              swal.fire(
              'Ваше сообщение не отправлено',
              'Произошла ошибка попробовать еще',
              'error'
              )
            })
          }  else  {
            swal.fire(
            'Эл. адрес',
            'обязательно',
            'error'
            )
          }

        },
      },
      computed: {
        ...mapState({
          menuData: (state) => state.language.menuData
        })
      },
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


  .dodigital {
    margin-top: 20px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    text-align: right;
    text-transform: uppercase;
  }

  .mt-20 {
    margin-top: 10px;
  }

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

  .partnior-item {
    margin-top: 90px !important;
    margin-left: 60px;
    img {
      height: 70px !important;
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
    width: 100%;
  }
  &-block {

    &-logo {
      position: relative;
      padding-right: 20px;
      width: 25%;
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
        margin-top: 20px;
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
      width: 25%;

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
      &-partnior {
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .ml-20 {
          margin-left: 23%;

          @media (max-width: 1500px) {
            margin-left: 18%;
          }
        }

        a {
          img {
            width: 100%;
            min-width: 98px;
            /*height: 50px;*/
          }
        }
        @media (max-width: 800px) {
          margin-top: 60px;
          margin-bottom: 60px;
          width: 100%;
          justify-content: space-between;
        }
      }

      &-social {
        /*margin-bottom: 50px;*/
        /*margin-top: 80px;*/
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
              justify-content: flex-start;
          }
      }
    }
  }
}
</style>
