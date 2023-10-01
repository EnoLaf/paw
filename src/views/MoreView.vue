<script setup>
  import HeaderRecord from "../components/HeaderRecordComponent.vue";
  import NavbarIcon from "../components/NavbarIconComponent.vue";
  import Footer from "../components/FooterHealthRecordComponent.vue"
</script>

<template>

  <HeaderRecord></HeaderRecord>
  <NavbarIcon id="navbarTop"></NavbarIcon>

  <div class="container">

    <div class="left-part">
      <button @click="showProfile" class="button" id="profile">Mon profil</button>
      <a href="/" class="button" id="website">Site web</a>
      <button @click="showCGU" class="button" id="cgu">CGU</button>
      <a href="/contact" class="button" id="help"> Centre d'aide</a>

      <p>Vous êtes vétérinaire ?<br><strong>Rejoignez PAW !</strong></p>

      <a id="more" href="/">En savoir plus ></a>
    </div>

    <div class="right-part">

    </div>

  </div>

  <NavbarIcon id="navbarBottom"></NavbarIcon>
  <div class="footer">
    <Footer></Footer>
  </div>

</template>

<script>
export default {
name: "MoreComponent",
components: {
  HeaderRecord,
  NavbarIcon,
  Footer
},
data() {
  return {
    profile : false,
    cgu : false,
  }
},
methods: {
  showProfile(){
    this.profile = true;
    this.cgu = false;
  },
  showCGU(){
    this.profile = false;
    this.cgu = true;
  }
}
};
</script>

<style scoped>
.left-part{
  width: 37.43%;
  height: 34.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button{
  width: 22rem;
  height: 4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  border-radius: 20px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#profile{
  margin-top: 2rem;
  border: 2px solid var(--yellow);
  background: rgba(255, 182, 39, 0.15);
}
#website{
  border: 2px solid var(--logo-orange);
  background: rgba(255, 149, 5, 0.15);
}
#cgu{
  border: 2px solid var(--mid-orange);
  background: rgba(226, 113, 29, 0.15);
}
#help{
  border: 2px solid var(--dark-orange);
  background: rgba(204, 88, 3, 0.15);
}
a{
  text-decoration: none;
  color: black;
}
p{
  text-align: center;
  font-size: 1.25rem;
}
#more{
  font-size: 1rem;
}
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
  .button{
    height: 5rem;
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
  .button{
    height: 5rem;
  }
}

</style>
