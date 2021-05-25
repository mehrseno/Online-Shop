<template>
  <div class="container">
    <Subform
      class="name"
      type="text"
      name="نام"
      inputPlaceholder="نام خود را وارد کنید..."
    />
    <Subform
      class="familyName"
      type="text"
      name="نام خانوادگی"
      inputPlaceholder="نام خانوادگی خود را وارد کنید..."
    />

    <Subform
      class="mail"
      type="email"
      name="ایمیل"
      inputPlaceholder="ایمیل خود را وارد کنید..."
    />
    <Subform
      class="pass"
      type="password"
      name="رمز عبور"
      inputPlaceholder="رمز عبور خود را وارد کنید..."
    />
    <Subform
      class="address"
      type="text"
      name="آدرس"
      inputPlaceholder="آدرس خود را وارد کنید..."
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
.address{
  grid-area: fifth;
}

.container {
   display: grid;
  grid-template-areas:
   "first second"
   "third fourth"
   "fifth fifth";
  grid-template-rows:auto;
  row-gap: 1.3rem;
  column-gap: 1.3rem;
  grid-template-columns: auto;
}
</style>

