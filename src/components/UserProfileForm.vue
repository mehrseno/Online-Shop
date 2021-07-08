<template>
  <div class="UserProfile-form__container">
    <Subform
      class="name"
      input__type="text"
      name="نام"
      input__placeholder="هادی"
      input__class="small__input"
      label__class="small__label"
    />
    <Subform
      class="familyName"
      input__type="text"
      name="نام خانوادگی"
      input__placeholder="طباطبایی"
      input__class="small__input"
      label__class="small__label"
    />

    <Subform
      class="pass"
      input__type="password"
      input__pattern=".{6,}"
      name="رمز عبور"
      input__placeholder="رمز عبور خود را وارد کنید..."
     input__class="medium__input"
     label__class="small__label"
    />

    <Subform
      class="address"
      input__type="text"
      name="آدرس"
      input__class="large__input"
      label__class="large__label"
      input__placeholder="تهران، تهران، امیرکبیر"
    />
  </div>
</template>

<script>
import Subform from "./Subform.vue";
export default {
  name: "UserProfileForm",
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

.pass {
  grid-area: third;
}
.address {
  grid-area: fourth;
}

.UserProfile-form__container {
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
