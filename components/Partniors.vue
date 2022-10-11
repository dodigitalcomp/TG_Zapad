<template>
  <div class="event-page-partners">
    <div  class="event-page-partners-title">
      <p>{{title ? title : 'Партнёры'}}</p>
    </div>
    <div class="event-page-partners-block">
      <a target="_blank" :href="item.link"  class="event-page-partners-block-item" v-for="(item, i) in items" :key="i">
        <img :src="item.logo" :alt="item.name">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Partners",
    props: ['items', 'title']
  }
</script>

<style scoped lang="scss">

  .event-page-partners-title {
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 40px;
    text-transform: uppercase;
    color: #221F1A;
    border-bottom: 1px solid;
    padding-bottom: 20px;

    @media (max-width: 850px) {
      font-size: 30px;
      line-height: 32px;
    }

    @media (max-width: 650px) {
      font-size: 25px;
      line-height: 25px;
    }
  }

  .event-page-partners {
    padding: 20px;
    background: #FFDD7C;

  &-block {
     display: flex;
     flex-wrap: wrap;

  @media (max-width: 850px) {
    padding: 59px 0 100px 0;
  }
  @media (max-width: 650px) {
    padding: 30px 0 60px 0;
  }

  &-item {
     width: calc(100% / 4);
     height: 175px;
     display: flex;
     justify-content: center;
     align-items: center;

    img {
      max-width: 200px;
      max-height: 150px;
    }

  @media (max-width: 850px) {
    height: 98px;
  }

  @media (max-width: 650px) {
    width: calc(100% / 2);
    img {
      width: 40%;
    }
  }

  }
  }
  }

</style>