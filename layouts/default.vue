<template>
  <div v-if="loader">
    <Nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Vue from 'vue'
import global from "../Mixins/global";
Vue.mixin(global)
export default {
  name: 'Default',
  data () {
    return {
      loader: false
    }
  },
  mounted () {
    this.loader = true
    this.getLanguage()
  },
  methods: {
    ...mapActions({
      getLanguage: 'language/getLanguage',
    })
  }
}
</script>

<style scoped>

</style>
