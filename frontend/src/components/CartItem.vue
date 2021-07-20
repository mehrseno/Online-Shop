<template>
  <tr>
    <td>
      <router-link :to="item.product.get_absolute_url">
        {{ item.product.name }}</router-link
      >
      <td>${{item.product.price}}</td>
      <td>{{item.quantity}}
        <a @click="decrementQuantity(item)">-</a>
        <a @click="incrementQuantity(item)">+</a>
      </td>
      <td>{{getItemTotal(item)}}</td>
      <td><button class="delete" @click="removeFromCart(item)"> حذف</button></td>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    initialItme: Object,
  },
  data() {
    return {
      item: this.initialItme,
    };
  },
  methods: {
    getItemTotal(item) {
      return item.quantity * item.product.price;
    },
    decrementQuantity(item){
      item.quantity -= 1
      if (item.quantity === 0)
      {
        this.$emit('removeFromCart', item)
      }
      this.updateCart(); 
    },
    incrementQuantity(item){
      item.quantity += 1
      this.updateCart(); 
    },
    updateCart(){
      localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
},
removeFromCart(item) {
  this.$emit('removeFromCart', item)
  this.updateCart( )
}
  },
};
</script>

<style scoped>
/* 
tr {
  width: 1000px;
  background: black;
}
td, router-link {
  padding: 10px 0px;
  background-color: var(--element-background);
  color: var(--subtext-dark-color);
  text-align: justify;
  border-bottom: 2px solid var(--primary-background);
  font-size: 14px;
  padding-right: 50px;
}
th {
  width: 100%;
  padding: 20px 0px;
  background-color: var(--element-background);
  color: rgb(181, 183, 189);
  border-bottom: 2px solid var(--primary-background);
  text-align: justify;
  padding-right: 50px;
} */

</style>
