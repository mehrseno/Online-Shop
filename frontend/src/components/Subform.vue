<template>
  <div>
    <label for="subformInput" :class="label__class">{{ name }}</label>
    <input
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
    input__direction: String,
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
  padding: 0px 10px;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
}

.large__input {
  height: 4.6rem;
  width: 41rem;
}

.long__input {
  height: 2.6rem;
  width: 30rem;
}
.medium__input {
  height: 2.6rem;
}
.small__input {
  height: 2.6rem;
  width: 17.5rem;
}

.ltr__input {
  direction: ltr;
}

/* input:invalid:hover {
  border: 2px solid red;
} */
::placeholder {
  color: rgb(123, 139, 189);
  font-size: 15px;
  padding-right: 10px;
  width: 100%;
  height: 100%;
  text-align: right;
}

label {
  background-color: rgb(14, 186, 197);
  font-size: 1rem;
  color: #fff;
  text-align: center;
  border-radius: 0rem 0.3rem 0.3rem 0rem;
}

.large__label {
  width: 5.3rem;
  height: 4.6rem;
}

.small__label {
  width: 5.3rem;
  height: 2.6rem;
}

.extra__padding {
  padding-top: 11px;
}

.long__label {
  width: 15rem;
  height: 2.6rem;
}
</style>

