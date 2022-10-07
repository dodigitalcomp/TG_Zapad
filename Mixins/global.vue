<template>
  
</template>

<script>
  import moment from 'moment'
  export default {
    name: "global",
    methods : {
      dateFormat(date) {
        moment.locale('fr');
        const today  = moment().format("LLL");;
        console.log(today)
        return today
      }
    }
  }
</script>

<style scoped>

</style>