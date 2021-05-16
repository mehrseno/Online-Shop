<template>
    <div class="page">
        <div class="page__aside">
            <filter-box/>
            <slider-box/>
        </div>
    </div>
</template>

<script>
import FilterBox from './FilterBox.vue'
import SliderBox from './SliderBox.vue'
export default {
  components: { FilterBox, SliderBox },
    name: "Maincontainer",
}
</script>

<style scoped>

.page {
    display: flex;
    width: 98%;
    justify-content: space-between;
    align-items: flex-start; /* for diffrent size of childrens*/
}

.page__aside {
    flex-basis: 25%;
}

</style>