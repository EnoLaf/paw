<script setup>
  import Header from "../components/HeaderComponent.vue";
  import Footer from "../components/FooterComponent.vue";
</script>

<template>

    <Header></Header>

    <div class="banner"></div>
    <h1>Comment ça fonctionne ?</h1>
    <div class="container">
        <div class="website">
            <img width="150" height="150" src="https://img.icons8.com/ios/150/CC5803/internet--v1.png" alt="internet"/>
            <h2>Un site web</h2>
            <p>
                Pour les propriétaires d'animaux, tout le dossier médical de votre animal est disponible directement sur le site.
            </p>
            <button @click="redirectToOwner">En savoir plus</button>
        </div>
        <div class="software">
            <img width="150" height="150" src="https://img.icons8.com/ios/150/CC5803/laptop-settings--v1.png" alt="logiciel"/>
            <h2>Un logiciel</h2>
            <p>
                Pour les vétérinaires, le logiciel vous permet la gestion des dossiers de vos patients.
            </p>
            <button @click="redirectToVet">En savoir plus</button>
        </div>
    </div>

    <Footer></Footer>

</template>

<script>
export default {
name: "ServicesComponent",
components: {
      Header,
      Footer,
},
methods: {
    redirectToOwner() {
        this.$router.push('/proprietaires');
    },
    redirectToVet() {
        this.$router.push('/veterinaires');
    },
},
};
</script>

<style scoped>
.banner{
    width: 100%;
    height: 25rem;
    background-image: url(../assets/services-banner.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
h1{
    font-family: 'Montserrat', sans-serif;
    font-size: 2.25rem;
    font-weight: 600;
    margin-left: 9.38rem;
    margin-top: 3.5rem;
}
.container{
    margin-top: 3.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 5rem;
}
.website, .software{
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 30rem;
    align-items: center;
}
.website img, .software img{
    margin-top: 3rem;
}
.website h2, .software h2{
    margin-top: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--dark-orange);
}
.website p, .software p{
    margin-top: 1.4rem;
    margin-left: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    width: 17rem;
    text-align: center;
}
button{
    width: 230px;
    height: 50px;
    background-color: white;
    border-radius: 25px;
    border: 2px solid var(--logo-orange);
    margin-top: 1.5rem;
    color: var(--logo-orange);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
}
.software button{
    margin-top: 3rem;
}

/* Responsive */
@media (max-width : 480px) {
    h1{
        font-size: 2rem;
        margin-left: 2rem;
    }
    .container{
        margin-top: 3.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 5rem;
    }
    .website img, .software img{
        height: 100px;
        width: 100px;
    }
    button{
        width: 180px;
        font-size: 1.25rem;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
  
}

</style>
