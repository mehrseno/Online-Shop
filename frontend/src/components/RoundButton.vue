<template>
  <button @click="onClick">{{ text }}</button>
</template>

<script>
export default {
  name: "RoundButton",
  props: {
    text: String,
  },
  methods: {
    onClick() {
      this.$router.push("/login"); // we neeed to change this line by emit
    },
  },
};
</script>

<style scoped>
button {
  background-color: var(--element-background);
  border: 2px solid var(--complementary-color);
  text-align: center;
  padding: 10px 20px;
  border-radius: 24px;
  color: var(--text-dark-color);
}

button:hover {
  background: var(--complementary-color);
}
</style>
