<script setup>
  import HeaderRecord from "../components/HeaderRecordComponent.vue";
  import NavbarIcon from "../components/NavbarIconComponent.vue";
  import ButtonSpecieLeftIcon from "../components/ButtonSpecieLeftIconComponent.vue"
  import ButtonSpecieRightIcon from "../components/ButtonSpecieRightIconComponent.vue"
  import ButtonAdd from "../components/ButtonAddComponent.vue"
  import Footer from "../components/FooterHealthRecordComponent.vue"
  import Cats from "../components/CatsPatternComponent.vue"
  import Dogs from "../components/DogsPatternComponent.vue"
  import Nacs from "../components/NacsPatternComponent.vue"
  import InputLabel from "../components/InputLabelComponent.vue";
  import ButtonComponent from "../components/ButtonComponent.vue";
</script>

<template>

  <HeaderRecord></HeaderRecord>
  <NavbarIcon></NavbarIcon>

  <div class="container">

    <div class="left-part">
      
      <div class="reminder">
        <img width="50" height="50" src="../assets/alerte.png" alt="calendar--v1"/>
        <p>22/09/2023 11h <br>Vaccin Mouchi</p>
      </div>

      <ButtonSpecieLeftIcon @click="activeCats" text="CHAT" :link="linkCat" bgColor="#FF950526" borderColor="#FF9505"></ButtonSpecieLeftIcon>
      <ButtonSpecieRightIcon @click="activeDogs" text="CHIEN" :link="linkDog" bgColor="#E2711D26" borderColor="#E2711D"></ButtonSpecieRightIcon>
      <ButtonSpecieLeftIcon @click="activeNacs" text="NAC" :link="linkNAC" bgColor="#CC580326" borderColor="#CC5803"></ButtonSpecieLeftIcon>

      <ButtonAdd @click="showAddAnimal"></ButtonAdd>

    </div>
    
    <div class="right-part" v-if="cats">
      <Cats></Cats>
    </div>
    <div class="right-part" v-if="dogs">
      <Dogs></Dogs>
    </div>
    <div class="right-part" v-if="nacs">
      <Nacs></Nacs>
    </div>
  </div>

  <section class="addAnimal" v-if="add">

      <div class="blur" @click.self="close">
        <div class="frame">
          <div class="close">
            <img width="40" height="40" src="https://img.icons8.com/ios/100/delete-sign--v1.png" alt="croix" @click="close"/>
          </div>

          <div class="inputs" v-if="!more">

            <div class="selectBorder">
              <label for="select">Espèce</label>
              <select name="item" id="select">
                <option value="">--Chat/Chien/NAC--</option>
                <option value="1">Chat</option>
                <option value="2">Chien</option>
                <option value="3">NAC</option>
              </select>
            </div>

            <InputLabel @send-value="inputBreed" class="input"
              type="text" 
              placeholder="Race" 
              borderColor="#FFB627" 
              bgColor="#FEF9F0" 
              fontSize="18px" 
              fontSizeLabel="24px" 
              widthDesktop="400px"
              widthMobile="300px"  
              height="60px" 
              title="Race">
            </InputLabel>
            <InputLabel @send-value="inputName" class="input"
              type="text" 
              placeholder="Nom" 
              borderColor="#FF9505" 
              bgColor="#FEF9F0" 
              fontSize="18px" 
              fontSizeLabel="24px" 
              widthDesktop="400px"
              widthMobile="300px" 
              height="60px" 
              title="Nom">
            </InputLabel>

            <div class="dob">
              <input type="date" :style="{'--borderColor': borderColor, '--bgColor': bgColor, '--fontSize': fontSize, '--width': width, '--height': height}">
              <span>Date de naissance</span>
            </div>

            <div class="radioBorder" :style="{'--borderColor': borderColor, '--bgColor': bgColor, '--width': width, '--height': height, '--fontSize': fontSize}">
              <span>Sexe</span>
              <div class="radio">
                  <div class="radio1">
                    <input type="radio" id="female" name="sexe" value="1">
                    <label for="female">Femelle</label>
                  </div>
                  <div class="radio2">
                    <input type="radio" id="male" name="sexe" value="0" class="male">
                    <label for="male">Mâle</label>
                  </div>
              </div>
            </div>

          </div>

          <div class="inputsDetails" v-if="more">
            <InputLabel @send-value="inputColor" class="input" id="colorInput"
              type="text" 
              placeholder="Couleur" 
              borderColor="#FFC971" 
              bgColor="#FEF9F0" 
              fontSize="18px" 
              fontSizeLabel="24px" 
              widthDesktop="400px" 
              widthMobile="300px"
              height="60px" 
              title="Couleur">
            </InputLabel>
            <InputLabel @send-value="inputIdChip" class="input"
              type="text" 
              placeholder="N° Puce" 
              borderColor="#FFB627" 
              bgColor="#FEF9F0" 
              fontSize="18px" 
              fontSizeLabel="24px" 
              widthDesktop="400px" 
              widthMobile="300px" 
              height="60px" 
              title="N° Puce">
            </InputLabel>
            <InputLabel @send-value="inputWeight" class="input"
              type="text" 
              placeholder="Poids" 
              borderColor="#FF9505" 
              bgColor="#FEF9F0" 
              fontSize="18px" 
              fontSizeLabel="24px" 
              widthDesktop="400px" 
              widthMobile="300px"
              height="60px" 
              title="Poids">
            </InputLabel>
            
            <div class="textArea">
              <textarea name="medicalHistory" id="" cols="36" rows="4"></textarea>
                <span>Historique Médical</span>
            </div>

            <div id="checkbox">
              <label for="check">Animal stérélisé</label>
              <input type="checkbox" id="check">
            </div>

          </div>

          <div class="buttons">

            <ButtonComponent v-if="!more" @click="showMore" class="button"
              title="Plus de détails" 
              borderColor="#FF9505" 
              color="#FF9505" 
              bgColor="#FEF9F0" 
              width="250px" 
              height="45px" 
              fontSize="26px" >
            </ButtonComponent>
            <ButtonComponent v-if="more" @click="showLess" class="button"
              title="Retour" 
              borderColor="#FF9505" 
              color="#FF9505" 
              bgColor="#FEF9F0" 
              width="250px" 
              height="45px" 
              fontSize="26px">
            </ButtonComponent>
            <ButtonComponent class="button"
              title="Ajouter Animal" 
              borderColor="#FF9505" 
              color="#FEF9F0" 
              bgColor="#FF9505" 
              width="250px" 
              height="45px" 
              fontSize="26px">
            </ButtonComponent>

          </div>
        </div>
      </div>

  </section>

  <div class="footer">
    <Footer></Footer>
  </div>
