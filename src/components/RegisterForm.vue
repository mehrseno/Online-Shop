<template>
  <div class="container">
    <Subform
      class="name"
      inputType="text"
      name="نام"
      inputPlaceholder="نام خود را وارد کنید..."
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />
    <Subform
      class="familyName"
      inputType="text"
      name="نام خانوادگی"
      inputPlaceholder="نام خانوادگی خود را وارد کنید..."
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />

    <Subform
      class="mail"
      inputType="email"
      name="ایمیل"
      inputPlaceholder="ایمیل خود را وارد کنید..."
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />
    <Subform
      class="pass"
      inputType="password"
      inputPattern=".{6,}"
      title="six or more"
      name="رمز عبور"
      inputPlaceholder="رمز عبور خود را وارد کنید..."
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />
  
    <Subform
      class="address"
      inputType="text"
      name="آدرس"
      inputPlaceholder="آدرس خود را وارد کنید..."
      input__heightSize=" 4.6"
      input__widthSize="42"
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

.container {
  display: grid;
  grid-template-areas:
    "first second"
    "third fourth"
    "fifth fifth";
  }
</style>

