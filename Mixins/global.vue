<template>
  
</template>

<script>
  import moment from 'moment'
  export default {
    name: "global",
    methods : {
      dateFormat(date, type) {
        if (date) {
          const myArray = date.split(":");
          if (myArray.length > 1) {
            type = 0
          } else {
            type = 1
          }
          let today = null
          if (type === 1) {
            today  = moment(date, 'DD.MM.YYYY').locale('ru').calendar(null, {
              lastDay: 'DD MMMM',
              nextDay: 'DD MMMM',
              sameDay: 'DD MMMM',
              sameElse: 'DD MMMM',
              lastWeek: 'DD MMMM',
              nextWeek: 'DD MMMM',
            })
          } else {
            today  = moment(date, 'DD.MM.YYYY hh:mm').locale("ru").format("LLL");
          }
          return today
        }
      },
      dateFormatDay(date) {
        if (date) {
          const day = moment(date, 'DD.MM.YYYY').locale('ru').calendar({
            lastWeek: 'DD.MM.YYYY',
            nextWeek: 'DD.MM.YYYY',
            sameDay: function (now) {
              if (this._locale._abbr === 'en') {
                return '[Today]'
              } else {
                return '[Сегодня]'
              }
            },
            nextDay: function (now) {
              if (this._locale._abbr === 'en') {
                return '[Tomorrow]'
              } else {
                return '[Завтра]'
              }
            },
            lastDay: function (now) {
              if (this._locale._abbr === 'en') {
                return '[Yesterday]'
              } else {
                return '[Вчера]'
              }
            }
          })
          const myArray = day.split(".");
          if (myArray.length > 1) {
            return ''
          } else {
            return day + ' ,'
          }

        }
      },
      dateFormatWeek(date) {
        if (date) {
          return moment(date, 'DD.MM.YYYY hh:mm').locale("ru").format("dddd")
        }
      }
    }
  }
</script>

<style scoped>

</style>