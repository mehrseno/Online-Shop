<template>
    <link href='http://www.fontonline.ir/css/BYekan.css' rel='stylesheet' type='text/css'>

  <div class="container">
    <Header/>
    <HeroNav/>
    <sort-box/>
    <Footer/>
  </div>
</template>
  
<script>
import Header from './components/Header'
import HeroNav from './components/HeroNav'
import Footer from './components/Footer'
import SortBox from './components/SortBox.vue'

export default {
  name: 'App',
  components: {
    Header,
    HeroNav,
    Footer,
    SortBox
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: BYekan, 'BYekan', tahoma;
  font-size: 16px;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.container {
  width: 100%;
}

a {
  text-decoration: none;
  color: white;
}

#app{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  width: 100%;
}


</style>
