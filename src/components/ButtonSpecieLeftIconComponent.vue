<!-- src/components/ButtonSpecieLeftIconComponent.vue -->
<template>
  <div class="button" :style="{'--bgColor': bgColor, '--borderColor': borderColor}">
    <img width="50" height="50" :src="link"/>
    <p>{{text}}</p>
  </div>
</template>
  
<script>
  export default {
    name: "ButtonSpecieLeftIconComponent",
    props: {
      link : {
        type : String,
        required : true
      },
      textAlt :{
        type : String,
        required : true
      },
      text : {
        type : String,
        required : true
      },
      bgColor : {
        type : String,
        required : true
      },
      borderColor : {
        type : String,
        required : true
      }
    }
  };
</script>

<style scoped>
.button{
  height: 75px;
  width: 250px;
  background-color: var(--bgColor);
  border: 2px solid var(--borderColor);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
p{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.625rem;
}

/* Responsive */
@media (max-width : 480px) {
  
}

@media (min-width: 481px) and (max-width : 1024px) {
  
}

</style>
   