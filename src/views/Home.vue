<template>
  <slider />
  <!-- <HeroNav /> -->
  <!-- For first phase -->
  <sort-box />
  <maincontainer />
</template>

<script>
import HeroNav from "@/components/HeroNav";
import Slider from "@/components/Slider";
import SortBox from "../components/SortBox.vue";
import Maincontainer from "../components/MainContainer.vue";

export default {
  name: "Home",
  components: {
    HeroNav,
    SortBox,
    Slider,
    Maincontainer,
  },
};
</script>
