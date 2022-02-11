<template>
  <div>
    <Header ref="header"/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Main from "../components/Main";
import Footer from "../components/Footer";
export default {
  name: 'IndexPage',
    components: {Footer, Main},
}
</script>
