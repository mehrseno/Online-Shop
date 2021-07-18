<template>
  <div class="page">
    <div class="page__aside">
      <filter-box />
      <slider-box />
      <button @click="sortbycount">CLick</button>
    </div>
    <div class="page_content">
      <data-loader :endpoint="url" @recieveData="getdata">
        <pagination-bar
          :items="products.products"
          :totalItems="products.products.length"
          @pagecreated="pagationItems"
        >
          <template #data="{paginatedItems}">
            <div class="products">
              <product
                :key="product.id"
                :product="product"
                v-for="product in paginatedItems"
                text="خرید محصول"
              />
            </div>
          </template>
        </pagination-bar>
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
      url: "https://60ed9597a78dc700178adfea.mockapi.io/api/v1/product_amount",
      p: [],
    };
  },
  watch: {
    p(newdata) {
      console.log(`changed in p ${newdata}`);
    },
  },
  // props: {
  //   products : Object,
  // },
  methods: {
    fix(data) {
      this.products = data.products;
    },
    getdata(data) {
      this.products = data;
    },
    pagationItems(data) {
      console.log("paaaaaaaaaaaaaaage");
      console.log(data);
      this.p = data;
    },
    sortbycount() {
      this.products.products = [
        {
          has_count: false,
          count: 63,
          image: "http://placeimg.com/640/480/city",
          title: "Rustic Cotton Table",
          category: "Frozen",
          price: 37,
          sell_count: 29,
          id: "1",
        },
        {
          has_count: true,
          count: 17,
          image: "http://placeimg.com/640/480/animals",
          title: "Practical Concrete Shoes",
          category: "Metal",
          price: 25,
          sell_count: 38,
          id: "2",
        },
        {
          has_count: true,
          count: 84,
          image: "http://placeimg.com/640/480/city",
          title: "Practical Concrete Ball",
          category: "Plastic",
          price: 86,
          sell_count: 73,
          id: "3",
        },
        {
          has_count: false,
          count: 78,
          image: "http://placeimg.com/640/480/business",
          title: "Refined Wooden Car",
          category: "Granite",
          price: 24,
          sell_count: 78,
          id: "4",
        },
        {
          has_count: false,
          count: 96,
          image: "http://placeimg.com/640/480/people",
          title: "Generic Concrete Chips",
          category: "Soft",
          price: 21,
          sell_count: 30,
          id: "5",
        },
        {
          has_count: false,
          count: 5,
          image: "http://placeimg.com/640/480/nature",
          title: "Awesome Concrete Towels",
          category: "Plastic",
          price: 38,
          sell_count: 33,
          id: "6",
        },
        {
          has_count: true,
          count: 43,
          image: "http://placeimg.com/640/480/nightlife",
          title: "Gorgeous Cotton Table",
          category: "Rubber",
          price: 26,
          sell_count: 64,
          id: "7",
        },
        {
          has_count: true,
          count: 29,
          image: "http://placeimg.com/640/480/transport",
          title: "Small Cotton Car",
          category: "Wooden",
          price: 4,
          sell_count: 7,
          id: "8",
        },
        {
          has_count: true,
          count: 56,
          image: "http://placeimg.com/640/480/animals",
          title: "Tasty Metal Cheese",
          category: "Steel",
          price: 5,
          sell_count: 74,
          id: "9",
        },
        {
          has_count: false,
          count: 61,
          image: "http://placeimg.com/640/480/people",
          title: "Licensed Metal Pizza",
          category: "Granite",
          price: 89,
          sell_count: 39,
          id: "10",
        },
        {
          has_count: false,
          count: 95,
          image: "http://placeimg.com/640/480/animals",
          title: "Sleek Rubber Mouse",
          category: "Granite",
          price: 33,
          sell_count: 72,
          id: "11",
        },
        {
          has_count: false,
          count: 56,
          image: "http://placeimg.com/640/480/abstract",
          title: "Tasty Soft Bike",
          category: "Frozen",
          price: 57,
          sell_count: 93,
          id: "12",
        },
        {
          has_count: false,
          count: 60,
          image: "http://placeimg.com/640/480/abstract",
          title: "Intelligent Frozen Cheese",
          category: "Cotton",
          price: 73,
          sell_count: 97,
          id: "13",
        },
        {
          has_count: false,
          count: 18,
          image: "http://placeimg.com/640/480/fashion",
          title: "Fantastic Steel Towels",
          category: "Soft",
          price: 40,
          sell_count: 79,
          id: "14",
        },
        {
          has_count: false,
          count: 56,
          image: "http://placeimg.com/640/480/abstract",
          title: "Tasty Soft Bike",
          category: "Frozen",
          price: 57,
          sell_count: 93,
          id: "12",
        },
        {
          has_count: false,
          count: 60,
          image: "http://placeimg.com/640/480/abstract",
          title: "Intelligent Frozen Cheese",
          category: "Cotton",
          price: 73,
          sell_count: 97,
          id: "13",
        },
        {
          has_count: false,
          count: 18,
          image: "http://placeimg.com/640/480/fashion",
          title: "Fantastic Steel Towels",
          category: "Soft",
          price: 40,
          sell_count: 79,
          id: "14",
        },
      ];
      this.products.length = 4;
      console.log(this.url);
      // this.url = "https://60ed9597a78dc700178adfea.mockapi.io/api/v1/products";
    },
  },
  // created() {
  //   this.products = [
  //     {
  //       id: 1,
  //       image: "products/pet-shop.png",
  //       title: "کیف سگی",
  //       category: "سگ",
  //       price: 1500,
  //     },
  //     {
  //       id: 2,
  //       image: "products/cigarette.png",
  //       title: "سیگار صورتی",
  //       category: "سیگار",
  //       price: 1385,
  //     },
  //     {
  //       id: 3,
  //       image: "products/bag.jpg",
  //       title: "کیف پسرکش",
  //       category: "کیف",
  //       price: 3200,
  //     },
  //     {
  //       id: 4,
  //       image: "products/dad.png",
  //       title: "بابا پلاستیکی",
  //       category: "بابا",
  //       price: 100,
  //     },
  //   ];
  // },
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
