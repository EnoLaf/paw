<script setup>
  import HeaderRecord from "../components/HeaderRecordComponent.vue";
  import NavbarIcon from "../components/NavbarIconComponent.vue";
  import Footer from "../components/FooterHealthRecordComponent.vue";
  import AddButton from "../components/ButtonAddComponent.vue";
  import Accordion from "../components/AccordionComponent.vue"
</script>

<template>

  <HeaderRecord></HeaderRecord>
  <NavbarIcon id="navbarTop"></NavbarIcon>

  <div class="container">

    <div class="left-part">
      <div class="pet" @click="showDetails">
        <img width="75" height="75" src="https://img.icons8.com/pastel-glyph/75/cat--v3.png" alt="cat--v3"/>
        <p>Mouchi</p>
      </div>

      <div class="content">
        <div class="first-col">
          <button class="button" id="reccords" @click="showReccords">Consultations</button>
          <button class="button" id="vaccines" @click="showVaccines">Vaccins</button>
        </div>
        <div class="second-col">
          <button class="button" id="documents" @click="showDocuments">Documents</button>
          <button class="button" id="weight" @click="showWeight">Poids</button>
          <button class="button" id="vet" @click="showVet">Vétérinaire</button>
        </div>
      </div>
    </div>

    <div class="right-part" v-if="detail || reccords || vaccines || documents || weight || vet">
      <div class="petDetails" v-if="detail">
        <div class="container-details">
          <div class="details-first-row">
            <div class="img"></div>
          </div>
          <div class="details-second-row">
            <div class="update">
              <p id="name">Mouchi</p>
              <img width="20" height="20" src="https://img.icons8.com/ios/20/edit--v1.png" alt="edit--v1"/>
            </div>
            <p id="breed">Européen</p>
            <p id="color">Blanc</p>
            <p id="dob">12/09/2016</p>
            <p id="gender">Femelle</p>
            <p id="sterilisation">Stérélisée</p>
          </div>
        </div>
        <div class="medical">
          <h3>Antécédents Médicaux</h3>
          <p>- Souffle au coeur <br>- Prothèse ligaments croisées patte arrière droite</p>
        </div>
        
        
      </div>

      <div class="reccords" v-if="reccords">
        <p>Liste des compte rendu</p>
        <Accordion
        title="Titre"
        date="04/10/2023"
        veterinary="Dr Test"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque consectetur mi a risus vehicula ultricies. Pellentesque 
        mattis odio nec ante hendrerit vestibulum. Praesent blandit sit amet 
        nulla luctus fringilla. Etiam volutpat dapibus quam eget vehicula. 
        Donec molestie vel mi quis convallis. Curabitur consequat elementum 
        nulla ac consequat. Proin ullamcorper ante ac sodales accumsan. 
        Curabitur ex lacus, dapibus sed eros ac, venenatis finibus mauris. 
        Suspendisse vel eros non risus lobortis convallis."
        ></Accordion>
        <Accordion
        title="Titre"
        date="04/10/2023"
        veterinary="Dr Test"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque consectetur mi a risus vehicula ultricies. Pellentesque 
        mattis odio nec ante hendrerit vestibulum. Praesent blandit sit amet 
        nulla luctus fringilla. Etiam volutpat dapibus quam eget vehicula. 
        Donec molestie vel mi quis convallis. Curabitur consequat elementum 
        nulla ac consequat. Proin ullamcorper ante ac sodales accumsan. 
        Curabitur ex lacus, dapibus sed eros ac, venenatis finibus mauris. 
        Suspendisse vel eros non risus lobortis convallis."
        ></Accordion>
        <Accordion
        title="Titre"
        date="04/10/2023"
        veterinary="Dr Test"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque consectetur mi a risus vehicula ultricies. Pellentesque 
        mattis odio nec ante hendrerit vestibulum. Praesent blandit sit amet 
        nulla luctus fringilla. Etiam volutpat dapibus quam eget vehicula. 
        Donec molestie vel mi quis convallis. Curabitur consequat elementum 
        nulla ac consequat. Proin ullamcorper ante ac sodales accumsan. 
        Curabitur ex lacus, dapibus sed eros ac, venenatis finibus mauris. 
        Suspendisse vel eros non risus lobortis convallis."
        ></Accordion>
        <Accordion
        title="Titre"
        date="04/10/2023"
        veterinary="Dr Test"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque consectetur mi a risus vehicula ultricies. Pellentesque 
        mattis odio nec ante hendrerit vestibulum. Praesent blandit sit amet 
        nulla luctus fringilla. Etiam volutpat dapibus quam eget vehicula. 
        Donec molestie vel mi quis convallis. Curabitur consequat elementum 
        nulla ac consequat. Proin ullamcorper ante ac sodales accumsan. 
        Curabitur ex lacus, dapibus sed eros ac, venenatis finibus mauris. 
        Suspendisse vel eros non risus lobortis convallis."
        ></Accordion>

        <div class="accordionComponent" v-for="report in jsonData" :key="report.id">
          <Accordion :title="report.name" :date="report.date" :veterinary="report.id_veterinary" :content="report.content"></Accordion>
        </div>
      </div>

      <div class="vaccines" v-if="vaccines">
        <p>Liste des vaccins</p>
      </div>

      <div class="documents" v-if="documents">
        <p>Liste des documents</p>
        <AddButton></AddButton>
      </div>
      
      <div class="weight" v-if="weight">
        <p>Courbe de poids</p>
      </div>

      <div class="vet" v-if="vet">
        <h1>Vétérinaire</h1>
        <h3>{{ vetName }}</h3>
        <p>{{ vetPhone }}<br>{{ vetUrl }}<br>{{ vetAddress }}</p>
      </div>
    </div>

  </div>

  <NavbarIcon id="navbarBottom"></NavbarIcon>
  <div class="footer">
    <Footer></Footer>
  </div>

