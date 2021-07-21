<template>
  <div class="page-product">
    <div class="columns is-multiline">
      <div class="column is-9">
        <figure class="image mb-6">
          <img :src="product.get_image" />
        </figure>
        <h1 class="title">{{ product.name }}</h1>
      </div>
      <div class="column is-3">
        <h2 class="subtitle">دسته‌بندی</h2>
        <p class="category">{{ product.get_category }}</p>
        <p><strong>قیمت: </strong>{{ product.price }} تومان</p>
        <div class="field has-addons mt-6">
          <div class="control">
            <input type="number" class="input" min="1" v-model="quantity" />
          </div>
          <div class="control">
            <a href="" class="button is-dark" @click="addToCart">
              افزودن به کارت</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "bulma-toast";
import axios from "axios";

export default {
  name: "Product",
  data() {
    return {
      product: {},
      quantity: 1,
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      const category_slug = this.$route.params.category_slug;
      const product_slug = this.$route.params.product_slug;
      axios
        .get(`/api/v1/products/${category_slug}/${product_slug}/`)
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => console.log(error));
    },
    addToCart(e) {
      e.preventDefault();
      console.log("add to cart");
      if (isNaN(this.quantity) || this.quantity < 1) {
        this.quantity = 1;
      }
      const item = {
        product: this.product,
        quantity: this.quantity,
      };
      this.$store.commit("addToCart", item);
      toast({
        message: "محصول به کارت اضافه شد",
        type: "is-warning",
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: "top-right",
      });
    },
  },
};
</script>

<style scoped>
.page-product {
  display: flex;
  height: 100vh;
  align-items: center;
}

.columns {
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
img {
  width: 500px;
  height: 500px;
  margin: 10px;
}

.title {
  text-align: right;
  font-weight: 1300;
  font-size: 50px;
  margin: 10px;
}

.is-3 {
  margin: 10px;
}

.subtitle {
  font-size: 25px;
}

.category {
  font-size: 20px;
  text-align: left;
  color: gray;
}

.field {
  display: flex;
}

.is-dark {
  padding: 0.8rem;
  line-height: 3rem;
  height: 3rem;
  background: black;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  color: white;
}
.control {
}
input {
  height: 3rem;
  font-size: 20px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
