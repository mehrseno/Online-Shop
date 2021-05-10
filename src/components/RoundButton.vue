<template>
    <button>{{text}}</button>
</template>

<script>
export default {
    name: 'RoundButton',
    props: {
        text: String,
    }
}
</script>

<style scoped>
    button {
        background-color: white;
        border: 2px solid #FFC70E;
        text-align: center;
        padding: 10px 20px;
        border-radius: 24px
    }

    button:hover {
        background: #FFC70E;
    }
</style>