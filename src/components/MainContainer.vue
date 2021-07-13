<template>
  <div class="page">
    <div class="page__aside">
      <filter-box />
      <slider-box />
    </div>
    <div class="page_content">
      <data-loader 
        endpoint="https://60ed9597a78dc700178adfea.mockapi.io/api/v1/product_amount"
      >
        <template #loaded="{data}">
          <PaginationBar
            :totalItems="data.count"
            :items="
              (data.products &&
                data.products.map(function(a) {
                  a.has_count = false;
                  return a;
                })) ||
                []
            "
          >
            <template #data="{paginatedItems}">
              <div class="products">
                <product
                  :key="product.id"
                  v-for="product in paginatedItems"
                  :product="product"
                  text="خرید محصول"
                />
              </div>
              <!-- <products :products="data.products" /> -->
            </template>
          </PaginationBar>
        </template>
      </data-loader>
    </div>
  </div>
</template>

<script>
import FilterBox from "./FilterBox.vue";
import SliderBox from "./SliderBox.vue";
import Products from "./Products.vue";
import Product from "./Product.vue";
import DataLoader from "./DataLoader.vue";
import PaginationBar from "@/components/PaginationBar.vue";

export default {
  components: {
    PaginationBar,
    FilterBox,
    SliderBox,
    Products,
    Product,
    DataLoader,
  },
  name: "Maincontainer",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.products = [
      {
        id: 1,
        image: "products/pet-shop.png",
        title: "کیف سگی",
        category: "سگ",
        price: 1500,
      },
      {
        id: 2,
        image: "products/cigarette.png",
        title: "سیگار صورتی",
        category: "سیگار",
        price: 1385,
      },
      {
        id: 3,
        image: "products/bag.jpg",
        title: "کیف پسرکش",
        category: "کیف",
        price: 3200,
      },
      {
        id: 4,
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
.products {
  margin-top: 10px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 100px;
}

.page {
  display: flex;
  width: 98%;
  justify-content: space-between;
  align-items: flex-start; /* for diffrent size of childrens*/
  margin-bottom: 79px;
}

.page__aside {
  flex-basis: 25%;
}

.page_content {
  flex-basis: 75%;
  margin: 15px;
  display: grid;
  grid-gap: 15px;
}
</style>
