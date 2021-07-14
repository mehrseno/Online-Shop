<template>
  <div class="register-form__container">
    <custom-field
      class="name"
      type="text"
      placeholder="user.name"
      :require="true"
      label="نام"
      :validate="validateName"
    />
    <custom-field
      class="familyName"
      :type="text"
      placeholder="user.lastname"
      :require="true"
      label="نام خانوادگی"
      :validate="validateName"
    />
    <custom-field
      class="mail"
      type="email"
      placeholder="ایمیل خود را وارد کنید..."
      :require="true"
      label="ایمیل"
      :validate="validateEmail"
    />
    <custom-field
      class="pass"
      type="password"
      placeholder="رمز عبور خود را وارد کنید..."
      :require="true"
      label="رمز عبور"
      :validate="validatePass"
    />

    <custom-field
      class="address"
      :type="text"
      placeholder="user.address"
      :require="true"
      label="آدرس"
      input_widht="41rem"
      height="4.6rem"
      :validate="validateAddress"
    />

    <!-- <Subform
      class="name"
      name="نام"
      input__type="text"
      input__class="small__input"
      label__class="small__label"
      input__placeholder="نام خود را وارد کنید..."
    />
    <Subform
      class="familyName"
      name="نام خانوادگی"
      input__type="text"
      input__class="small__input"
      label__class="small__label"
      input__placeholder="نام خانوادگی خود را وارد کنید..."
    />

    <Subform
      class="mail"
      name="ایمیل"
      input__type="email"
      input__class="small__input ltr__input"
      label__class="small__label"
      input__placeholder="...ایمیل خود را وارد کنید"
    />
    <Subform
      class="pass"
      name="رمز عبور"
      input__class="small__input ltr__input "
      label__class="small__label"
      input__type="password"
      input__pattern=".{6,}"
      input__placeholder="...رمز عبور خود را وارد کنید"
    />

    <Subform
      class="address"
      input__type="text"
      name="آدرس"
      input__class="large__input"
      label__class="large__label extra__padding "
      input__placeholder="آدرس خود را وارد کنید..."
    /> -->
  </div>
</template>

<script>
import CustomField from './CustomField.vue'
import useFormValidation from "@/modules/useFormValidation";
import Subform from "./Subform.vue";

export default {
  name: "RegisterForm",
  components: { Subform, CustomField },
  methods: {
    validateName(text) {
      const { validateNameField, errors } = useFormValidation();
      validateNameField("نام", text);
      return errors["نام"];
    },
    validatePass(text) {
      const { validatePass, errors } = useFormValidation();
      validatePass("رمز عبور", text);
      return errors["رمز عبور"];
    },
    validateAddress(text) {
      const { validAddress, errors } = useFormValidation();
      validAddress("آدرس", text);
      return errors["آدرس"];
    },
    validateEmail(text) {
      const { validateEmailField, errors } = useFormValidation();
      validateEmailField("ایمیل", text);
      return errors["ایمیل"];
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
.mail {
  grid-area: third;
}
.pass {
  grid-area: fourth;
}
.address {
  grid-area: fifth;
}

.register-form__container {
  display: grid;
  /* justify-content: center; */
  /* align-content: center; */
  row-gap: 20px;
  column-gap: 10px;
  grid-template-areas:
    "first second"
    "third fourth"
    "fifth fifth";
}
</style>
