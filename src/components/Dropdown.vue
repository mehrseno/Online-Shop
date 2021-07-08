<template>
  <div
    class="menu_item"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <a href="#" class="title">{{ title }} </a>
    <svg viewBox="0 0 1030 638">
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13
        68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#000"
      ></path>
    </svg>
    <transition name="fade" appear>
      <div class="sub_menu" v-if="isOpen">
        <div class="item" v-for="(item, i) in items" :key="i">
          <a :href="item.link"> {{ item.title }} </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
svg {
  width: 10px;
  margin-right: 10px;
}

.item {
  width: 100%;
  padding: 10px;
  text-align: justify;
}

.item a {
    color: #000;
}

.sub_menu {
  position: absolute;
  color: black;
  width: 100%;
  top: calc(70% - 10px);
  left: 0%;
  transform: translateZ(-10px);
  background: #e1e1e1;
  padding-top: 30px;
  padding-bottom: 15px;
  border-radius: 15px;
}

.item:hover {
  background: #ededed;
}
.menu_item {
  transform-style: preserve-3d;
  position: relative;
  color: black;
  border: 2px solid var(--complementary-color);
  border-radius: 24px;
  padding: 10px 20px;
  width: 150px;
  text-align: center;
  z-index: 99;
}
.title {
  position: relative;
  z-index: 10;
  color: black;
}

.menu_item:hover {
  background: var(--complementary-color);
}

.fade-enter-active,
.fade-leave-active {
  /* transition: all 0.5s ease-out; */
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
