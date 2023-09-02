<!-- src/components/NavbarComponent.vue -->
<script setup>
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

    <div class="navigation">
      <ul class="menu">
        <li>
          <router-link to="/" class="link">Accueil</router-link>
        </li>
        <li>
          <router-link to="/a-propos" class="link">A propos</router-link>
        </li>
        <li>
          <router-link to="/nos-services" class="link">Nos services</router-link>
        </li>
        <li>
          <router-link to="/contact" class="link">Nous contacter</router-link>
        </li>
      </ul>
    </div>

  </header>

  <section>
    <div class="blur" v-if="logIn" @click.self="close">
      <div class="frame">
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

</template>
  
<script>
  export default {
    name: "NavbarComponent",
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
      this.psw = false;
    }  
},
  };
</script>

<style scoped>
.header{
  position: relative;
  width: 100%;
  height: 19rem;
  display: flex;
  flex-direction: column;
}
.logo{
  display: flex;
  justify-content: center;
  margin-left: 30rem;
  margin-top: 0.5rem;
}
.title{
  height: 14rem;
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
p{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
}
.logIn{
  margin-top: 2rem;
}
.navigation{
  display: flex;
  height: 5rem;
  background-color: var(--logo-orange);
}
.menu{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 19rem;
}
.menu li{
  list-style-type: none;
}
.menu li .link{
  color: var(--black);
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  padding-left: 3.75rem;
  text-decoration: none;
}
.blur{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(153, 153, 153, 0.4);
  backdrop-filter: blur(10px);
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
  font-size: 20px;
  outline: none;
  width: 300px;
  height: 50px;
  margin-bottom: 2rem;
}
.right-part button{
  color: var(--cream);
  background: var(--logo-orange);
  width: 300px;
  height: 50px;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
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
    height: 13rem;
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
}

</style>
   