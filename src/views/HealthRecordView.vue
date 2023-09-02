<script setup>
  import HeaderRecord from "../components/HeaderRecordComponent.vue";
  import NavbarIcon from "../components/NavbarIconComponent.vue";
</script>

<template>

    <HeaderRecord></HeaderRecord>
    <NavbarIcon></NavbarIcon>

    <h1>Carnet de santé</h1>
</template>

<script>
export default {
name: "HealthRecordComponent",
components: {
      HeaderRecord,
      NavbarIcon,
},
};
</script>

<style scoped>


/* Responsive */
@media (max-width : 480px) {
    
}

@media (min-width: 481px) and (max-width : 1024px) {
   
}

</style>
