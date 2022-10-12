<template>
  
</template>

<script>
  import moment from 'moment'
  export default {
    name: "global",
    methods : {
      dateFormat(date, type) {
        const myArray = date.split(":");
        if (myArray.length > 1) {
          type = 0
        } else {
          type = 1
        }
        let today = null
        if (type === 1) {
          today  = moment(date, 'DD.MM.YYYY').lang("ru").format("LL");
        } else {
          today  = moment(date, 'DD.MM.YYYY hh:mm').lang("ru").format("LLL");
        }
        return today
      }
    }
  }
</script>

<style scoped>

</style>