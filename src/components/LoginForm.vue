<template>
  <div>
    <LoginSubform type="text" name="ایمیل" inputPlaceholder="اه" />
    <LoginSubform type="text" name="ایمیل" inputPlaceholder="اه" />
  </div>
</template>

<script>
import LoginSubform from "./LoginSubform.vue";
export default {
  name: "LoginForm",
  components: { LoginSubform },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
   gap: 1.3em; 
  margin-bottom: 30px; 
}
</style>