</template>

<script>
export default {
name: "HealthRecordComponent",
components: {
      HeaderRecord,
      NavbarIcon,
      ButtonSpecieLeftIcon,
      ButtonSpecieRightIcon,
      ButtonAdd,
      Cats,
      Dogs,
      Nacs,
      Footer,
},
data() {
  return {
    linkCat: 'img/chat-50.png',
    linkDog: 'img/chien-50.png',
    linkNAC: 'img/chinchilla-50.png',
    cats : false,
    dogs : false,
    nacs : false,
    add : false,
    more : false,
    animalData:{
      specie : '',
      breed : '',
      name : '',
      dob : '',
      gender : '',
      color : '',
      idChip : '',
      weight : '',
      serelisation : ''
    }
  }
},
methods: {
  activeCats(){
    this.cats = true;
    this.dogs = false;
    this.nacs = false;
  },
  activeDogs(){
    this.cats = false;
    this.dogs = true;
    this.nacs = false;
  },
  activeNacs(){
    this.cats = false;
    this.dogs = false;
    this.nacs = true;
  },
  showAddAnimal(){
    this.add = true;
  },
  showMore() {
    this.more = true;
  },
  showLess() {
      this.more = false;
  },
  close(){
    this.add = false;
  },
  inputBreed(value){
    this.animalData.breed = value;
  },
  inputName(value){
    this.animalData.name = value;
  },
  inputColor(value){
    this.animalData.color = value;
  },
  inputIdChip(value){
    this.animalData.idChip = value;
  },
  inputWeight(value){
    this.animalData.weight = value;
  },
  addAnimal(){
    fetch('https://127.0.0.1:8000/api/animal/add', {
            method: 'POST',
            headers: {},
            body: JSON.stringify(this.animalData)
        })
            .then(blob => blob.json())
            .then(data => {
              if(data.Token_JWT){
                localStorage.setItem('token', data.Token_JWT)
                this.$router.push('/specie')
              }
            })
  }
}
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
}
.reminder{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.reminder p{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  padding-left: 10px;
}
.left-part{
  width: 37.43%;
  height: 34.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.close{
  position: absolute;
  top: 9rem;
  right: 23rem;
}
.input{
  margin-bottom: 1rem;
}
.buttons{
  display: flex;
  flex-direction: column;
}
.button{
  margin-bottom: 1rem;
}
.selectBorder{
  border-radius: 20px;
  border: 2px solid #FFC971;
  background-color: #FEF9F0;
  width: 400px;
  height: 60px;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
.selectBorder label{
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 24px;
  transform: translateX(33.5rem) translateY(-15px);
  padding: 0 10px;
  background: #FEF9F0;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
}
select{
  background-color: transparent;
  font-size: 18px;
  border: none;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
}
.dob{
  text-align: left;
  margin-bottom: 1rem;
}
.dob input{
  font-family: 'Montserrat', sans-serif;
  padding-top: 10px;
  padding-left: 20px;
  border-radius: 20px;
  border: 2px solid #E2711D;
  background-color: #FEF9F0;
  font-size: 18px;
  outline: none;
  width: 400px;
  height: 60px;
}
.dob span{
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  transform: translateX(33.5rem) translateY(-15px);
  padding: 0 10px;
  background: #FEF9F0;
}
.radioBorder{
  border-radius: 20px;
  border: 2px solid #CC5803;
  background-color: #FEF9F0;
  width: 400px;
  height: 60px;
}
.radioBorder span{
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 24px;
  transform: translateX(33.5rem) translateY(-17px);
  padding: 0 10px;
  background: #FEF9F0;
  font-family: 'Montserrat', sans-serif;
}
.radio{
  background-color: transparent;
  font-size: 18px;
  border: none;
  padding: 20px;
  display: flex;
  flex-direction: row;
}
.radio2{
  padding-left: 20px;
}
.radio1 label, .radio2 label{
  padding-left: 10px;
  font-family: 'Montserrat', sans-serif;
}
#colorInput{
  margin-top: 2rem;
}
.textArea{
  margin-bottom: 1rem;
}
.textArea textarea{
  font-family: 'Montserrat', sans-serif;
  padding-top: 10px;
  padding-left: 20px;
  border-radius: 20px;
  border: 2px solid #E2711D;
  background-color: #FEF9F0;
  font-size: 18px;
  outline: none;
}

.textArea span{
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  transform: translateX(33.5rem) translateY(-15px);
  padding: 0 10px;
  background: #FEF9F0;
}
input[type="checkbox"]{
  appearance: none;
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  background-color:#FEF9F0;
  border-radius: 5px;
  border: 2px solid #CC5803;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

input[type="checkbox"]:after{
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  content: "\f00c";
  font-size: 15px;
  color: #FEF9F0;
  display: none;
}

input[type="checkbox"]:checked{
  background-color:#CC5803;
}

input[type="checkbox"]:checked:after{
  display: block;
}
#check{
  margin-left: 10px;
}

#checkbox{
  display: flex;
  align-items: center;
}

#checkbox label{
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #1C1917;
}

/* Responsive */
@media (max-width : 480px) {
    .footer{
      display: none;
    }
    .right-part{
      display: none;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
  .footer{
    display: none;
  }
  .right-part{
    display: none;
  }
}

</style>
