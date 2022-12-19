<template>
  <div>
    <Header bgcolor="yellow" logoColor="black" ref="header"/>
    <div id="errors" class="errors">
      <div class="home">
        <NuxtLink :to="localePath('/')" href="">
          <img class="mr-1" src="../assets/image/(.svg" alt="">
          <span class="icon">
                        <img src="../assets/image/Vector135.svg" alt="">
                    </span>
          <span>на главную</span>
          <img class="ml-1" src="../assets/image/).svg" alt="">
        </NuxtLink>
      </div>
      <div class="code">
        <p>{{error.statusCode}}</p>
      </div>
      <div class="text">
        <p>Страница не существует или была удалена. Попробуйте вернуться на главную.</p>
      </div>
      <div id="line"></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "../components/Footer";
  export default {
    layout: 'default',
    components: {Footer},
    props: {
      error: {
        type: Object,
        required: true
      }
    }
  }
</script>
<style scoped lang="scss">

  .icon {
    margin-top: 2px;
    margin-right: 9px;
  }

  #line {
    content: "";
    width: 105%;
    border-bottom: solid 1px #000000;
    position: absolute;
    z-index: 1;
    top: 56%;
    left: -41px;
    transform: rotate(-24deg);


    @media (max-width: 850px) {
      width: 123%;
      top: 55%;
      left: -87px;
      transform: rotate(-41deg);
    }

    @media (max-width: 650px) {
      width: 131%;
      top: 42%;
      left: -58px;
      transform: rotate(-47deg);
    }


  }

  .errors {
    padding-top: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 750px;
    background: #FFDD7C;
    position: relative;

    @media (max-width: 650px) {
      height: 650px;
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      text-align: center;
      justify-content: center;

      div:nth-child(1) {
        order: 2;
      }
      div:nth-child(2) {
        order: 1;
      }
      div:nth-child(3) {
        order: 3;
      }
    }


    .home {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 20px;
      text-transform: uppercase;
      color: #221F1A;
      min-width: 333px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media (max-width: 1000px) {
        margin-top: 100px;
        margin-bottom: 30px;
      }
    }

    .text {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 20px;
      text-align: center;
      color: #221F1A;

      max-width: 333px;
    }

    .code {
      font-style: normal;
      font-weight: normal;
      font-size: 200px;
      line-height: 200px;
      text-align: center;
      text-transform: uppercase;
      color: #221F1A;
      @media (max-width: 1000px) {
        margin-top: 100px;
      }

      @media (max-width: 850px) {
        margin-top: 222px;
      }

      @media (max-width: 650px) {
        margin-top: 69px;
        font-size: 140px;
        line-height: 200px;
      }
    }
  }
</style>