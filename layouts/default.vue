<template>
  <div v-if="loader">
    <Nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
