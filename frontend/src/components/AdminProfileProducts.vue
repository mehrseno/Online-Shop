<template>
  <div class="product_con">
    <div class="is_active button">+ ایجاد محصول جدید</div>

    <data-loader
      endpoint="http://localhost:8000/api/v1/products/"
      :authToken="$store.state.token"
      @recieveData="getData"
    >
      <PaginationBar :totalItems="products.length" :items="products || []">
        <template #data="{paginatedItems}">
          <div class="products">
            <product
              :key="product.id"
              v-for="product in paginatedItems"
              :product="product"
              text="ویرایش محصول"
            />
          </div>
        </template>
      </PaginationBar>
    </data-loader>
  </div>
</template>

<script>
import Product from "./Product.vue";
import DataLoader from "@/components/DataLoader.vue";
import PaginationBar from "@/components/PaginationBar.vue";

export default {
  name: "AdminProfileProducts",
  components: {
    Product,
    DataLoader,
    PaginationBar,
  },
  props: {
    products: Array,
  },
  methods: {
    getData(data) {
      console.log("getData");
      this.products = data;
    },
  },
  data() {
    return {
      products: [],
    };
  },
  created() {},
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
