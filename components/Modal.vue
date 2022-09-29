<template>
  <div class="modal" @click="close">
    <div v-if="!susses" class="modal-block" @click.stop="">
      <div class="modal-block-header">
        <p class="modal-block-header-text">ОБРАТНАЯ СВЯЗЬ</p>
        <p class="modal-block-header-close" @click="close"><img src="../assets/image/close.svg"></p>
      </div>
      <div class="modal-block-body">
        <div class="row">
          <label>
            <p class="j-required">имя <sapn class="j-required-icon">*</sapn></p>
            <input type="text" @input="isRequired = false" :style="isRequired ? 'border-color: red' : ''" v-model="formData.name">
          </label>
          <label>
            <p>предмет</p>
            <input type="text" v-model="formData.subject">
          </label>
        </div>
        <div class="row">
          <label>
            <p>Телефон</p>
            <input type="text" v-model="formData.phone">
          </label>
          <label>
            <p>Эл. адрес</p>
            <input type="text" v-model="formData.email">
          </label>
        </div>
        <div class="message">
          <p>сообщение</p>
          <textarea v-model="formData.message"></textarea>
        </div>
      </div>
      <div class="modal-block-footer">
        <button @click="save">
          <img class="mr-1" src="../assets/image/(.svg" alt="">
          <span>Отправит</span>
          <img class="ml-1" src="../assets/image/).svg" alt="">
        </button>
      </div>
    </div>
    <div v-else class="modal-block" @click.stop="">
      <div class="modal-block-header">
        <p class="modal-block-header-text"></p>
        <p class="modal-block-header-close" @click="close"><img src="../assets/image/close.svg"></p>
      </div>
      <div class="modal-block-body flex-body">
        <div class="susses">
          <img src="../assets/image/sucsses.svg" alt="">
          <p class="title">Ваше сообщение отправлено!</p>
          <p class="description">Ответы на ваши вопросв придут на указанный e-mail</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "Modal",
    data () {
      return {
        isRequired: false,
        susses: false,
        formData: {
          name: '',
          subject: '',
          message: '',
          phone: '',
          email: ''
        }
      }
    },
    mounted () {
      document.body.style.overflow = 'hidden'
    },
    destroyed () {
      document.body.style.overflow = 'auto'
    },
    methods : {
      ...mapActions({
        saveForm: 'contacts/saveForm'
      }),
      close () {
        this.$nuxt.$emit('close')
      },
      save () {
        if (this.formData.name) {
          this.saveForm(this.formData).then(() => {
            this.susses = true
          })
        } else {
          this.isRequired = true
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #00000070;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;


  &-block {
    background: white;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .flex-body {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    &-body {
      padding: 20px;

      .j-required {
        position: relative;
        width: max-content;

        &-icon {
          position: absolute;
          top: -8px;
          right: -8px;
          color: red;
        }
      }

      .row {
        display: flex;
        justify-content: space-between;
      }

      .message {
        width: 100%;
        margin-top: 20px;

        textarea {
          border: 1px solid black;
          width: 100%;
          min-height: 150px;
          padding: 5px;
        }

        p {
          max-width: 639px;
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

      label {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 48%;
        p {
          max-width: 639px;
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

        input {
          border: 1px solid black;
          padding-left: 5px;
          height: 50px;
        }
      }


      .susses {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .title {
          margin-top: 20px;
          margin-bottom: 20px;
          font-family: 'Gerbera';
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 25px;
          /* or 114% */

          text-align: center;
          text-transform: uppercase;

          /* Black brown */

          color: #221F1A;
        }

        .description {
          font-family: 'Gerbera';
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          /* or 133% */

          text-align: center;

          /* Black brown */

          color: #221F1A;
        }
      }



    }

    &-header {
      margin: 20px;
      position: relative;
      border-bottom: 1px solid black;
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;

      &-close {
        cursor: pointer;
        max-width: 639px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 20px;
        text-transform: uppercase;
        color: #221F1A;
        text-align: center;
      }

      &-text {
        max-width: 639px;
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

    &-footer {
      text-align: right;
      display: flex;
      justify-content: end;

      button {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-right: 20px;
        padding: 15px 20px;
        margin-bottom: 20px;
        border: 1px solid black;
        max-width: 639px;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        text-transform: uppercase;
        color: #221F1A;
        text-align: center;

      }
    }

  }

}
</style>