<!-- src/components/CatsPatternComponent.vue -->
<template>
  <div class="container">

    <div class="first-col">
      <div class="pet-big" id="pet1">
        <p>Mouchi</p>
        <img width="100" height="100" src="https://img.icons8.com/pastel-glyph/100/cat--v3.png" alt="icon de chat"/>
      </div>
      <div class="pet-small" id="pet2">
        <p>Nekobasu</p>
        <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/cat--v2.png" alt="icon de petit chat"/>
      </div>
    </div>

    <div class="second-col">
      <div class="pet-small" id="pet3">
        <p>Ying</p>
        <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/cat--v2.png" alt="icon de petit chat"/>
      </div>
      <div class="pet-big" id="pet4">
        <p>Artémis</p>
        <img width="100" height="100" src="https://img.icons8.com/pastel-glyph/100/cat--v3.png" alt="icon de chat"/>
      </div>
    </div>

    <div class="third-col">
      <div class="pet-big" id="pet5">
        <p>Baron Humbert</p>
        <img width="100" height="100" src="https://img.icons8.com/pastel-glyph/100/cat--v3.png" alt="icon de chat"/>
      </div>
      <div class="pet-small" id="pet6">
        <p>Jiji</p>
        <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/cat--v2.png" alt="icon de petit chat"/>
      </div>
    </div>

  </div>
</template>
  
<script>
  export default {
    name: "CatsPatternComponent",
  };
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.first-col, .second-col, .third-col{
  display: flex;
  flex-direction: column;
}
.first-col, .second-col{
  margin-right: 3rem;
}
.pet-big{
  height: 220px;
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}
.pet-small{
  height: 150px;
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}
p{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  padding-top: 1rem;
  text-align: center;
}
#pet2, #pet4, #pet6{
  margin-top: 3rem;
}
#pet1, #pet6{
  background-color: #CC5803AB;
}
#pet2, #pet5{
  background-color: #FF9505AB;
}
#pet3{
  background-color: #FFB627AB;
}
#pet4{
  background-color: #FFC971AB;
}
#pet1 img{
  transform: scaleX(-1);
  margin-left: -4rem;
}
#pet2 img{
  transform: scaleX(-1);
  margin-left: -6rem;
}
#pet3 img, #pet6 img{
  margin-left: 4rem;
}
#pet4 img{
  margin-left: 3rem;
}
#pet5 img{
  transform: scaleX(-1);
}
/* Responsive */
@media (max-width : 480px) {
  
}

@media (min-width: 481px) and (max-width : 1024px) {
  
}

</style>
   