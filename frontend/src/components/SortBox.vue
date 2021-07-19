<template>
  <div class="sort-box">
    <p class="sort-box__item sort-box__header">مرتب‌سازی بر اساس:</p>
    <a href="#" class="sort-box__item sort-box__option is_active"
      >بیشترین فروش</a
    >
    <a href="#" class="sort-box__item sort-box__option">قیمت</a>
  </div>
</template>

<script>
export default {
    name: "SortBox",
}
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
    box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003, 4px 4px 5px 0px #0002;
}
.sort-box .sort-box__item.sort-box__header {
  color: var(--text-dark-color);
}

.sort-box .sort-box__item {
    margin: 20px;
    color: var(--subtext-dark-color);
}

</style>
