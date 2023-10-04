<!-- src/components/AccordionComponent.vue -->
<template>
    <div class="accordion">
        <div class="header">
            <div class="top">
                <h1>{{ title }}</h1>
                <h2>{{ veterinary }}</h2>
                <h3>{{ date }}</h3>
            </div>
            <svg @click="openAccordion" v-if="!click" xmlns="http://www.w3.org/2000/svg" width="19" height="34" viewBox="0 0 19 34" fill="none">
                <path d="M2 2L16.2929 16.2929C16.6834 16.6834 16.6834 17.3166 16.2929 17.7071L2 32" stroke="black" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <svg @click="closeAccordion" v-if="click" xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
                <path d="M25.6113 2.29731L14.6663 13.7072C14.2727 14.1175 13.6166 14.1175 13.223 13.7072L2.27799 2.29731" stroke="black" stroke-width="3" stroke-linecap="round"/>
            </svg>
        </div>
        <div v-if="click" class="content">
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AccordionComponent",
    props: {
        title : {
            type : String,
            required : true
        },
        veterinary : {
            type : String,
            required : true
        },
        date : {
            type : String,
            required : true
        },
        content : {
            type : String,
            required : true
        }
    },
    data() {
      return {
        click : false
      }
    },
    methods: {
      openAccordion(){
        this.click = true;
      },
      closeAccordion(){
        this.click = false;
      }
    }
};
</script>

<style scoped>
.accordion{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-around;
    width: 45rem;
    border-radius: 8px;
    border: 2px solid black;
    padding: 1.5rem;
    margin-left: auto;
    margin-right: auto;
}
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.top{
    display: flex;
    flex-direction: column;
}
.top h1, .top h2, .top h3{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}
h1{
    font-size: 1.5rem;
}
h2{
    font-size: 1.25rem;
}
h3{
    font-size: 1rem;
}
.content p{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    width: 40rem;
    margin-top: 1.25rem;
}

/* Responsive */
@media (max-width : 480px) {
    .accordion{
        width: 19rem;
    }
    .header h1{
        font-size: 1rem;
        width: 8.25rem;
    }
    .content p{
        font-size: 0.875rem;
        width: 16rem;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
    .accordion{
        width: 41rem;
    }
    .header h1{
        font-size: 1.125rem;
    }
    .content p{
        font-size: 1rem;
        width: 35rem;
    }
}

</style>
   