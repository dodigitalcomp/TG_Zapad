<template>
  <div class="about-content" >
    <div class="about-content-galleria" :style="isMain ? 'margin-bottom: 70px;' : ''">
      <div class="block">
        <Transition v-for="(item, i) in newImages" :key="i">
           <img class="item" :src="item" alt="" :class="'item' + (i + 1)"  >
        </Transition>
      </div>
    </div>
    <div class="about-content-pagination">
      <p class="about-content-pagination-max" :class="isMain ? 'w-full' : ''">
        <span class="page " :class="index === i ? 'active' : ''" v-for="(item, i) in newImages" @click="index = i" :key="i">{{i + 1}}</span>
      </p>
      <p class="about-content-pagination-min w-full" :class="isMain ? 'w-full' : ''">
        <span class="page " :class="index === i ? 'active' : ''" v-for="(item, i) in newImages" @click="index = i" :key="i">{{i + 1}}</span>
      </p>
      <div class="icon">
        <progress-bar
            :options="options"
            :value="timeVal"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Galleria",
  props: ['images', 'isMain'],
  data () {
    return {
      newImages: [],
      timeVal: 0,
      index: null,
      timer: null,
      timer2: null,
      options: {
        text: {
          hideText: true
        },
        progress: {
          color: '#ffffff',
          backgroundColor: '#333333',
          inverted: false
        },
        layout: {
          height: 20,
          width: 20,
          verticalTextAlign: 0,
          horizontalTextAlign: 0,
          zeroOffset: 0,
          strokeWidth: 100,
          progressPadding: 0,
          type: 'circle'
        }
      }
    }
  },
  methods: {
    sliderAuto() {
      if ((this.index + 1) === this.newImages.length) {
        this.index = 0
      } else {
        this.index ++
      }
    },
    timerFan() {
      clearTimeout(this.timer);
      clearTimeout(this.timer2);
      this.timer = setInterval(() => {
        this.sliderAuto()
        this.timeVal = 0
      }, 6000);
      this.timer2 = setInterval(() => {
        if (this.timeVal === 100) {
          this.timeVal = 0
        } else {
          this.timeVal ++
        }
      }, 60)
    }
  },
  created() {
    this.newImages = this.images
    this.timerFan()
  },
  destroyed () {
    clearTimeout(this.timer);
    clearTimeout(this.timer2);
  },
  watch: {
    index(newValue) {
      const array = JSON.parse(JSON.stringify(this.newImages))
      array.splice(newValue, 1)
      if (this.images[newValue]) {
        array.unshift(this.images[newValue])
        this.newImages = array
      }
    },
    images(newValue) {
       this.newImages = JSON.parse(JSON.stringify(newValue))
    }
  }
}
</script>

<style scoped lang="scss">

  .ldBar-label {
    color: #09f;
    font-family: 'varela round';
    font-size: 2.5em;
    font-weight: 900;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .block {
    position: relative;
    width: 501px;
    height: 354px;
    @media (max-width: 1000px) {
      width: 268px;
      height: 190px;
    }
    @media (max-width: 650px) {
      width: 339px;
      height: 239px;
    }
  }

  .item {
    width: 501px;
    height: 354px;
    position: absolute;

    @media (max-width: 1000px) {
      width: 268px;
      height: 190px;
    }
  }

  .item3 {
    top: 40px;
    left: 40px;
    opacity: 0.5;
    @media (max-width: 650px) {
      width: 329px;
      height: 229px;
    }
  }
  .item2 {
    top: 25px;
    left: 25px;
    opacity: 0.5;
    @media (max-width: 650px) {
      width: 309px;
      height: 229px;
    }
  }
  .item1 {
    top: 10px;
    left: 10px;
    z-index: 1;
    @media (max-width: 650px) {
      width: 279px;
      height: 229px;
    }
  }

</style>
