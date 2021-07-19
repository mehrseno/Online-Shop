<template>
  <button
    @click="show"
    
  >
    {{ submit }}
  </button>
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    submit: String,
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      console.log(`clicked on ${this.submit}`);
    },
    show() {
      this.$emit("show");
    },
  },
};
</script>
<style scoped>
button {
  color: var(--text-dark-color);
  border-radius: 24px;
  padding: 10px;
  font-weight: bold;
  background: var(--complementary-color);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  padding-left: 1rem;
  padding-right: 1rem;
}

button:hover {
  color: var(--text-light-color);
  background: transparent;
  box-shadow: none;
}

button:before,
button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: var(--complementary-color);
  box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
    4px 4px 5px 0px #0002;
  transition: 400ms ease all;
}

button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}

button:hover:before,
button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
</style>