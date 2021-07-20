<template>
  <div class="page-cart">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">
          سبد خرید
        </h1>
      </div>
      <div class="column is-12 box">
        <table class="table" v-if="cartTotalLength">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <cart-item v-for="item in cart.items" v-bind:key="item.product.id"
            v-bind:initialItme="item" v-on:removeFromCart="removeFromCart" />
          </tbody>
        </table>
        <p v-else>You dont have any product in your cart...</p>
      </div>
      <div class="box">
        <h2 class="subtitle">Summary</h2>
        <strong>{{ cartTotalPrice }}</strong>
        {{ cartTotalLength }} items
        <hr />
        <router-link to="/cart/checkout" class="is dark"
          >Proceed to checkout</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getAPI } from "./../axios-api";
import CartItem from "./../components/CartItem.vue";

export default {
  name: "Cart",
  components: { CartItem },
  data() {
    return {
      cart: {
        items: [],
      },
    };
  },
  methods: {
      removeFromCart(item) {
          this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
      }
  },
  mounted() {
    this.cart = this.$store.state.cart;
    console.log(this.cart);
    console.log(`in cart ${this.cart}`);
  },
  computed: {
    cartTotalLength() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },
    cartTotalPrice() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.product.price * curVal.quantity);
      }, 0);
    },
  },
};
</script>

<style scoped>
.page-cart {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
}
.title {
  position: absolute;
  top: 100px;
  font-size: 50px;
  width: 100%;
  text-align: right;
}
/* .column,
.columns {
  width: 100%;
}

table {
  border-collapse: collapse;
  width: 100%;
  height: 50%;
}

table td {
  padding: 10px 0px;
  background-color: var(--element-background);
  color: var(--subtext-dark-color);
  text-align: justify;
  border-bottom: 2px solid var(--primary-background);
  font-size: 14px;
  padding-right: 50px;
}
table th {
  padding: 20px 0px;
  background-color: var(--element-background);
  color: rgb(181, 183, 189);
  border-bottom: 2px solid var(--primary-background);
  text-align: justify;
  padding-right: 50px;
} */
</style>
