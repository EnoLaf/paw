<script setup>
  import HeaderRecord from "../components/HeaderRecordComponent.vue";
</script>

<template>

    <HeaderRecord></HeaderRecord>

    <h1>Animal poids</h1>
</template>

<script>
export default {
name: "HealthRecordComponent",
components: {
      HeaderRecord,
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
