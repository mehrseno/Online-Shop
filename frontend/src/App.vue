<template>
  <link
    href="http://www.fontonline.ir/css/BYekan.css"
    rel="stylesheet"
    type="text/css"
  />

  <div
    class="is-loading-bar has-text-centered"
    :class="{ 'is-loading': $store.state.isLoading }"
  >
    <div class="lds-dual-ring"></div>
  </div>

  <div class="container">
    <Header :total="cartTotalLength" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import store from "./store";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cart: {
        items: [],
      },
      token: "",
      cartTotalLength: Number,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
    this.$store.commit("initializeStore");
    this.$store.commit("initializeToken");
    const token = this.$store.state.token;
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
  computed: {
    cartTotalLength() {
      console.log("cartTotalLength");
      let totalLength = 0;
      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity;
      }
      console.log(`totalLength`);
      return totalLength;
    },
  },
  mounted() {
    console.log("in mounteed");
    this.cart = this.$store.state.cart;
  },
};
</script>

<style>
@import "./assets/styles/variable.css";

.lds-dual-ring{
  display: inline-block;
  width: 80px;
  height: 80px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(360deg);
  }
}

.is-loading-bar {
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  /* &.is-loading {
    height: 80px;
  } */
}

* {
  margin: 0;
  padding: 0;
  font-family: BYekan, "BYekan", tahoma;
  font-size: var(--default-font-size);
  box-sizing: border-box;
}

body {
  background: var(--primary-background);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  color: white;
}

#app {
  display: flex;
  max-width: var(--max-width);
  width: 100%;
}

/* global styles */

.is_active {
  background: var(--simple-button-background) !important;
  color: white !important;
  padding: 5px 10px 5px 10px;
  border-radius: 30px;
  box-shadow: 1px 1px 2px black, 3px 2px 5px #8dd2fa;
}
</style>
