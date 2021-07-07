<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="title in tabTitles"
        :key="title"
        :class="{ selected: title == selectedTitle}"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue";

export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);

    return {
      selectedTitle,
      tabTitles,
    };
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tabs__header {
  margin-bottom: 10px;
  display: flex;
  list-style: none;
  padding: 0;
}

.tabs__header li {
  width: 150px;
  color: #BBBDBF;
  text-align: center;
  padding: 10px 20px;
  border-color: #E1E1E1;
  border-style: solid;
  transition: 0.4ms all ease-out ;
  cursor: pointer;
  background-color: var(--primary-background);
}
.tabs__header li.selected {
    background: #E1E1E1;
    color: black;
}
.tabs__header li:first-child {
  border-top-right-radius: 30%;
  border-bottom-right-radius: 30%;
}
.tabs__header li:last-child {
  border-top-left-radius: 30%;
  border-bottom-left-radius: 30%;
}
</style>
