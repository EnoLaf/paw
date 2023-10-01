<!-- src/components/NavbarComponent.vue -->
<template>
      
    <div class="navigation">

      <ul class="menu">
        <li>
          <router-link to="/carnet-de-sante" class="link">
            <img width="50" height="50" src="https://img.icons8.com/ios/50/home--v1.png" alt="accueil"/>
            <p>Accueil</p>
          </router-link>
        </li>
        <li>
          <router-link to="/animal" class="link">
            <img width="50" height="50" src="https://img.icons8.com/ios/50/cat-footprint.png" alt="empreinte patte de chat"/>
            <p>Animal</p>
          </router-link>
        </li>
        <li>
          <router-link to="/rappel" class="link">
            <img width="50" height="50" src="https://img.icons8.com/ios/50/appointment-reminders--v1.png" alt="cloche rappels"/>
            <p>Rappel</p>
          </router-link>
        </li>
        <li>
          <router-link to="/plus" class="link">
            <img width="50" height="50" src="https://img.icons8.com/ios/50/ellipsis.png" alt="plus de détails"/>
            <p>Plus</p>
          </router-link>
        </li>
      </ul>

    </div>
      
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
.navigation{
  width: 100%;
  background: var(--logo-orange-15);
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.menu{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.menu li{
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.menu li .link{
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--black);
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  padding: 40px 80px;
}
p{
  margin-left: 1rem;
}

/* Responsive */
@media (max-width : 480px) {
  p{
    display: none;
  }
  .menu li .link{
    padding:15px 20px;
  }
}

@media (min-width: 481px) and (max-width : 1024px) {
  p{
    display: none;
  }
  .menu li .link{
    padding:15px 50px;
  }
}

</style>
 