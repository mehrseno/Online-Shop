<template>
    <div class="hero-nav">
        <h1 class="hero-nav__title">یه نگاهی به دکان بنداز...</h1>
        <form class="search-wrapper">
            <input type="text" class="search-wrapper__input" placeholder="نام محصول خود را وارد کنید...">
            <SubmitButton submit="جستجو کنید"/>
        </form>
        <img src="@/assets/images/clock.png" class="hero-nav__image">
    </div>
      
</template>

<script>
import SubmitButton from './SubmitButton.vue'
export default {
  components: { SubmitButton },
    name: "HeroNav"
}
</script>

<style scoped>

.hero-nav {
    background-color: #F9583B;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 10%;
}

.hero-nav__title {
    color: #FAFAF7;
    font-size: 200%;
    margin-bottom: 40px;
    text-align: center;
}

.hero-nav__image {
    width: 50%;
    margin-bottom: 0px;
    padding-bottom: 0px;
}


.search-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.search-wrapper__input {
    background-color: #F7F8FA;
    border-radius: 10px;
    margin-bottom: 35px;
    border: none;
    text-align: center;
    width: 62%;
    height: 40px;
}

.search-wrapper__input::placeholder {
    color: #C4C5C7;
}
</style>