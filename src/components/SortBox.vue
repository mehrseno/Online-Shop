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
    background-color: white;
    margin-top: 10px;
    box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003, 4px 4px 5px 0px #0002;
}

.sort-box .sort-box__item {
    margin: 20px;
    color: #7B7B7B;
}

</style>

<style>

.is_active  {
    background-color: #009FFF;
    color: white !important;
    padding: 5px 10px 5px 10px;
    border-radius: 30px;
    box-shadow: 1px 1px 2px black, 3px 2px 5px #8DD2FA;
}

</style>