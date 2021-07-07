<template>
  <div class="login__container">
    <Subform
      class="mail"
      name="ایمیل"
      input__type="email"
      input__placeholder="...ایمیل خود را وارد کنید"
      input__direction="ltr"
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />
    <Subform
      class="name"
      name="رمز عبور"
      input__type="password"
      input__placeholder="...رمز عبور خود را وارد کنید"
      input__direction="ltr"
      input__pattern=".{6,}"
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
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
.login__container {
  display: flex;
  flex-direction: column;
  gap: 1.3em;
  justify-content: center;
}
</style>

