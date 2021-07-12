<template>
  <div class="login-container">
    <h2>فروشگاه - ورود</h2>
    <LoginForm />
    <SubmitButton
      type="button"
      class="search-wrapper__submit btn"
      submit="ورود"
      @show="showModal()"
    />
    <modal v-show="isModalVisible" @close="closeModal" />
    <router-link to="/register" class="register_now"
      >اگر حسابی ثبت نکرده‌اید در اینجا ثبت کنید.</router-link
    >
  </div>
</template>

<script>
import SubmitButton from "../components/SubmitButton.vue";
import LoginForm from "../components/LoginForm.vue";
import Modal from "../components/Modal.vue";

export default {
  name: "Login",
  components: {
    SubmitButton,
    LoginForm,
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.register_now {
  color: rgb(14, 186, 197);
}
h2 {
  color: rgb(14, 186, 197);
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
.login-container {
  background-color: rgb(231, 232, 236);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 30px;
  height: 100vh;
  align-items: center;
}
</style>



