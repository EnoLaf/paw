<script setup>
  import { RouterView } from 'vue-router';
  import Header from "./components/HeaderComponent.vue";
  import Footer from "./components/FooterComponent.vue";
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

  <Header id="header"></Header>
  

  <RouterView></RouterView>
  
  <Footer></Footer>

</template>

<script>
  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    }
  }
</script>

<style>
  /* Fonts import */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    /* colors */
    --black : #1C1917;
    --cream : #FEF9F0;
    --dark-orange : #CC5803;
    --mid-orange : #E2711D;
    --logo-orange : #FF9505;
    --yellow : #FFB627;
    --light-orange : #FFC971;
  }
</style>


