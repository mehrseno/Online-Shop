<template>
  <div class="container">
    <Subform type="email" name="ایمیل" inputPlaceholder="ایمیل خود را وارد کنید..." />
    <Subform type="password" name="رمز عبور" inputPlaceholder="رمز عبور خود را وارد کنید..." />
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
.container{
  display: flex;
  flex-direction: column;
  gap: 1.3em; 
  justify-content: center;
}
</style>

