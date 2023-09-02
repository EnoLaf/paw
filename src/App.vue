<script setup>
  import { RouterView } from 'vue-router';
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

  <RouterView></RouterView>

</template>

<script>
  export default {
    name: 'App',
    components: {
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


