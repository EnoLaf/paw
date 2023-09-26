<!-- src/components/InputLabelComponent.vue -->
<script setup>
</script>

<template>
    <div class="container">
        <input @keyup="inputValue" v-model="value" type="" placeholder="" :style="{'--borderColor': borderColor, '--bgColor': bgColor, '--fontSize': fontSize, '--widthDesktop': widthDesktop, '--widthMobile': widthMobile, '--height': height}">
        <span :style="{'--bgColor': bgColor, '--fontSizeLabel': fontSizeLabel}">{{ title }}</span>
    </div>
</template>

<script>

  export default {
    name: "InputLabelComponent",
    props: {
        borderColor: {
            type : String,
            required : true
        },
        bgColor: {
            type : String,
            required : true
        },
        fontSize: {
            type : String,
            required : true
        },
        widthDesktop: {
            type : Number,
            required : true
        },
        widthMobile: {
            type : Number,
            required : true
        },
        height: {
            type : Number,
            required : true
        },
        title: {
            type : String,
            required : true
        },
        fontSizeLabel: {
            trype : String,
            required : true
        }
    },
    data(){
        return {
            value:''
        }
    },
    emits: ['send-value'],
    methods: {
        inputValue(){
            this.$emit('send-value', this.value);
        }
    }
    
  }
</script>

<style scoped>
    
    .container{
        text-align: left;
    }

    input{
        font-family: 'Montserrat', sans-serif;
        padding-top: 10px;
        padding-left: 20px;
        border-radius: 20px;
        border: 2px solid var(--borderColor);
        background-color: var(--bgColor);
        font-size: var(--fontSize);
        outline: none;
        width: var(--widthDesktop);
        height: var(--height);
    }

    span{
        position: absolute;
        left: 0;
        padding: 10px;
        pointer-events: none;
        font-family: 'Montserrat', sans-serif;
        font-size: var(--fontSizeLabel);
        transform: translateX(33.5rem) translateY(-15px);
        padding: 0 10px;
        background: var(--bgColor);
    }
</style>