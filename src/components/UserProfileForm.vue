<template>
  <div class="UserProfileForm__container">
    <Subform
      class="name"
      inputType="text"
      name="نام"
      inputPlaceholder="هادی"
      input__heightSize=" 2.6"
      input__widthSize=" 17.5"
      label__widthSize="5.3"
      label__heightSize="2.6"
    />
    <Subform
      class="familyName"
      inputType="text"
      name="نام خانوادگی"
      inputPlaceholder="طباطبایی"
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
      input__heightSize=" 4.6"
      input__widthSize="41.5"
      label__widthSize="5.3"
      label__heightSize="4.6"
    />

    <Subform
      class="address"
      inputType="text"
      name="آدرس"
      inputPlaceholder="تهران، تهران، امیرکبیر"
      input__heightSize=" 4.6"
      input__widthSize="41.5"
      label__widthSize="5.3"
      label__heightSize="4.6"
    />
  </div>
</template>

<script>
import Subform from "./Subform.vue";
export default {
  name : "UserProfileForm",
  components: { Subform }
    }

</script>
<style scoped>
.name {
  grid-area: first;
}
.familyName {
  grid-area: second;
}

.pass {
  grid-area: third;
}
.address {
  grid-area: fourth;
}

.UserProfileForm__container {
  justify-items: center;
  align-content: center;
  display: grid;
  row-gap: 10px;
  column-gap: 10px;
  grid-template-areas:
    "first second"
    "third third"
    "fourth fourth";
  }
</style>
