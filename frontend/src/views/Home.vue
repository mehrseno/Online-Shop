<template>
  <slider @Submit="searchFilter" />
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
      class="sort-box__item sort-box__price"
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
      @click="sortbyDate()"
    >
      تاریخ ایجاد
    </button>
  </div>
  <div class="page">
    <div class="page__aside">
      <!-- <filter-box /> -->
      <div class="categories card">
        <data-loader :endpoint="filter_url" @recieveData="getFilter">
          <div class="card__header categories__header">دسته‌بندی‌ها</div>
          <div
            class="categories__option"
            :key="category.id"
            v-for="category in filters"
          >
            <input
              :v-model="category.title"
              type="checkbox"
              :name="category"
              :id="category.id"
              @click="categoryFilter(category.id)"
            />
            <label :for="category.id">{{ category.title }}</label>
          </div>
        </data-loader>
      </div>
      <slider-box @change="getPrice" />
      <button @click="priceFilter()" class="price-range__button">
        اعمال محدوده قیمت
      </button>
    </div>
    <div v-if="!hasContent" class="page-empty__content">
      <p>{{ notFound.title }}</p>
      <SubmitButton
        @show="back"
        submit="بازگشت"
        type="button"
        class="search-wrapper__submit"
      />
    </div>
    <div class="page_content" id="page_content" v-if="hasContent">
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
import SubmitButton from "../components/SubmitButton.vue";
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
    SubmitButton,
    // Maincontainer,
  },
  data() {
    return {
      searchInput: "",
      products: [],
      filters: [],
      mainProduct: [],
      activeId: [],
      priceRange: [],
      name: "",
      notFound: [{ title: "" }],
      url: "https://60ed9597a78dc700178adfea.mockapi.io/api/v1/product_amount",
      filter_url:
        "https://60ed9597a78dc700178adfea.mockapi.io/api/v1/categories",
      // url: "http://localhost:8000/api/products/",
      p: [],
      srt: [],
      price_active: false,
      count_active: false,
      date_active: false,
      hasContent: true,
    };
  },
  watch: {
    p(newdata) {
      console.log(`changed in p ${newdata}`);
    },
  },
  methods: {
    back() {
      this.hasContent = true;
    },

    getdata(data) {
      this.products = data;
      this.mainProduct = data;
      this.sortbyCount();
      console.log(this.mainProduct);
    },

    //set filter list and "active" property for each object
    getFilter(data) {
      this.filters = data;
      this.filters.forEach(function(element) {
        element.active = "false";
      });
      console.log(this.filters);
    },

    //set price range, Default Range is [0,500]
    getPrice(data) {
      this.priceRange = data;
    },

    //Sort products with "Most sales" filter, Product display is in descending order
    sortbyCount() {
      this.updatedActive();
      this.count_active = true;
      this.products.sort((a, b) => {
        return a.sold_count > b.sold_count ? -1 : 1;
      });
      this.mainProduct.sort((a, b) => {
        return a.sold_count > b.sold_count ? -1 : 1;
      });
    },

    //Sort products with "Price" filter, Product display is in descending  and Ascending order
    sortbyPrice(priceDirection) {
      this.updatedActive();
      this.price_active = true;
      let modifier = 1;
      if (priceDirection === "desc") {
        modifier = -1;
      }
      this.products.sort((a, b) => {
        return a.price > b.price ? 1 * modifier : -1 * modifier;
      });
      this.mainProduct.sort((a, b) => {
        return a.price > b.price ? 1 * modifier : -1 * modifier;
      });
    },

    //Sort products with "Creat date" filter, Product display is in Ascending order
    sortbyDate() {
      this.updatedActive();
      this.date_active = true;
      this.products.sort((a, b) => {
        return a.created_date > b.created_date ? -1 : 1;
      });
    },

    updatedActive() {
      this.price_active = false;
      this.count_active = false;
      this.date_active = false;
    },

    //Filter products with "Category" filters
    categoryFilter(c_id) {
      this.filters.forEach(function(element) {
        if (element.id === c_id) {
          element.active === "false"
            ? (element.active = "true")
            : (element.active = "false");
        }
      });
      console.log(this.filters);
      let activeId = [];
      for (let i = 0; i < this.filters.length; i++) {
        if (this.filters[i].active === "true") {
          if (!activeId.includes(this.filters[i].id)) {
            activeId.push(this.filters[i].title);
          }
        } else {
          const index = this.filters.indexOf(this.filters[i].title);
          if (index > -1) {
            activeId.splice(index, 1);
          }
        }
      }
      console.log(activeId);
      var output = this.mainProduct.filter(function(s) {
        return activeId.some(function(t) {
          return s.category === t;
        });
      });
      console.log(output);
      activeId.length === 0
        ? (this.products = this.mainProduct)
        : (this.products = output);
    },

    //filter products with "Serch box" filter
    searchFilter(input) {
      this.searchInput = input;
      var output = this.mainProduct.filter(function(s) {
        return s.name.includes(input);
      });

      if (output.length === 0) {
        this.hasContent = false;
        this.products = this.notFound.title = `
        جستجو برای عبارت « ${input} » با هیچ کالایی هم‌خوانی نداشت
        `;
      } else {
        this.products = output;
      }
    },

    //Filter products with "Price range" filter, Product display is in Ascending order
    priceFilter() {
      console.log(this.priceRange);
      let min, max;
      min = this.priceRange[0];
      max = this.priceRange[1];
      let output = this.mainProduct.filter(function(x) {
        return x.price >= min && x.price <= max;
      });
      if (output.length === 0) {
        this.hasContent = false;
        this.products = this.notFound.title =
          " کالایی با این محدوده قیمت موجود نمی‌باشد";
      } else {
        this.products = output;
      }
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

.card {
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 0.1em solid #b7b8b7;
  box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
    4px 4px 5px 0px #0002;
  overflow-y: auto; /* for automatic scrollbar */
  margin-top: 15px;
}

.card__header {
  font-weight: bold;
  border-bottom: 0.1em solid #b7b8b7;
  padding: 10px;
}
</style>

<style scoped>
.categories {
  height: 26vh;
}

.categories__option {
  margin: 10px;
  margin-top: 5px;
  margin-bottom: 3px;
}

.categories__option label {
  cursor: pointer;
  height: 28px;
  top: 0;
}

.categories__option input[type="checkbox"] {
  display: none;
}

.categories__option input[type="checkbox"] + label::before {
  content: "\2714"; /* for tick */
  border: 0.1em solid #e7e9e8;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  display: inline-block;
  padding-right: 0.2em;
  padding-left: 0.2em;
  padding-bottom: 0.4em;
  margin-left: 0.2em;
  text-align: center;
  vertical-align: bottom;
  color: transparent;
}

.categories__option input[type="checkbox"]:checked + label:before {
  /* for select */
  background-color: #009fff;
  color: white;
}

.categories__option input[type="checkbox"]:checked + label {
  color: #009fff;
  font-weight: bold;
}

/*__________________________________________________________________________________ */

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
  scroll-margin-top: 100px;
  flex-basis: 75%;
  margin: 15px;
  display: grid;
  grid-gap: 15px;
}

.page-empty__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  gap: 50px;
}
.page-empty__content p {
  font-size: 30px;
}
.search-wrapper__submit {
  border-radius: 24px;
  width: 150px;
  height: 50px;
  align-self: center;
  font-size: 20px;
  border: none;
  cursor: pointer;
}
/* ________________________________________________ */
.price-range__button {
  width: 300px;
  height: 50px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  color: rgb(65, 184, 131);
  font-weight: bold;
}
</style>
