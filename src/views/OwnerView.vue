<script setup>
</script>

<template>
    <div class="banner"></div>
    <div class="first-part">
        <h1>Pour les propriétaires d'animaux</h1>
        <p>
            Grâce à l'application PAW dites adieu au carnet de santé papier. Notre système vous permettra d'avoir
            accès à toutes les donénes de votre animal en tout temps et depuis votre téléphone ou votre ordinateur.
            Plus de risque de l'oublier ou de le perdre.
        </p>
    </div>
    <div class="second-part">
        <h1>Avec PAW vous pouvez</h1>
        <div class="features">
            <div class="first-feature">
                <h2>Vous connecter avec <br>votre compte personnel</h2>
                <img src="../assets/logInPage.png" alt="">
            </div>
            <div class="second-feature">
                <h2>Choisir parmis tous <br>vos animaux</h2>
                <img src="../assets/petPage.png" alt="">
            </div>
            <div class="first-feature">
                <h2>Accéder aux données <br>de votre animal</h2>
                <img src="../assets/mouchiPage.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "OwnerComponent",
};
</script>

<style scoped>
.banner{
    width: 100%;
    height: 25rem;
    background-image: url(../assets/owner-banner.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.first-part h1, .second-part h1{
    font-family: 'Montserrat', sans-serif;
    font-size: 2.25rem;
    font-weight: 600;
    margin-left: 9.38rem;
}
.first-part p{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    margin-left: 9.38rem;
}
.first-part, .second-part{
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
}
.first-part p{
    margin-top: 2rem;
    width: 71.25rem;
}
.second-part{
    margin-bottom: 5rem;
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
    align-items: center;
    margin-right: 1rem;
}
.first-feature img, .second-feature img, .third-feature img{
    margin-top: 3rem;
    width: 20rem;
    height: 40rem;
}
.first-feature h2, .second-feature h2, .third-feature h2{
    margin-top: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
}

/* Responsive */
@media (max-width : 480px) {
    .first-part h1, .second-part h1{
        margin-left: 2rem;
        font-size: 2rem;
    }
    .first-part p{
        margin-left: 2rem;
        width: 20rem;
    }
    .features{
        margin-top: 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .first-feature, .second-feature, .third-feature{
        margin-right: 0;
        margin-top: 1.5rem;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
    .first-part h1, .second-part h1{
        margin-left: 4rem;
    }
    .first-part p{
        margin-left: 4rem;
        width: 40rem;
    }
    .features{
        margin-top: 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .first-feature, .second-feature, .third-feature{
        margin-right: 0;
        margin-top: 1.5rem;
    }
}

</style>
