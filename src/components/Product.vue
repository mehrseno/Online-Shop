<template>
  <div class="product">
    <div :class="[product.has_count ? 'product__count' : '', product]">
      {{ product.count }}
    </div>
    <img
      class="product__image"
      :src="require(`@/assets/images/${product.image}`)"
    />
    <h1 class="product__name">{{ product.title }}</h1>
    <h3 class="product__category">{{ product.category }}</h3>
    <span class="sprator"></span>
    <div class="down-side">
      <h6 class="product__price">{{ product.price }} تومان</h6>
      <button class="buy-button is_active">{{text}}</button>
    </div>
  </div>
</template>

<script>
import RoundButton from "./RoundButton.vue";
export default {
  name: "Product",
  props: {
    product: Object,
    text: String,
  },
  components: {
    RoundButton,
  },
};
</script>

<style scoped>
.product {
  z-index: 0;
  position: relative;
  padding: 20px;
  border: 0.1rem solid #bbb;
  display: flex;
  flex-direction: column;
  background: white;
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

.down-side {
  justify-content: space-around;
  width: 100%;
  display: flex;
  gap: 10px;
}

.buy-button {
  border: none;
}
.product__price {
  align-self: center;
}

.product__count {
  position: absolute;
  z-index: 10;
  left: -10px;
  top: -10px;
  background: 0;
  border-radius: 50%;
  width: 35px;
  box-shadow: 2px 2px 0px #ccc;
  background: white;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: var(--simple-button-background);
}
</style>
