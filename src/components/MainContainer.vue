<template>
  <div class="page">
    <div class="page__aside">
      <filter-box />
      <slider-box />
    </div>
    <div class="page_content">
      <products :products="products" />
    </div>
  </div>
</template>

<script>
import FilterBox from "./FilterBox.vue";
import SliderBox from "./SliderBox.vue";
import Products from "./Products.vue";

export default {
  components: { FilterBox, SliderBox, Products },
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
}
</style>
