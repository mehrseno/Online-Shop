<template>
  <div>
    <label
      :style="{
        height: label__heightSize + 'rem',
        width: label__widthSize + 'rem',
      }"
      for="subformInput"
      :class="labelClass"
      >{{ name }}</label
    >
    <input
      :style="{
        height: input__heightSize + 'rem',
        width: input__widthSize + 'rem',
      }"
      class="subformInput"
      :class="inputClass"
      :type="inputType"
      :placeholder="inputPlaceholder"
    />
  </div>
</template>

<script>
export default {
  name: "Subform",

  props: {
    name: String,
    inputType: String,
    inputPlaceholder: String,
    labelClass: String,
    inpuClass: String,
    input__heightSize: String,
    input__widthSize: String,
    label__heightSize: String,
    label__widthSize: String,
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}

input {
  background-color: #fff;
  color: black;
  border: none;
  align-items: center;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
  padding: 10x 20px;
}

::placeholder {
  color: rgb(181, 183, 189);
  font-size: 15px;
  margin: 0 10px;
  padding-right: 10px;
}

label {
  background-color: rgb(14, 186, 197);
  line-height: 2.8rem;
  text-align: center;
  align-content: center;
  font-size: 1rem;
  color: #fff;
  border-radius: 0rem 0.3rem 0.3rem 0rem;
}

</style>

