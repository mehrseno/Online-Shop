<template>
    <header class="main-header">
        <a href="#" class="main-header__item main-header__logo">فروشگاه</a>
        <a href="index.html" class="main-header__item main-header__home">صفحه اول</a>
        <a href="#" class="main-header__item main-header__contact-us">تماس با ما </a>
        <a href="#" class="main-header__item main-header__support">پشتیبانی</a>
        <a href="#" class="main-header__item main-header__products">محصولات</a>
        <button class="main-header__button">ورود / ثبت‌نام </button>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
    header {
        background-color: blueviolet;
    }


.main-header {
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
    background-color: white;
    border: 2px solid #FFC70E;
    text-align: center;
    padding: 10px 20px;
    border-radius: 24px
}

.main-header__button:hover{
    background-color: #FFC70E;
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