<template>
  <div class="teachers">
    <div class="teachers-item">
      <div class="teachers-item-image">
        <img  src="../assets/image/photos/image45.jpg" alt="">
      </div>
      <div class="teachers-item-name">
        <p>Алла Орлова</p>
      </div>
      <div class="teachers-item-specialization">
        <p>ректор БФУ им. И. Канта</p>
      </div>
    </div>
    <div class="teachers-item">
      <div class="teachers-item-image">
        <img  src="../assets/image/photos/image44.jpg" alt="">
      </div>
      <div class="teachers-item-name">
        <p>Александр Федоров</p>
      </div>
      <div class="teachers-item-specialization">
        <p>ректор БФУ им. И. Канта</p>
      </div>
    </div>
    <div v-if="count == 3" class="teachers-item border-left">
      <div class="teachers-item-image">
        <img  src="../assets/image/photos/image44.jpg" alt="">
      </div>
      <div class="teachers-item-name">
        <p>Александр Федоров</p>
      </div>
      <div class="teachers-item-specialization">
        <p>ректор БФУ им. И. Канта</p>
      </div>
    </div>
    <img class="teachers-arrow-left" src="../assets/image/Vector999.svg">
    <img class="teachers-arrow-right" src="../assets/image/Vector199.svg">
  </div>
</template>

<script>
export default {
  name: "Teachers",
  props: ['count']
}
</script>

<style scoped lang="scss">

  .border-left {
    border-left: 1px solid;

    @media (max-width: 650px) {
      display: none !important;
    }
  }

 .teachers {
     border-bottom: 1px solid;
     border-top: 1px solid;
     padding-bottom: 20px;
     padding-top: 20px;
     margin-right: 20px;
     display: flex;
     height: 454px;
     position: relative;
     margin-bottom: 100px;


   @media (max-width: 850px) {
     margin-bottom: 80px;
   }

   @media (max-width: 650px) {
     margin-bottom: 60px;
   }

   &-arrow-left, &-arrow-right{
     position: absolute;
     top: calc(50% - 15px);
     height: 30px;
     width: 20px;
     cursor: pointer;
   }
   &-arrow-left {
     left: 0;
   }

   &-arrow-right {
     right: 0;
   }

   &-item:first-child {
     border-right: 1px solid;

     @media (max-width: 850px) {
       display: none;
     }

   }

   &-item {
     display: flex;
     flex-direction: column;
     align-items: center;
     flex: 1;

     &-image {
       display: flex;
       justify-content: center;
       margin-top: 80px;
     }

     &-name ,&-specialization {
       display: flex;
       justify-content: center;
     }

     &-name {
       font-style: normal;
       font-weight: normal;
       font-size: 18px;
       line-height: 26px;
       text-align: center;
       color: #221F1A;
       margin-top: 20px;
     }

     &-specialization {
       margin-top: 10px;
       font-style: normal;
       font-weight: normal;
       font-size: 15px;
       line-height: 20px;
       text-align: center;
       text-transform: uppercase;
       color: #221F1A;
     }

   }

 }
</style>