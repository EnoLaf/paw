<!-- src/components/ButtonAddComponent.vue -->
<template>
  <button>
    +
  </button>
</template>
  
<script>
  export default {
    name: "ButtonAddComponent",
  };
</script>

<style scoped>
button{
  height: 75px;
  width: 75px;
  color: white;
  background-color: var(--yellow);
  font-family: 'Montserrat', sans-serif;
  font-size: 3.75rem;
  outline: none;
  border: none;
  border-radius: 37.5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;
}

/* Responsive */
@media (max-width : 480px) {
  
}

@media (min-width: 481px) and (max-width : 1024px) {
  
}

</style>
   