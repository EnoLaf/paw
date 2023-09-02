<!-- src/components/HeaderComponent.vue -->
<script setup>
import Navbar from "./NavbarComponent.vue";
</script>

<template>
  <header class="header">

    <div class="title">
      <a href="/">
        <img class="logo" src="../assets/PAW-logo-horizontal.png" alt="">
      </a>

      <div class="buttons">
        <p @click="showSignIn" class="signIn">Inscription</p>
        <p @click="showLogIn" class="logIn">Connexion</p>
      </div>
    </div>

    <Navbar></Navbar>

    <section>
      <div class="blur" v-if="logIn" @click.self="close">
        <div class="frame">
          <div class="close">
            <img width="40" height="40" src="https://img.icons8.com/ios/100/delete-sign--v1.png" alt="croix" @click.self="close"/>
          </div>
          <div class="left-part">
            <div class="img" id="logIn-img"></div>
          </div>

          <div class="right-part">
            <input type="text" placeholder="Email">
            <input type="password" placeholder="Mot de passe">
            <button>CONNEXION</button>
            <p @click="showSignIn">Créer un compte</p>
            <p @click="showForgottenPassword">Mot de passe oublié ?</p>
          </div>
        </div>
      </div>

      <div class="blur" v-if="signIn" @click.self="close">
        <div class="frame">
          <div class="close">
            <img width="40" height="40" src="https://img.icons8.com/ios/100/delete-sign--v1.png" alt="croix" @click.self="close"/>
          </div>
          <div class="left-part">
            <div class="img" id="signIn-img"></div>
          </div>

          <div class="right-part">
            <input id="lastName" type="text" placeholder="Nom">
            <input id="firstName" type="text" placeholder="Prénom">
            <input id="email" type="text" placeholder="Email">
            <input id="password" type="password" placeholder="Mot de passe">
            <button>ENREGISTRER</button>
            <p @click="showLogIn">J'ai déjà un compte</p>
          </div>
        </div>
      </div>

      <div class="blur" v-if="pwd" @click.self="close">
        <div class="frame">
          <div class="close">
            <img width="40" height="40" src="https://img.icons8.com/ios/100/delete-sign--v1.png" alt="croix" @click.self="close"/>
          </div>
          <div class="left-part">
            <div class="img" id="pwd-img"></div>
          </div>

          <div class="right-part">
            <input type="text" placeholder="Email">
            <button>Envoyer un mail</button>
            <p @click="showLogIn">Retourner à la connexion</p>
          </div>
        </div>
      </div>
    </section>

  </header>

  <div class="buttons-mobile">
    <p @click="showSignIn">Inscription</p>
    <p @click="showLogIn">Connexion</p>
  </div>

</template>
  
<script>
export default {
  name: "HeaderComponent",
  components: {
      Navbar,
    },
  data(){
    return {
        logIn : false,
        signIn : false,
        pwd : false,
    }
  },
  methods: {
      showLogIn(){
          this.logIn = true;
          this.signIn = false;
          this.pwd = false;
      },
      showSignIn(){
          this.signIn = true;
          this.logIn = false;
          this.pwd = false;
      },
      showForgottenPassword(){
          this.pwd = true;
          this.logIn = false;
          this.signIn = false;
      },
      close(){
        this.logIn = false;
        this.signIn = false;
        this.pwd = false;
      }  
  },
};
</script>

<style scoped>
.header{
  position: relative;
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
}
.logo{
  display: flex;
  justify-content: center;
  margin-left: 30rem;
  margin-bottom: 1rem;
}
.title{
  display: flex;
  flex-direction: row;
}
.buttons{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 18rem;
}
.buttons-mobile{
  display: none;
}
p{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
}
.logIn{
  margin-top: 2rem;
}
.blur{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(153, 153, 153, 0.4);
  backdrop-filter: blur(10px);
  z-index: 100;
}
.frame{
  background-color: var(--cream);
  height: 70vh;
  width: 52vw;
  border-radius: 10px;
  margin: auto;
  margin-top: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.close{
  position: absolute;
  top: 9rem;
  right: 23rem;
}
.left-part .img{
  background-size: cover;
  background-position: center;
  width: 20vw;
  height: 55vh;
  border-radius: 5px;
}
#logIn-img{
  background-image: url(../assets/bg-pets-1.jpg);
}
#signIn-img{
  background-image: url(../assets/bg-pets-3.jpeg);
}
#pwd-img{
  background-image: url(../assets/bg-pets-2.jpeg);
}
.right-part{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.right-part input{
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  border-radius: 20px;
  background-color: var(--cream);
  border: 2px solid var(--logo-orange);
  font-size: 1.125rem;
  outline: none;
  width: 300px;
  height: 50px;
  margin-bottom: 2rem;
}
#lastName{
  border: 2px solid var(--yellow);
}
#email{
  border: 2px solid var(--mid-orange);
}
#password{
  border: 2px solid var(--dark-orange);
}
.right-part button{
  color: var(--cream);
  background: var(--logo-orange);
  width: 300px;
  height: 50px;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  outline: none;
  border: none;
}
.right-part p{
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  margin-top: 2rem;
}

/* Responsive */
@media (max-width : 480px) {
  .header{
    height: 10rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .title{
    height: 8rem;
    display: flex;
    flex-direction: row;
  }
  .logo{
    margin-left: 1rem;
    width: 15rem;
  }
  .buttons{
    display: none;
  }
  .buttons-mobile{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 3rem;
    background-color: var(--logo-orange);
  }
  .buttons-mobile p{
    font-size: 1.25rem;
  }
  .blur{
    background-color: var(--cream);
  }
  .frame{
    background-color: var(--cream);
    height: 100vh;
    width: 100vw;
    border-radius: 0;
    margin-top: 0;
  }
  .close{
    position: absolute;
    top: 3rem;
    right: 3rem;
  }
  .left-part {
    display: none;
  }
  .right-part{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
}

@media (min-width: 481px) and (max-width : 1024px) {
  .logo{
    margin-left: 3rem;
  }
  .buttons{
    margin-left: 2rem;
  }
  .menu{
    margin-left: 5rem;
  }
  .menu li .link{
    font-size: 1.5rem;
    padding-left: 1rem;
  }
  .frame{
    height: 70vh;
    width: 80vw;
    margin-top: 15vh;
  }
  .close{
    position: absolute;
    top: 11rem;
    right: 6rem;
  }
  .left-part .img{
    width: 30vw;
    border-radius: 5px;
  }
}

</style>
   