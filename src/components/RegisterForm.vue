<template>
  <div class="container">
    <div class="row__container">
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
    </div>
    <div class="row__container">
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
        name="رمز عبور"
        inputPlaceholder="رمز عبور خود را وارد کنید..."
        input__heightSize=" 2.6"
        input__widthSize=" 17.5"
        label__widthSize="5.3"
        label__heightSize="2.6"
      />
    </div>
    <div class="row__container">
      <Subform
        class="address"
        inputType="text"
        name="آدرس"
        inputPlaceholder="آدرس خود را وارد کنید..."
        input__heightSize=" 4.6"
        input__widthSize="41.5"
        label__widthSize="5.3"
        label__heightSize="4.6"
      />
    </div>
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
/* .name {
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
} */

/* .container {
  display: grid;
  grid-template-areas:
    "first second"
    "third fourth"
    "fifth fifth";
  grid-template-rows: auto;
  row-gap: 1.3rem;
  column-gap: 1.3rem;
  grid-template-columns: auto;
} */
.row__container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.container {
  display: flex;
  flex-direction: column;
}
</style>

