<template>
  <div class="container">
    <LoginSubform type="email" name="ایمیل" inputPlaceholder="ایمیل خود را وارد کنید..." />
    <LoginSubform type="text" name="رمز عبور" inputPlaceholder="رمز عبور خود را وارد کنید..." />
  </div>
</template>

<script>
import LoginSubform from "./Subform.vue";
export default {
  name: "LoginForm",
  components: { LoginSubform },
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

