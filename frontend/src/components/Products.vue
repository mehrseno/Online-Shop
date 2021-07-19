<template>
  <div :key="product.id" v-for="product in products" >
      <product :product="product" text="خرید محصول" />
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "Products",
  props: {
    products: Array,
  },
  components: {
      Product
  }
};
</script>

<style scoped>
    div {
        width: 100%;
    }
</style>