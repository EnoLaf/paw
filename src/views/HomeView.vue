<script setup>
</script>

<template>
    <div class="banner"></div>
    <div class="first-part">
        <h1>Comment ça fonctionne ?</h1>
        <p>
            Lors de vos visites chez votre vétérinaire, celui-ci scanne la puce de votre animal et a un accès direct à ses 
            informations. Toutes les données médicales sont alors présentes pour un suivi complet et personnalisé.
            <br><br>
            A la fin de la consultation, le professionnel décrit les soins apportés tels que les vaccins, ordonances, prise de 
            médicaments, prises de sang, radiographies, ainsi que les résultats obtenus si il y en a. De cette façon, vous n’avez 
            plus besoin de penser au carnet de santé papier de votre animal lors des visites.
            <br><br>
            Si votre animal vient à fuguer et qu’une personne le dépose chez le vétérinaire, le professionnel peut alors scanner 
            la puce et accéder à toutes les informations nécessaires pour effectuer des soins en urgence si l’animal en à 
            besoin. Toute les maladies et alergies de votre animal y seront renseignées.
            <br><br>
            Pour vous vétérinaires et autres professionnels animaliers, PAW vous accorde une simplicité d’usage et un gain de 
            temps non négligeable.
        </p>
        <button @click="redirectToServices">En savoir plus</button>
    </div>
    <div class="second-part">
        <h1>Nos avantages</h1>
        <div class="benefits">
            <div class="first-benefit">
                <img width="150" height="150" src="https://img.icons8.com/ios-filled/150/CC5803/lock.png" alt="cadenas"/>
                <h2>Sécurisé</h2>
                <p>
                    Avec notre système, toutes les données de vos animaux sont centralisées et protégées.
                </p>
            </div>
            <div class="second-benefit">
                <img width="150" height="150" src="https://img.icons8.com/ios-glyphs/150/CC5803/gear.png" alt="engrenage"/>
                <h2>Flexible</h2>
                <p>
                    Le suivi de tous les animaux de compagnie peut être effectué grâce à PAW.
                </p>
            </div>
            <div class="third-benefit">
                <img width="150" height="150" src="https://img.icons8.com/ios-glyphs/150/CC5803/leaf.png" alt="feuille"/>
                <h2>Ecologique</h2>
                <p>
                    Avec PAW c’est près de 50 tonnes de papier qui sont économisées chaque année.
                </p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
name: "HomeComponent",
methods: {
    redirectToServices() {
        this.$router.push('/nos-services');
    },
},
};
</script>

<style scoped>
.banner{
    width: 100%;
    height: 25rem;
    background-image: url(../assets/home-banner.jpg);
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
.first-part p, .second-part p{
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
.first-part button{
    width: 230px;
    height: 50px;
    background-color: white;
    border-radius: 25px;
    border: 2px solid var(--logo-orange);
    margin-top: 3.5rem;
    margin-left: 37.81rem;
    color: var(--logo-orange);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
}
.second-part{
    margin-bottom: 5rem;
}
.benefits{
    margin-top: 3.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.first-benefit, .second-benefit, .third-benefit{
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 27rem;
    align-items: center;
}
.first-benefit img, .second-benefit img, .third-benefit img{
    margin-top: 3rem;
}
.first-benefit h2, .second-benefit h2, .third-benefit h2{
    margin-top: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--dark-orange);
}
.first-benefit p, .second-benefit p, .third-benefit p{
    margin-top: 1.4rem;
    margin-left: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    width: 17rem;
    text-align: center;
}

/* Responsive */
@media (max-width : 480px) {
    .first-part h1, .second-part h1{
        font-size: 2rem;
        margin-left: 2rem;
    }
    .first-part p, .second-part p{
        font-size: 1.25rem;
        margin-left: 2rem;
    }
    .first-part p{
        margin-top: 2rem;
        width: 20rem;
    }
    .first-part button{
        width: 180px;
        margin-top: 3rem;
        margin-left: 6.5rem;
        font-size: 1.25rem;
    }
    .second-part{
        margin-bottom: 5rem;
    }
    .benefits{
        margin-top: 3.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .first-benefit, .second-benefit, .third-benefit{
        display: flex;
        flex-direction: column;
        width: 20rem;
        height: 20rem;
        align-items: center;
    }
    .first-benefit img, .second-benefit img, .third-benefit img{
        height: 100px;
        width: 100px;
    }
    .first-benefit h2, .second-benefit h2, .third-benefit h2{
        font-size: 1.75rem;
    }
    .first-benefit p, .second-benefit p, .third-benefit p{
        margin-left: 0;
        font-size: 1.25rem;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
    .first-part h1, .second-part h1{
        font-size: 2.25rem;
        margin-left: 4rem;
    }
    .first-part p, .second-part p{
        font-size: 1.25rem;
        margin-left: 4rem;
    }
    .first-part p{
        margin-top: 2rem;
        width: 40rem;
    }
    .first-part button{
        margin-left: 17rem;
    }
    .second-part{
        margin-bottom: 5rem;
    }
    .benefits{
        margin-top: 3.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .first-benefit, .second-benefit, .third-benefit{
        display: flex;
        flex-direction: column;
        width: 20rem;
        height: 27rem;
        align-items: center;
    }
    .first-benefit p, .second-benefit p, .third-benefit p{
        margin-left: 0;
    }
}

</style>
