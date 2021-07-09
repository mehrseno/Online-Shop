<template>
  <div class="login-form__container">
    <Subform
      class="mail"
      name="ایمیل"
      input__vModel="email"
      input__type="email"
      input__class="small__input ltr__input"
      label__class="small__label"
      input__placeholder="...ایمیل خود را وارد کنید"
    />
    <Subform
      class="name"
      name="رمز عبور"
      input__vModel="password"
      input__type="password"
      input__placeholder="...رمز عبور خود را وارد کنید"
      input__class="small__input ltr__input"
      label__class="small__label"
      input__pattern=".{6,}"
    />
  </div>
</template>

<script>
import Subform from "./Subform.vue";
export default {
  name: "LoginForm",
  components: { Subform },
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

