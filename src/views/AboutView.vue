<script setup>
</script>

<template>

    <div class="banner"></div>
    <h1>A propos</h1>
    <p>
        PAW est une idée qui a germée dans l'esprit d'Enora au cours de l'été 2020.
        <br><br>
        Suite à une urgence, elle a du emmener son chat chez le vétérinaire et il lui était impossible de mettre la 
        main sur le carnet de santé de son animal. De ce fait, le vétérinaire de garde était dans l'incapacité de 
        connaître les antécédents médicaux de l'animal
        <br><br>
        Depuis ce moment Enora travaille sur ce projet, pendant un temps dans le cadre de la Conférence Recherche et 
        Innovation au CESI avec Bryan, Florent, Matthieu et Hugo. Puis toute seule sans formation particulière. Et 
        enfin à l'ADRAR dans le cadre de sa formation de Conceptrice Développeuse Web.
    </p>

</template>

<script>
export default {
name: "AboutComponent",
};
</script>

<style scoped>
.banner{
    width: 100%;
    height: 25rem;
    background-image: url(../assets/about-banner.jpg);
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
p{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    width: 71.25rem;
    margin-left: 9.38rem;
    margin-top: 2rem;
    margin-bottom: 3.5rem;
}

/* Responsive */
@media (max-width : 480px) {
    h1{
        font-size: 2rem;
        margin-left: 2rem;
    }
    p{
        width: 20rem;
        margin-left: 2rem;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
    h1{
        margin-left: 4rem;
    }
    p{
        width: 40rem;
        margin-left: 4rem;
    }
}

</style>
