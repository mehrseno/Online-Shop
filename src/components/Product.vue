<template>
  <div class="product">
    <div
      v-show="product.has_count"
      :class="[product.has_count ? 'product__count' : '', product]"
    >
      {{ product.count }}
    </div>
    <img class="product__image" :src="product.image" />
    <h1 class="product__name">{{ product.title }}</h1>
    <h3 class="product__category">{{ product.category }}</h3>
    <!-- <span class="sprator"> -->
      <div class="down-side">
        <h6 class="product__price">{{ product.price }} تومان</h6>
        <button class="buy-button is_active">{{ text }}</button>
      </div>
    <!-- </span> -->
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
  min-height: 500px;
  height: 500px;
  gap: 10px;
}

.product__image {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 20px;
}


.product__name {
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
}
.product__category {
  color: #bbb;
  font-size: 15px;
}

.down-side {
  justify-content: space-around;
  margin-top:  10px ;
  width: 90%;
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 40px;
  left: 0;
  margin-left: 5%;
  border-top: #bbb 2px solid;
  padding-top: 10px;
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
  width: 50px;
  box-shadow: 2px 2px 0px #ccc;
  background: white;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: var(--simple-button-background);
}
</style>
