<template>
  <div class="product">
    <img
      class="product__image"
      :src="require(`@/assets/images/${product.image}`)"
    />
    <h1 class="product__name">{{ product.title }}</h1>
    <h3 class="product__category">{{ product.category }}</h3>
      <span class="sprator"></span>
    <div class="down-side">
      <h6 class="product__price">{{ product.price }} تومان</h6>
      <round-button text="خرید" />
    </div>
  </div>
</template>

<script>
import RoundButton from "./RoundButton.vue";
export default {
  name: "Product",
  props: {
    product: Object,
  },
  components: {
    RoundButton,
  },
};
</script>

<style scoped>
.product {
  padding: 20px;
  border: 0.3rem solid #bbb;
  display: flex;
  flex-direction: column;
  background: white;
  gap: 10px;
}

.product__price {
    align-self: center;
}

.down-side {
    justify-content: space-around;
    width: 100%;
    display: flex;
    gap: 10px;
}

.product__category {
  color: #bbb;
}

.product__name {
  font-weight: bold;
  font-size: 2rem;
}

.sprator {
  width: 100%;
  height: 2px;
  background: #bbb;
}
.product__image {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 20px;
}

round-button {
    align-self: flex-end;
    background: blue;
}
</style>
