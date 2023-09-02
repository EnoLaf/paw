<script setup>
</script>

<template>
    <div class="banner"></div>
    <h1>Nous contacter</h1>
    <div class="contact">
        <input class="input" id="name" type="text" placeholder="Nom">
        <input class="input" id="email" type="text" placeholder="Email">
        <input class="input" id="subject" type="text" placeholder="Sujet">
        <textarea class="input" name="text" id="content" cols="60" rows="10" placeholder="Message"></textarea>
        <button>Envoyer</button>
    </div>
</template>

<script>
export default {
name: "ContactComponent",
};
</script>

<style scoped>
.banner{
    width: 100%;
    height: 25rem;
    background-image: url(../assets/contact-banner.jpg);
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
.contact{
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    margin-left: 9.38rem;
    width: 50rem;
}
#email, #subject, #content{
    margin-top: 0.5rem;
}
.input{
    height: 50px;
    border: 2px solid black;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
}
#content{
    height: 12rem;
}
button{
    width: 230px;
    height: 50px;
    background-color: white;
    border-radius: 25px;
    border: 2px solid var(--logo-orange);
    margin-top: 3rem;
    color: var(--logo-orange);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    margin-left: 35.7rem;
}

/* Responsive */
@media (max-width : 480px) {
    h1{
        font-size: 2rem;
        margin-left: 2rem;
    }
    .contact{
        margin-left: 3rem;
        width: 18rem;
    }
    button{
        width: 180px;
        margin-top: 3rem;
        margin-left: 6.8rem;
        font-size: 1.25rem;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
    h1{
        margin-left: 4rem;
    }
    .contact{
        margin-left: 4rem;
        width: 40rem;
    }
    button{
        margin-left: 25.6rem;
    }
}

</style>
