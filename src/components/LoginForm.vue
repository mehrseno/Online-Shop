<template>
  <div class="login__container">
    <Subform
      input__type="email"
      name="ایمیل"
      input__placeholder="ایمیل خود را وارد کنید..."
      class="mail"
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />
    <Subform
      input__type="password"
      name="رمز عبور"
      input__placeholder="رمز عبور خود را وارد کنید..."
      class="name"
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

