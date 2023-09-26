<!-- src/components/NavbarComponent.vue -->
<template>
  <footer class="footer">
      <p>06 16 53 53 83 • paw.contact31@gmail.com • 4 rue Françoise Giroud 31520 Ramonville Saint Agne</p>
      <br>
      <p>© 2023 par PAW</p>
  </footer>
  <footer class="footer-tablet">
      <p>06 16 53 53 83 • paw.contact31@gmail.com </p>
      <p>4 rue Françoise Giroud 31520 Ramonville Saint Agne</p>
      <br>
      <p>© 2023 par PAW</p>
  </footer>
  <footer class="footer-mobile">
      <p>06 16 53 53 83</p>
      <p>paw.contact31@gmail.com </p>
      <p>4 rue Françoise Giroud 31520</p> 
      <p>Ramonville Saint Agne</p>
      <br>
      <p>© 2023 par PAW</p>
  </footer>
</template>
  
<script>
  export default {
    name: "FooterComponent",
  };
</script>

<style scoped>
.footer{
  width: 100%;
  height: 7rem;
  background-color: var(--logo-orange-15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer-tablet{
  display: none;
}
.footer-mobile{
  display: none;
}
p{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
}

/* Responsive */
@media (max-width : 480px) {
  .footer{
    display: none;
  }
  .footer-mobile{
    width: 100%;
    height: 12rem;
    background-color: var(--logo-orange);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 481px) and (max-width : 1024px) {
  .footer{
    display: none;
  }
  .footer-tablet{
    width: 100%;
    height: 7rem;
    background-color: var(--logo-orange);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

</style>
   