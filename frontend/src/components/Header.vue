<template>
    <header class="main-header">
        <a href="#" class="main-header__item main-header__logo">فروشگاه</a>
        <router-link to="/" class="main-header__item main-header__home">صفحه اول</router-link>
        <a href="#" class="main-header__item main-header__contact-us">تماس با ما </a>
        <a href="#" class="main-header__item main-header__support">پشتیبانی</a>
        <a href="#" class="main-header__item main-header__products">محصولات</a>
        <dropdown class="dropdown" title="هادی" :items="user_items"/>
        <RoundButton text="ورود / ثبت‌نام" class="main-header__button"/>
    </header>
</template>

<script>
import RoundButton from './RoundButton'
import Dropdown from './Dropdown.vue'

export default {
    name: 'Header',
    data() {
        return {
            user_items : [
                {
                    title: 'پروفایل',
                    link : '/user_profile'
                },
                {
                    title: 'خروج از حساب',
                    link : '/logout'
                }
            ]
        }
    },
    components: {
        RoundButton,
        Dropdown,
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

.dropdown {
    margin-right: auto;
    margin-left: 25px
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