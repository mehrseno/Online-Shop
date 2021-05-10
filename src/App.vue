<template>
    <link href='http://www.fontonline.ir/css/BYekan.css' rel='stylesheet' type='text/css'>

  <div class="container">
    <Header/>
    <Footer/>
  </div>
</template>
  
<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: BYekan, 'BYekan', tahoma;
  font-size: 16px;
}

body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

a {
  text-decoration: none;
  color: white;
}

.container {
  background-color: brown;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  width: 100%;
}


</style>
