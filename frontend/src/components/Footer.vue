<template>
<footer>
    <p>
   تمامی حقوق برای توسعه‌دهندگان این سایت،  <a target="_blank" href="https://www.github.com/mrakhgari">اخگری</a>  و  <a target="_blank" href="https://github.com/mehrseno">صنوبری</a>،  محفوظ است.
    </p>
</footer>
</template>

<script>
export default {
    name: 'Footer',

}
</script>

<style scoped>
    a {
        color: var(--text-light-color);
    }
    
    footer {
        z-index: 100;
        bottom: 0;
        background-color: var(--dark-background);
        color: var(--subtext-dark-color);
        position: fixed;
        max-width: var(--max-width);
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }    
</style>