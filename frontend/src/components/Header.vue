<template>
  <header class="main-header">
    <a href="#" class="main-header__item main-header__logo">فروشگاه</a>
    <router-link to="/" class="main-header__item main-header__home"
      >صفحه اول</router-link
    >
    <a href="#" class="main-header__item main-header__contact-us"
      >تماس با ما
    </a>
    <a href="#" class="main-header__item main-header__support">پشتیبانی</a>
    <router-link
      :to="{
        name: 'Home',
        hash: '#page_content',
      }"
      class="main-header__item main-header__products"
      >محصولات</router-link
    >

    <div class="left-side">
      <router-link to="/cart" class="cart">
        <span class="icon"> <i class="fas fa-shopping-cart"></i></span>
        <span> کارت ({{ total }}) </span>
      </router-link>

      <dropdown
        v-if="$store.state.isAuthenticated"
        class="dropdown"
        title="هادی"
        :items="user_items"
      />
      <RoundButton
        v-if="!$store.state.isAuthenticated"
        text="ورود / ثبت‌نام"
        class="main-header__button"
      />
    </div>
  </header>
</template>

<script>
import RoundButton from "./RoundButton";
import Dropdown from "./Dropdown.vue";

export default {
  name: "Header",
  props: {
    total: Number,
  },
  data() {
    return {
      user_items: [
        {
          title: "پروفایل",
          link: "/user_profile",
        },
        {
          title: "خروج از حساب",
          link: "/logout",
        },
      ],
      isLogin: true,
    };
  },
  components: {
    RoundButton,
    Dropdown,
  },
  methods: {
    goto(refName) {
      // var element = this.$refs[refName];
      console.log(refName);
      // console.log(element)
      // var top = element.offsetTop;
      console.log("clicked on go to ");
      // window.scrollTo(0, top);
      //  document.getElementById(refName).scrollIntoView({
      // behavior: "smooth"
      // });
    },
  },
};
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
  /* margin-right: auto; */
  margin-left: 25px;
}

.main-header__button {
  /* margin-right: auto; for justify self to right side */
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

.left-side {
  margin-right: auto;
  display: flex;
  gap: 10px;
}

.cart {
  background: var(--simple-button-background);
  border-radius: 20px;
  height: 2.8rem;
  padding: 10px;
}
</style>
