<template>
  <div>
    <Header bgcolor="yellow" logoColor="black"/>
    <div class="about">
      <div class="about-hider">
        <div class="about-hider-img" >
          <img v-if="property" :src="property.main_img" alt="">
        </div>
        <div class="about-hider-title">
          <p v-if="head">{{head.h1}}<span class="william" v-if="property"> {{property.cursiveTitle}}</span>
          </p>
        </div>
        <div class="about-hider-footer">
          <div  class="about-hider-footer-title">
            <p v-if="property">{{property.h2}}</p>
          </div>
          <div class="about-hider-footer-content">
            <div class="about-hider-footer-content-left">
              <p v-if="property">{{property.text}}</p>
            </div>
            <div class="about-hider-footer-content-right">
              <div class="about-hider-footer-content-right-line"></div>
            </div>
          </div>
        </div>
      </div>
      <Galleria :images="slider" ></Galleria>
      <div class="about-block" v-if="aboutListItems && aboutListItems.length">
        <div class="about-block-title">
        </div>
        <div class="about-block-item" v-for="(item, i) in aboutListItems" :key="i">
          <div  class="about-block-item-img">
            <img :src="item.img" alt="">
          </div>
          <div  class="about-block-item-info">
            <div class="about-block-item-info-title">
              <p>{{item.name}}</p>
            </div>
            <div class="about-block-item-info-description">
              <p>{{item.text}}</p>
            </div>
            <NuxtLink v-if="item.link" tag="div" :to="item.link" class="about-block-item-info-button">
              <img class="mr-1" src="../assets/image/(.svg" alt="">
              <span>{{item.link_name}}</span>
              <img class="ml-1" src="../assets/image/).svg" alt="">
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="about-title" v-if="people && people.langPhrase">
        <p>{{people.langPhrase.title}}</p>
      </div>
      <div class="p-left-20" v-if="people && people.listItems">
        <Teachers :data="people.listItems"/>
      </div>
      <Partners  :title="partners.langPhrase.title" v-if="partners && partners.langPhrase" :items="partners.listItem"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import Galleria from "../components/Galleria";
  import Teachers from "../components/Teachers";
  import { mapActions, mapState} from 'vuex'
  import Partners from "../components/Partniors";
  export default {
    name: "about",
    components: {Partners, Teachers, Galleria, Footer, Header},
    data () {
      return {
        selectPage: 0
      }
    },
    computed: {
      ...mapState({
        aboutListItems: (state) => state.about.aboutListItems,
        partners: (state) => state.about.partners,
        people: (state) => state.about.people,
        property: (state) => state.about.property,
        slider: (state) => state.about.slider,
        head: (state) => state.about.head
      })
    },
    mounted() {
      this.getAbout().then(() => {
      })
    },
    methods: {
      ...mapActions({
        getAbout: 'about/getAbout',
      }),
    }
  }
</script>

<style scoped lang="scss">

  .p-left-20 {
    padding-left: 20px;
  }

</style>