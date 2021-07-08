<template>
  <div class="product_con">
    <div class="is_active button">+ ایجاد محصول جدید</div>
    <div class="products">
      <product
        :key="product.id"
        v-for="product in products"
        :product="product"
        text="ویرایش محصول"
      />
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "AdminProfileProducts",
  components: {
    Product,
  },
  props: {
    products: Array,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.products = [
      {
        id: 1,
        has_count: true,
        count: 3,
        image: "products/pet-shop.png",
        title: "کیف سگی",
        category: "سگ",
        price: 1500,
      },
      {
        id: 2,
        has_count: true,
        count: 3,
        image: "products/cigarette.png",
        title: "سیگار صورتی",
        category: "سیگار",
        price: 1385,
      },
      {
        id: 3,
        has_count: true,
        count: 4,
        image: "products/bag.jpg",
        title: "کیف پسرکش",
        category: "کیف",
        price: 3200,
      },
      {
        id: 4,
        has_count: true,
        count: 4,
        image: "products/dad.png",
        title: "بابا پلاستیکی",
        category: "بابا",
        price: 100,
      },
    ];
  },
};
</script>

<style scoped>
.button {
  width: 200px !important;
  height: 3rem;
  line-height: 3rem;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 20px;
}
.product_con {
  display: flex;
  flex-direction: column;
  
}
.products {
  margin-top: 10px;
  display: grid;
  width: 1000px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 100px;
}
</style>
