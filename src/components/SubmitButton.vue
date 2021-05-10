<template>
    <button @click="onClick()">{{submit}}</button>    
</template>

<script>
export default {
    name: "SubmitButton",
    props: {
        submit: String,
    },
    methods: {
        onClick() {
            console.log(`clicked on ${this.submit}`);
        },
    }
}
</script>
<style scoped>

button {
    width: 18%;
    height: 3rem;
    color: black;
    border-radius: 24px;
    padding: 0;
    font-weight: bold;
    background: #FFC70E;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    margin-bottom: 30px;
}

button:hover {
    color: white;
    background: transparent;
    box-shadow: none;
}

button:before, button:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #FFC70E;
    box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003, 4px 4px 5px 0px #0002;
    transition: 400ms ease all;
}

button:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
}

button:hover:before, button:hover:after {
    width: 100%;
    transition: 800ms ease all;
}


</style>