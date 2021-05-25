<template>
  <div>
    <h2>فروشگاه - ورود</h2>
    <LoginForm />
    <SubmitButton type="button" class="search-wrapper__submit" submit="&nbsp &nbsp &nbsp&nbspورود &nbsp &nbsp &nbsp" />
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
h2 {
  color: rgb(14, 186, 197);
  margin-top: 150px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
div {
  background-color: rgb(231, 232, 236);
  color: #fff;
  /* padding-top: 65px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: stretch; */
  text-align: center;
  width: 100%;
  gap: 30px;
  /* height: 100%; */
  align-items: center;
  /* margin-top: 30px; */
}
</style>

