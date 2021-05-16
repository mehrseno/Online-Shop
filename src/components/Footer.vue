<template>
<footer>
    <p>
   تمامی حقوق برای توسعه‌دهندگان این سایت،  <a href="https://www.github.com/mrakhgari">اخگری</a>  و  <a href="https://github.com/mehrseno">صنوبری</a>،  محفوظ است.
    </p>
</footer>
</template>

<script>
export default {
    name: 'Footer',

}
</script>

<style scoped>
    footer {
        z-index: 100;
        bottom: 0;
        background-color: #313436;
        color: #878E93;
        text-align: center;
        position: fixed;
        max-width: 1280px;
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }    
</style>