<script setup>
  import Header from "../components/HeaderComponent.vue";
  import Footer from "../components/FooterComponent.vue";
</script>

<template>

    <Header></Header>

    <div class="banner"></div>
    <h1>Pour les vétérinaires</h1>
    <div class="features">
        <div class="first-feature">
            <img width="150" height="150" src="https://img.icons8.com/ios/150/CC5803/clock--v1.png" alt="horloge"/>
            <h2>Gain de temps</h2>
            <p>
                L'application permet aux propriétaires de prendre rendez-vous
                directement en ligne, vous n'avez plus à vous en occuper.
            </p>
        </div>
        <div class="second-feature">
            <img width="150" height="150" src="https://img.icons8.com/ios/150/CC5803/bar-chart--v1.png" alt="historigramme"/>
            <h2>Suivi complet</h2>
            <p>
                Vous avez accès aux antécédents de l'animal et ce même
                si c'est sa première visite chez vous.
            </p>
        </div>
        <div class="first-feature">
            <img width="150" height="150" src="https://img.icons8.com/ios/150/CC5803/imac.png" alt="ordinateur"/>
            <h2>Plus de papier</h2>
            <p>
                Plus besoin de remplir le carnet de santé, les données sont 
                transmises automatiquement sur le site pour les propriétaires.
            </p>
        </div>
    </div>
    <div class="mockup">
        <img src="../assets/mockup.png" alt="">
    </div>
    
    <Footer></Footer>

</template>

<script>
export default {
name: "VetComponent",
components: {
      Header,
      Footer,
}
};
</script>

<style scoped>
.banner{
    width: 100%;
    height: 25rem;
    background-image: url(../assets/vet-banner.jpg);
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
.features{
    margin-top: 3.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.first-feature, .second-feature, .third-feature{
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 27rem;
    align-items: center;
}
.first-feature img, .second-feature img, .third-feature img{
    margin-top: 3rem;
}
.first-feature h2, .second-feature h2, .third-feature h2{
    margin-top: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--dark-orange);
}
.first-feature p, .second-feature p, .third-feature p{
    margin-top: 1.4rem;
    margin-left: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    width: 17rem;
    text-align: center;
}
.mockup{
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

/* Responsive */
@media (max-width : 480px) {
    h1{
        font-size: 2rem;
        margin-left: 2rem;
    }
    .features{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .first-feature, .second-feature, .third-feature{
        display: flex;
        flex-direction: column;
        width: 20rem;
        height: 27rem;
        align-items: center;
    }
    .first-feature img, .second-feature img, .third-feature img{
        height: 100px;
        width: 100px;
    }
    .mockup img{
        width: 100%;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
    h1{
        margin-left: 4rem;
    }
    .features{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .first-feature, .second-feature, .third-feature{
        display: flex;
        flex-direction: column;
        width: 20rem;
        height: 27rem;
        align-items: center;
    }
    .mockup img{
        width: 100%;
    }
}

</style>
