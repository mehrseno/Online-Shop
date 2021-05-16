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
        image: "pet-shop.png",
        title: "کیف سگی",
        category: "سگ",
        price: 1000,
      },
      {
        id: 2,
        image: "pet-shop.png",
        title: "کیف سگی",
        category: "سگ",
        price: 1000,
      },
      {
        id: 3,
        image: "pet-shop.png",
        title: "کیف سگی",
        category: "سگ",
        price: 1000,
      },
      {
        id: 4,
        image: "pet-shop.png",
        title: "کیف سگی",
        category: "سگ",
        price: 1000,
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
  margin-bottom: 100px;
}

.page__aside {
  flex-basis: 25%;
}

.page_content {
  margin: 15px;
  flex-basis: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  
}
</style>
