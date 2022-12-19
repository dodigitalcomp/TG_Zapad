<template>
  
</template>

<script>
  export default {
    name: "Meta",
    props: ['headData'],
    head () {
      return {
        title: this.headData ? this.headData.title : '',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.headData && this.headData.description ? this.headData.description : ' '
          },
          {
            hid: 'title',
            name: 'title',
            content: this.headData ? this.headData.title : ''
          },
          {
            hid: 'og:title',
            name: 'og:title',
            property: 'og:title',
            content: this.headData ? this.headData.h1 : ''
          }
        ]
      }
    },

  }
</script>

<style scoped>

</style>