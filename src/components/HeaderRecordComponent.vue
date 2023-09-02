<!-- src/components/HeaderRecordComponent.vue -->
<script setup>
</script>

<template>
  <header class="header">

    <div class="title">
      <a href="/">
        <img class="logo" src="../assets/PAW-logo-horizontal.png" alt="">
      </a>

      <div class="buttons">
        <a href="/">Retour au site</a>
        <a href="/" class="disconnect">Déconnexion</a>
      </div>
    </div>

  </header>

</template>
  
<script>
export default {
  name: "HeaderRecordComponent",
};
</script>

<style scoped>
.header{
  position: relative;
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
}
.title{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.logo{
  height: 10rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
.buttons{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
p, a{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  color: black;
}
.disconnect{
  margin-top: 2rem;
}

/* Responsive */
@media (max-width : 480px) {
  .header{
    display: none;
  }
}

@media (min-width: 481px) and (max-width : 1024px) {
  .header{
    display: none;
  }
}

</style>
   