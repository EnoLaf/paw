<!-- src/components/ButtonComponent.vue -->
<template>
    <button :style="{'--borderColor': borderColor, '--color': color, '--bgColor': bgColor, '--width': width, '--height': height, '--fontSize': fontSize}">{{ title }}</button>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        title: {
            type : String,
            required : true
        },
        borderColor: {
            type : String,
            required : true
        },
        color: {
            type : String,
            required : true
        },
        bgColor: {
            type : String,
            required : true
        },
        width: {
            type : String,
            required : true
        },
        height: {
            type : String,
            required : true
        },
        fontSize: {
            type: String,
            required : true
        }
    }
};
</script>

<style scoped>

    button{
        border: 2px solid var(--borderColor);
        color: var(--color);
        background: var(--bgColor);
        width: var(--width);
        height: var(--height);
        border-radius: 15px;
        font-family: 'Montserrat', sans-serif;
        font-size: var(--fontSize);
        outline: none;
    }
    
</style>
   