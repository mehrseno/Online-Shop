<template>
  <div class="card price-box">
    <div class="card__header price-box__header">
      تنظیم قیمت کالا
    </div>

    <div class="price-box__slider">
      <Slider dir="ltr" v-model="value" :min="min" :max="max"> </Slider>
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      value: [0, 500],
      min: 0,
      max: 500,
    };
  },
};
</script>
<style scoped>
/* .multiselect-spinner:before,
.multiselect-spinner:after {
  background-color: brown !important ;
}
.multiselect-tag {
  background-color: brown !important ;
}

.multiselect-option.is-selected {
  background-color: brown !important ;
}
*/

.price-box {
  width: 100%;
  height: 13vh;
}

.price-box__slider {
  width: 80%;
  margin: auto;
}

</style>

<style src="@vueform/slider/themes/default.css"></style>