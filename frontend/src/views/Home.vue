<template>
  <slider />
  <!-- <HeroNav /> -->
  <!-- For first phase -->
  <!-- <sort-box /> -->
  <div class="sort-box">
    <p class="sort-box__item sort-box__header">مرتب‌سازی بر اساس:</p>

    <button
      class="sort-box__item sort-box__option"
      :class="{ is_active: count_active }"
      @click="sortbyCount()"
    >
      بیشترین فروش
    </button>

    <a
      class="sort-box__item sort-box__option sort-box__price"
      :class="{ is_active: price_active }"
      >قیمت</a
    >
    <button
      @click="sortbyPrice(`asc`)"
      class="price-direction__button sort-box__option"
    >
      صعودی
    </button>
    <button
      @click="sortbyPrice(`desc`)"
      class="price-direction__button sort-box__option"
    >
      نزولی
    </button>

    <button
      class="sort-box__item sort-box__option sort-box__date"
      :class="{ is_active: date_active }"
    >
      تاریخ ایجاد
    </button>
    <!-- <a href="#" class="sort-box__item sort-box__option is_active"
      >بیشترین فروش</a
    >
    <a href="#" class="sort-box__item sort-box__option">قیمت</a> -->
  </div>
  <div class="page">
    <div class="page__aside">
      <filter-box />
      <slider-box />
      <!-- <button @click="sortbyprice()">CLick</button> -->
    </div>
    <div class="page_content">
      <data-loader :endpoint="url" @recieveData="getdata">
        {{ Products }}
        <pagination-bar
          :items="products"
          :totalItems="products.length"
          @pagecreated="pagationItems"
        >
          <template #data="{ paginatedItems }">
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
import HeroNav from "@/components/HeroNav";
import Slider from "@/components/Slider";
// import SortBox from "../components/SortBox.vue";
// import Maincontainer from "../components/MainContainer.vue";
import FilterBox from "../components/FilterBox.vue";
import SliderBox from "../components/SliderBox.vue";
import Products from "../components/Products.vue";
import Product from "../components/Product.vue";
import DataLoader from "../components/DataLoader.vue";
import PaginationBar from "../components/PaginationBar.vue";
export default {
  name: "Home",
  components: {
    PaginationBar,
    FilterBox,
    SliderBox,
    Products,
    Product,
    DataLoader,
    s: Function,
    HeroNav,
    // SortBox,
    Slider,
    // Maincontainer,
  },
  data() {
    return {
      products: [],
      // url: "https://60ed9597a78dc700178adfea.mockapi.io/api/v1/product_amount",
      url: "http://localhost:8000/api/products/",
      p: [],
      srt: [],
      price_active: false,
      count_active: false,
      date_active: false,
    };
  },
  watch: {
    p(newdata) {
      console.log(`changed in p ${newdata}`);
    },
  },
  methods: {
    getdata(data) {
      this.products = data;
      this.sortbyCount();
    },
    sortbyCount() {
      this.updatedActive();

      this.count_active = true;
      this.products.sort((a, b) => {
        return a.sold_count > b.sold_count ? -1 : 1;
      });
    },
    sortbyPrice(priceDirection) {
      this.updatedActive();

      this.price_active = true;

      console.log(priceDirection);
      let modifier = 1;
      if (priceDirection === "desc") {
        modifier = -1;
      }
      this.products.sort((a, b) => {
        return a.price > b.price ? 1 * modifier : -1 * modifier;
      });
    },
    sortyDate() {
      this.updatedActive();
      this.date_active = true;

      this.products.sort((a, b) => b.date - a.date);
    },

    updatedActive() {
      this.price_active = false;
      this.count_active = false;
      this.date_active = false;
    },
  },
};
</script>

<style scoped>
.sort-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 98%;
  background: var(--element-background);
  margin-top: 10px;
  box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
    4px 4px 5px 0px #0002;
}
.sort-box .sort-box__item.sort-box__header {
  color: var(--text-dark-color);
}

.sort-box .sort-box__item {
  margin: 12px;
  color: var(--subtext-dark-color);
  background: var(--element-background);
  border: none;
}
.sort-box__select {
  color: var(--subtext-dark-color);
}
.sort-box__option {
  cursor: pointer;
}
.price-direction__button {
  background: var(--element-background);
  width: 50px;
  border: var(--subtext-dark-color) 0.00001px solid;
  color: var(--subtext-dark-color);
}

/*___________________________________________________________________________ */

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
