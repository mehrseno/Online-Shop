<template>
    <header class="main-header">
        <a href="#" class="main-header__item main-header__logo">فروشگاه</a>
        <a href="#" class="main-header__item main-header__home">صفحه اول</a>
        <a href="#" class="main-header__item main-header__contact-us">تماس با ما </a>
        <a href="#" class="main-header__item main-header__support">پشتیبانی</a>
        <a href="#" class="main-header__item main-header__products">محصولات</a>
        <RoundButton text="ورود / ثبت‌نام" class="main-header__button"/>
    </header>
</template>

<script>
import RoundButton from './RoundButton'

export default {
    name: 'Header',
    components: {
        RoundButton
    }
}
</script>

<style scoped>
.main-header {
    z-index: 100;
    background-color: #ffff;
    height: 65px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    position: fixed;
}

.main-header__item {
    color: rgb(144, 144, 144);
    margin: 25px;
}

.main-header__button {
    margin-right: auto; /* for justify self to right side */
    margin-left: 25px;
}


.main-header__logo {
    margin: 25px;
    font-size: 120%;
    color: rgb(14, 186, 197);
    font-weight: bold;
}

.main-header__item:hover {
    color: rgb(14, 186, 197);
}

</style>