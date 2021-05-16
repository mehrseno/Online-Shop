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
    width: 100%;
    max-width: var(--max-width);
    height: 65px;
    
    background-color: var(--element-background);
    display: flex;
    align-items: center;
    
    position: fixed;
    z-index: 100;
}

.main-header__item {
    color: var(--subtext-dark-color);
    margin: 25px;
}

.main-header__button {
    margin-right: auto; /* for justify self to right side */
    margin-left: 25px;
}


.main-header__logo {
    margin: 25px;
    font-size: 120%;
    color: var(--text-hover-color);
    font-weight: bold;
}

.main-header__item:hover {
    color: var(--text-hover-color);
}

</style>