</template>

<script>
export default {
name: "PetComponent",
components: {
      HeaderRecord,
      NavbarIcon,
      Footer,
      AddButton,
},
data() {
  return {
    detail : false,
    reccords : false,
    vaccines : false,
    documents : false,
    weight : false,
    vet : false,
  }
},
methods: {
  showDetails(){
    this.detail = true;
    this.reccords = false;
    this.vaccines = false;
    this.documents = false;
    this.weight = false;
    this.vet = false;
  },
  showReccords(){
    this.detail = false;
    this.reccords = true;
    this.vaccines = false;
    this.documents = false;
    this.weight = false;
    this.vet = false;
  },
  showVaccines(){
    this.detail = false;
    this.reccords = false;
    this.vaccines = true;
    this.documents = false;
    this.weight = false;
    this.vet = false;
  },
  showDocuments(){
    this.detail = false;
    this.reccords = false;
    this.vaccines = false;
    this.documents = true;
    this.weight = false;
    this.vet = false;
  },
  showWeight(){
    this.detail = false;
    this.reccords = false;
    this.vaccines = false;
    this.documents = false;
    this.weight = true;
    this.vet = false;
  },
  showVet(){
    this.detail = false;
    this.reccords = false;
    this.vaccines = false;
    this.documents = false;
    this.weight = false;
    this.vet = true;
  }
}
};
</script>

<style scoped>

#navbarBottom{
  display: none;
}
.container{
  display: flex;
  flex-direction: row;
}
.left-part{
  width: 37.43%;
  height: 34.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pet{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 22rem;
  height: 6rem;
  border-radius: 20px;
  background: rgba(255, 149, 5, 0.7);
}
.pet p{
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.content{
  display: flex;
  flex-direction: row;
  width: 22rem;
  align-items: center;
  justify-content: space-between;
}
.first-col{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.second-col{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button{
  width: 10.3rem;
  border-radius: 20px;
  margin-top: 1rem;
  border: none;
  font-size: 1.25rem;
}
#reccords{
  height: 10rem;
  background: rgba(255, 182, 39, 0.7);
} 
#vaccines{
  height: 10rem;
  background: rgba(226, 113, 29, 0.7);
}
#documents{
  height: 6.3rem;
  background: rgba(204, 88, 3, 0.7);
}
#weight{
  height: 6.3rem;
  background: rgba(255, 149, 5, 0.7);
}
#vet{
  height: 6.3rem;
  background: rgba(255, 182, 39, 0.7);
}
.right-part{
  width: 62.57%;
  height: 34.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-left: 2px solid var(--dark-orange);
  box-shadow: 5px 0px 4px 0px rgba(204, 88, 3, 0.25) inset;
}
.petDetails{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-details{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.img{
  background-image: url("../assets/mouchi.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 16rem;
  width: 16rem;
  border-radius: 15px;
  border: 2px solid var(--logo-orange);
}
.details-second-row{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 16rem;
  width: 16rem;
  margin-left: 3rem;
}
.details-second-row p{
  font-size: 1.25rem;
}
.update{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
}
.update p{
  font-size: 2.5rem;
  margin-right: 1rem;
}
.medical{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: rgba(255, 149, 5, 0.30);
  width: 62.57vw;
  height: 10rem;
  margin-top: 3rem;
}
.medical h3{
  margin-left: 5rem;
  font-size: 1.5rem;
  font-weight: 500;
}
.medical p{
  margin-left: 5rem;
  margin-top: 1rem;
  font-size: 1.25rem;
}
.vet{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5rem;
  margin-top: 2rem;
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
}

</style>
