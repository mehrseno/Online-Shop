<template>
  <div class="register-form__container">
    <Subform
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

