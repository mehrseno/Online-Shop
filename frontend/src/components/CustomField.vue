<template>
  <div class="custom_input">
    <label :style="style" for="ci__input" class="ci__label"> {{ label }}</label>
    <input
      :style="input_label"
      :type="type"
      class="ci__input"
      :class="error_outline"
      :placeholder="placeholder"
      :required="require"
      ref="ref"
      @keyup="validateInput"
      @blur="removeerror"
      v-model="input"
    />
    <div class="error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  namme: "CustomField",
  props: {
    require: Boolean,
    label: String,
    type: String,
    placeholder: String,
    label_width: String,
    input_widht: String,
    height: String,
    validate: Function,
    error: String,
  },
  data() {
    return {
      error: "",
      error_outline: "none",
    };
  },
  computed: {
    style() {
      return "width: " + this.label_width + "; height: " + this.height;
    },
    input_label() {
      return ` width: ${this.input_widht}; height: ${this.height}`;
    },
  },
  methods: {
    validateInput() {
      this.error = this.validate(this.input);
      if (this.error) {
        this.error_outline = "has_error";
      } else {
        this.error_outline = "no_error";
      }
    },
    removeerror() {
      this.error_outline = "none";
      this.error = "";
    },
  },
};
</script>

<style scoped>
.none {
  border: none;
}
.ci__input:focus {
  outline: none !important;
}

::placeholder {
  color: rgb(123, 139, 189);
  font-size: 15px;
  padding-right: 10px;
  width: 100%;
  height: 100%;
  text-align: right;
}

.custom_input {
  display: flex;
  flex-direction: row;
  position: relative;
}

.ci__label {
  background-color: rgb(14, 186, 197);
  font-size: 1rem;
  color: #fff;
  text-align: center;
  border-radius: 0rem 0.3rem 0.3rem 0rem;
  line-height: 2.8rem;
  width: 5.3rem;
  height: 2.8rem;
}

input {
  background-color: #fff;
  color: black;
  border: none;
  padding: 0px 10px;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
  height: 2.8rem;
  width: 17.5rem;
}

.error {
  position: absolute;
  bottom: -20px;
  right: calc(30%);
  color: red;
  font-size: x-small;
}

.no_error {
  border: 2px solid green;
}

.has_error {
  border: 2px solid red;
}
</style>
