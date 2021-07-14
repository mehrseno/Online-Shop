<template>
  <link
    href="http://www.fontonline.ir/css/BYekan.css"
    rel="stylesheet"
    type="text/css"
  />

  <div class="container">
    <Header />
    <router-view></router-view>
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
  background: var(--simple-button-background);
  color: white !important;
  padding: 5px 10px 5px 10px;
  border-radius: 30px;
  box-shadow: 1px 1px 2px black, 3px 2px 5px #8dd2fa;
}
</style>
