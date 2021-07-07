<template>
  <div class="register-form__container">
    <Subform
      class="name"
      name="نام"
      input__type="text"
      input__placeholder="نام خود را وارد کنید..."
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />
    <Subform
      class="familyName"
      name="نام خانوادگی"
      input__type="text"
      input__placeholder="نام خانوادگی خود را وارد کنید..."
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />

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
      class="pass"
      name="رمز عبور"
      title="six or more"
      input__type="password"
      input__pattern=".{6,}"
      input__placeholder="...رمز عبور خود را وارد کنید"
      input__direction="ltr"
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />

    <Subform
      class="address"
      input__type="text"
      name="آدرس"
      input__placeholder="آدرس خود را وارد کنید..."
      input__heightSize=" 4.6"
      input__widthSize="41"
      label__widthSize="5.3"
      label__heightSize="4.6"
    />
  </div>
</template>

<script>
import Subform from "./Subform.vue";
export default {
  name: "RegisterForm",
  components: { Subform },
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
  gap: 10px;
  grid-template-areas:
    "first second"
    "third fourth"
    "fifth fifth";
}
</style>

