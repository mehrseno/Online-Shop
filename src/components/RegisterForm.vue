<template>
  <div class="container">
    <Subform
      class="name"
      input__type="text"
      name="نام"
      input__placeholder="نام خود را وارد کنید..."
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />
    <Subform
      class="familyName"
      input__type="text"
      name="نام خانوادگی"
      input__placeholder="نام خانوادگی خود را وارد کنید..."
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />

    <Subform
      class="mail"
      input__type="email"
      name="ایمیل"
      input__placeholder="ایمیل خود را وارد کنید..."
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />
    <Subform
      class="pass"
      input__type="password"
      input__pattern=".{6,}"
      title="six or more"
      name="رمز عبور"
      input__placeholder="رمز عبور خود را وارد کنید..."
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

