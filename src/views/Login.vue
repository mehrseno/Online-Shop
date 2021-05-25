<template>
  <div>
    <h1>فروشگاه-ورود</h1>
    <LoginForm />
    <SubmitButton type="button" class="search-wrapper__submit" submit="ورود" />
  </div>
</template>

<script>
import SubmitButton from "../components/SubmitButton.vue";
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "Login",
  components: {
    SubmitButton,
    LoginForm,
  },
};
</script> -->

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        gap: 30px;
    }
</style>

