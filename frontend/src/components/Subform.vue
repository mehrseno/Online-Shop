<template>
  <div>
    <label for="subformInput" :class="label__class">{{ name }}</label>
    <input
      required
      class="subformInput"
      :v-model="input__vModel"
      :pattern="input__pattern"
      :class="input__class"
      :type="input__type"
      :placeholder="input__placeholder"
    />
    <span v-if="msg.email">{{ msg.email }}</span>
    <span v-if="msg.password">{{ msg.password }}</span>
    <span v-if="msg.firstName">{{ msg.firstName }}</span>
    <span v-if="msg.familyName">{{ msg.familyName }}</span>
    <span v-if="msg.address">{{ msg.address }}</span>
  </div>
</template>

<script>
export default {
  name: "Subform",
  data() {
    return {
      firstName: "",
      familyName: "",
      password: "",
      email: "",
      address: "",
      msg: [],
    };
  },
  watch: {
    name(value) {
      // binding this to the data value in the email input
      this.name = value;
      this.validateName(value);
    },
    familyName(value) {
      this.familyName = value;
      this.validateFamilyName(value);
    },
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
    address(value) {
      this.address = value;
      this.validateAddress(value);
    },
  },
  props: {
    name: String,
    input__type: String,
    input__placeholder: String,
    input__class: String,
    input__pattern: String,
    input__direction: String,
    input__vModel: String,
    label__class: String,
  },
  methods: {
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    },
    validatePassword(value) {
      if (value.length < 8) {
        this.msg["password"] = "Must be at least 8 characters";
      } else {
        this.msg["password"] = "";
      }
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}
span {
  padding-top: 0px;
  margin-top: 0px;
  font-size: 12px;
  color: red;
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

input:invalid:hover {
  border: 2px solid red;
}
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