<template>
  <div>
    <h2>فروشگاه - ورود</h2>
    <LoginForm />
    <SubmitButton type="button" class="search-wrapper__submit" submit="&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbspورود &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" />
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
</script> 

<style scoped>
h2 {
  color: rgb(14, 186, 197);
  margin-top: 200px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
div {
  background-color: rgb(231, 232, 236);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 30px;
  align-items: center;
}
</style>

