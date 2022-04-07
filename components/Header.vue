<template>
  <header class="w-full header-block" :class="openMenu ? 'bg-dark menu' : bgcolor === 'yellow' ? 'bg-yellow': 'bg-white'">
    <nav class="">
      <div class="max-w-7lg mx-auto p-5">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-between">
            <div class="flex-shrink-0 flex items-center nav-logo">
              <svg width="50" height="55" viewBox="0 0 50 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0H0V55H16V0Z" :fill="openMenu ? '#FFDD7C' : logoColor === 'black' ? '#221F1A' : '#FFDD7C' "/>
                  <path d="M32 18L50 0H32V18Z" :fill="openMenu ? '#FFDD7C' : logoColor === 'black' ? '#221F1A' : '#FFDD7C' "/>
                  <path d="M50 55L32 37V55H50Z" :fill="openMenu ? '#FFDD7C' : logoColor === 'black' ? '#221F1A' : '#FFDD7C' "/>
              </svg>
              <div class="ml-2 min-menu-text">
                <p class="nav-title-logo">Третьяковская</p>
                <p class="nav-title-logo">галерея</p>
                <p class="nav-title-logo-mini">Запад</p>
              </div>
              <div class="flex-shrink-0 flex items-center t-logo">
                <img v-if="openMenu" src="../assets/image/partniors/T__T_gold.svg" alt="">
                <img v-else-if="logoColor === 'black'" src="../assets/image/partniors/T__T_black.svg" alt="">
                <img v-else src="../assets/image/partniors/T__T_gold.svg" alt="">
              </div>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <a href="#" class="uppercase nav-title-menu whitespace-nowrap">Афиша</a>
                <a href="#" class="uppercase nav-title-menu whitespace-nowrap">образование</a>
                <a href="#" class="uppercase nav-title-menu whitespace-nowrap">о музее</a>
                <a href="#" class="uppercase nav-title-menu whitespace-nowrap">новости</a>
                <a href="#" class="uppercase nav-title-menu whitespace-nowrap">контакты</a>
              </div>
            </div>
            <div class="inset-y-0 right-0 flex items-center pr-2sm:ml-6 sm:pr-0">
              <div class="ml-3" v-if="!openMenu">
                <a class="flex cursor-pointer mr-5">
                  <img class="" src="../assets/image/search.svg" alt="">
                </a>
              </div>
              <div class="ml-3 hidden">
                <div>
                  <a href="#" class="nav-title">медиа</a>
                </div>
              </div>
              <div class="ml-3 relative flex nav-title hidden">
                <img class="mr-1" src="../assets/image/(.svg" alt="">
                <div>
                  <a href="#">EN</a>
                </div>
                <img class="ml-1" src="../assets/image/).svg" alt="">
              </div>
            </div>
          </div>
          <div class="flex items-center min ml-2">
            <button type="button" class="nav-button" @click="showMenu">
              <img v-if="!openMenu" src="../assets/image/burger.svg" alt="">
              <img v-else src="../assets/image/Vector.svg" alt="">
            </button>
          </div>
        </div>
      </div>
      <div :class="!openMenu ? 'd-none' : ''">
        <div class="px-5 pt-2 pb-3 space-y-1 min-menu">
          <a href="#" class="uppercase nav-title-menu">Афиша</a>
          <a href="#" class="uppercase nav-title-menu">образование</a>
          <a href="#" class="uppercase nav-title-menu">о музее</a>
          <a href="#" class="uppercase nav-title-menu">МЕДИА</a>
          <a href="#" class="uppercase nav-title-menu">новости</a>
          <a href="#" class="uppercase nav-title-menu">ПРОГРАММА ЛОЯЛЬНОСТИ</a>
          <a href="#" class="uppercase nav-title-menu">контакты</a>
          <canvas id="header-arrow"></canvas>
          <a href="#" class="uppercase nav-title-menu flex items-center">
            <img class="mr-1 nav-title-menu-img" src="../assets/image/(w.svg" alt="">
            <span>EN</span>
            <img class="ml-1 nav-title-menu-img" src="../assets/image/)w.svg" alt="">
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

  export default {
    name: "Header",
      props:['bgcolor', 'logoColor'],
      data() {
        return {
            openMenu: false
        }
      },
    mounted() {
      this.addCanvas()
    },
    methods: {
      showMenu () {
        this.openMenu = !this.openMenu
        const body = document.getElementsByTagName('body')
        if (this.openMenu) {
          body[0].style.overflow = 'hidden'
        } else {
          body[0].style.overflow = 'auto'
        }
      },
      addCanvas () {
        let canvas = document.getElementById('header-arrow');
        if (canvas) {
          if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.strokeStyle = '#FFFFFF';
            ctx.moveTo(canvas.width + 1, 0);
            ctx.lineTo(1, canvas.height / 2);
            ctx.lineTo(canvas.height * 2 + 1, canvas.height);
            ctx.closePath();
            ctx.stroke();
          }
        }
      }
    }
  }
</script>
<style scoped lang="scss">

  .menu {
    overflow-y: scroll;
    height: 100%;
  }

  .min-menu-text {
    display: block;

    @media (max-width: 650px) {
      display: none;
    }
  }
  .d-none {
    display: none;
  }
  #header-arrow {
    width: 100%;
    height: 360px;

    @media (max-width: 650px) {
      height: 182px;
    }
  }
  .bg-yellow {
    background: #FFDD7C;
  }
  .bg-white {
    background: white;
  }
  .header-block {
    position: fixed;
    z-index: 99;

  }
  .min {
    display: none;
  }
  .hidden {
    display: flex;
  }
  .min-menu {
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    overflow-y: auto;

    .nav-title-menu {
      color: #FFFFFF;
      margin-bottom: 40px;

      @media (max-width: 650px) {
        margin-bottom: 20px;
      }
    }

  }
  .nav-button {
    width: 30px;
  }
  .bg-dark{
    background: #221F1A;
  }

  .nav-title {
    /*font-family: Gerbera;*/
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    text-transform: uppercase;
    color: #221F1A;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 21px;
  }
  .nav-title-menu {
    /*font-family: Gerbera;*/
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    color: #221F1A;

    @media (max-width: 850px) {
      font-size: 30px;
      line-height: 32px;
    }

    @media (max-width: 650px) {
      font-size: 18px;
      line-height: 26px;
    }

    &-img {
      height: 32px;

      @media (max-width: 650px) {
        height: 22px;
      }
    }

  }
  @media (max-width: 990px) {
    .hidden {
      display: none;
    }
    .min {
      display: flex;
    }
  }

  .nav-logo {
    img {
      width: 50px;
      height: 55px;
    }
  }
  .nav-title-logo {
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
    line-height: 18px;
    color: #221F1A;
  }
  .nav-title-logo-mini {
    padding: 0;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #221F1A;
  }

  .t-logo {
    margin-left: 50px;
    img {
      width: 92px;
      height: 92px;
    }
  }
</style>
