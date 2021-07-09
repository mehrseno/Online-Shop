<template>
  <div class="UserProfile-form__container">
    <custom-field
      class="name"
      type="text"
      :placeholder="user.name"
      :require="true"
      label="نام"
      :validate="validateName"
    />
    <custom-field
      class="familyName"
      :type="text"
      :placeholder="user.lastname"
      :require="true"
      label="نام خانوادگی"
      :validate="validateName"
    />
    <custom-field
      class="pass"
      type="password"
      placeholder="رمز عبور خود را وارد کنید..."
      :require="true"
      label="رمز عبور"
      input_widht="41rem"
      :validate="validatePass"
    />

    <custom-field
      class="address"
      :type="text"
      :placeholder="user.address"
      :require="true"
      label="آدرس"
      input_widht="41rem"
      height="4.6rem"
      :validate="validateAddress"
    />

    <!-- <Subform
      class="name"
      input__type="text"
      name="نام"
      input__placeholder="هادی"
      input__class="small__input"
      label__class="small__label"
    /> -->
    <!-- <Subform
      class="familyName"
      input__type="text"
      name="نام خانوادگی"
      input__placeholder="طباطبایی"
      input__class="small__input"
      label__class="small__label"
    /> -->
    <!-- 
    <Subform
      class="pass"
      input__type="password"
      input__pattern=".{6,}"
      name="رمز عبور"
      input__placeholder="رمز عبور خود را وارد کنید..."
      input__class="medium__input"
      label__class="small__label"
    /> -->

    <!-- <Subform
      class="address"
      input__type="text"
      name="آدرس"
      input__class="large__input"
      label__class="large__label"
      input__placeholder=""
    /> -->
  </div>
</template>

<script>
import Subform from "./Subform.vue";
import CustomField from "./CustomField.vue";

export default {
  name: "UserProfileForm",
  components: { Subform, CustomField },
  data() {
    return {
      user: {
        name: "hadi",
        lastname: "taba",
        address: "تهران، تهران، امیرکبیر",
      },
    };
  },
  methods: {
    validateName(text) {
      text = text.trim();
      return text === "" || text == undefined
        ? "لطفاْ این فیلد را پرکنید"
        : text.length > 256
        ? "حداکثر نام برابر با ۲۵۶ کاراکتر است"
        : "";
    },
    validatePass(text) {
      const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,}$/g;
      return text.match(regex)
        ? ""
        : "رمز باید حداقل ۸ کاراکتر و شامل حرف و عدد باشد";
    },
    validateAddress(text) {
      return text === "" || text == undefined
        ? "لطفاْ این فیلد را پرکنید"
        : text.length > 1000
        ? "حداکثر طول آدرس ۱۰۰۰ کاراکتر است"
        : "";
    },
  },
};
</script>
<style scoped>
.name {
  grid-area: first;
}
.familyName {
  grid-area: second;
}

.pass {
  grid-area: third;
}
.address {
  grid-area: fourth;
}

.UserProfile-form__container {
  justify-items: center;
  align-content: center;
  display: grid;
  row-gap: 20px;
  column-gap: 10px;
  grid-template-areas:
    "first second"
    "third third"
    "fourth fourth";
}
</style>
