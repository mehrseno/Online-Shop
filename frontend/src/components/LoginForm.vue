<template>
  <div class="login-form__container">
    <custom-field class="mail" type="email" label="ایمیل" placeholder="ایمیل خود را وارد کنید..." :require="true" :validate="noValidation"/>
    <custom-field class="name" type="password" label="رمزعبور" placeholder="رمز عبور خود را وارد کنید..." :require="true" :validate="noValidation"/>
    <!-- <Subform
      class="mail"
      name="ایمیل"
      input__type="email"
      input__class="small__input ltr__input"
      label__class="small__label"
      input__placeholder="...ایمیل خود را وارد کنید"
    /> -->
    <!-- <Subform
      class="name"
      name="رمز عبور"
      input__type="password"
      input__placeholder="...رمز عبور خود را وارد کنید"
      input__class="small__input ltr__input"
      label__class="small__label"
      input__pattern=".{6,}"
    /> -->
  </div>
</template>

<script>
import useFormValidation from "@/modules/useFormValidation";
import CustomField from './CustomField.vue';
import Subform from "./Subform.vue";
export default {
  name: "LoginForm",
  components: { Subform, CustomField },
  methods: {
    noValidation(text) {
      const{noValidation} = useFormValidation();
      return noValidation("", text);
    }
  }
};
</script>

<style scoped>
.login-form__container {
  display: flex;
  flex-direction: column;
  gap: 1.3em;
  justify-content: center;
}
</style>

