<script setup>
  import HeaderRecord from "../components/HeaderRecordComponent.vue";
  import NavbarIcon from "../components/NavbarIconComponent.vue";
  import Footer from "../components/FooterHealthRecordComponent.vue"
</script>

<template>

  <HeaderRecord></HeaderRecord>
  <NavbarIcon id="navbarTop"></NavbarIcon>

  <h1>Animal vaccins</h1>

  <NavbarIcon id="navbarBottom"></NavbarIcon>
  <div class="footer">
    <Footer></Footer>
  </div>

</template>

<script>
export default {
name: "PetVaccinesComponent",
components: {
      HeaderRecord,
      NavbarIcon,
      Footer
},
};
</script>

<style scoped>

#navbarBottom{
  display: none;
}

/* Responsive */
@media (max-width : 480px) {
  #navbarTop{
    display: none;
  }
  #navbarBottom{
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  .footer{
    display: none;
  }
}

@media (min-width: 481px) and (max-width : 1024px) {
  #navbarTop{
    display: none;
  }
  #navbarBottom{
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  .footer{
    display: none;
  }
}

</style>
