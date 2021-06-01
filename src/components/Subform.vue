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
      
      required
      :pattern= inputPattern
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
    inputPattern:String,
    input__heightSize: String,
    input__widthSize: String,
    label__heightSize: String,
    label__widthSize: String,
    input__align: String
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
  /* align-items: center; */
  border-radius: 0.3rem 0rem 0rem 0.3rem;
}

input:invalid:hover {
  border: 2px solid red;
}
::placeholder {
  color: rgb(181, 183, 189);
  font-size: 15px;
  padding-right: 10px ;
  width: 100%;
  height: 100%;
  /* background-color: blue; */
  text-align: right;

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

