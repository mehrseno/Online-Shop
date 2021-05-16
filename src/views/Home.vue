<template>
  <HeroNav />
  <sort-box />
  <maincontainer />
</template>

<script>
import HeroNav from "../components/HeroNav";
import SortBox from "../components/SortBox.vue";
import Maincontainer from "../components/MainContainer.vue";

export default {
  name: "Home",
  components: {
    HeroNav,
    SortBox,
    Maincontainer,
  },
};
</script>
