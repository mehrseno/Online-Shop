<template>
  <link
    href="http://www.fontonline.ir/css/BYekan.css"
    rel="stylesheet"
    type="text/css"
  />

  <div class="container">
    <Header :total="cartTotalLength" />
      <router-view ></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cart: {
        items: []
      },
      cartTotalLength: Number,
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
    this.$store.commit('initializeStore')
    this.$store.commit('initializeToken')
  }, 
  computed: {
    cartTotalLength() {
      console.log('cartTotalLength')
      let totalLength = 0
      for (let i = 0; i< this.cart.items.length; i++){
        totalLength += this.cart.items[i].quantity
      }
      console.log(`totalLength`)
      return totalLength
    }
  },
  mounted() {
    console.log("in mounteed")
    this.cart = this.$store.state.cart
  },
};
</script>

<style>
@import "./assets/styles/variable.css";

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
