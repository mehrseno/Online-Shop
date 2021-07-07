<template>
  <div>
    <label
      :style="{
        height: label__heightSize + 'rem',
        width: label__widthSize + 'rem',
      }"
      for="subformInput"
      :class="label__class"
      >{{ name }}</label
    >
    <input
      :style="{
        height: input__heightSize + 'rem',
        width: input__widthSize + 'rem',
        direction : input__direction
      }"
      required
      class="subformInput"
      :pattern="input__pattern"
      :class="input__class"
      :type="input__type"
      :placeholder="input__placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "Subform",

  props: {
    name: String,
    input__type: String,
    input__placeholder: String,
    input__class: String,
    input__pattern: String,
    input__heightSize: String,
    input__widthSize: String,
    input__align: String,
    input__direction: String,
    label__heightSize: String,
    label__widthSize: String,
    label__class: String,
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
  padding : 0px 10px;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
}

input:invalid:hover {
  border: 2px solid red;
}
::placeholder {
  color: rgb(181, 183, 189);
  font-size: 15px;
  padding-right: 10px;
  width: 100%;
  height: 100%;
  /* background-color: blue; */
  text-align: right;
}

label {
  background-color: rgb(14, 186, 197);
  line-height: 2.8rem;
  font-size: 1rem;
  color: #fff;
  text-align:center;
  border-radius: 0rem 0.3rem 0.3rem 0rem;
}
</style>

