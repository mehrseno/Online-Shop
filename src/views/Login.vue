<template>
  <div class="login-container">
    <h2>فروشگاه - ورود</h2>
    <div class="login-form__container">
      <custom-field
        class="mail"
        type="email"
        label="ایمیل"
        placeholder="ایمیل خود را وارد کنید..."
        :require="true"
        :validate="validateEmail"
      />
      <custom-field
        class="name"
        type="password"
        label="رمزعبور"
        placeholder="رمز عبور خود را وارد کنید..."
        :require="true"
        :validate="validatePass"
      />
      <!-- <Subform
      class="mail"
      name="ایمیل"
      input__type="email"
      input__class="small__input ltr__input"
      label__class="small__label"
      input__placeholder="...ایمیل خود را وارد کنید"
    /> -->
      <!-- <Subform
      class="name"
      name="رمز عبور"
      input__type="password"
      input__placeholder="...رمز عبور خود را وارد کنید"
      input__class="small__input ltr__input"
      label__class="small__label"
      input__pattern=".{6,}"
    /> -->
    </div>
    <SubmitButton
      type="button"
      class="search-wrapper__submit btn"
      submit="ورود"
      @show="showModal()"
    />
    <modal
      v-show="isModalVisible"
      @close="closeModal"
      :modalMassage="modalMassage"
    />
    <router-link to="/register" class="register_now"
      >اگر حسابی ثبت نکرده‌اید در اینجا ثبت کنید.</router-link
    >
  </div>
</template>

<script>
import SubmitButton from "../components/SubmitButton.vue";
import LoginForm from "../components/LoginForm.vue";
import Modal from "../components/Modal.vue";
import useFormValidation from "../modules/useFormValidation";
import CustomField from "../components/CustomField.vue";
import Subform from "../components/Subform.vue";

export default {
  name: "Login",
  components: {
    SubmitButton,
    LoginForm,
    Modal,
    Subform,
    CustomField,
  },
  props: {
    modalMassage: String,
  },
  data() {
    return {
      isModalVisible: false,
      modalMassage: "",
      isMatched: "",
      errors: {},
      values: {},
      full: { ایمیل: "", رمزعبور: "" },
      pastUser: [
        { email: "mehr.seno@gmail.com", password: "mehrnaz123" },
        { email: "m.seno@gmail.com", password: "mehr321" },
      ],
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      this.modalMassage = this.finalValidate();
    },

    closeModal() {
      this.isModalVisible = false;
    },

    validatePass(text) {
      const { validatePass, errors } = useFormValidation();
      console.log(validatePass);
      validatePass("رمز عبور", text);

      text ? (this.full["رمزعبور"] = text) : (this.full["رمزعبور"] = "");
      this.user.password = text;
      return errors["رمز عبور"];
    },

    validateEmail(text) {
      const { validateEmailField, errors } = useFormValidation();
      validateEmailField("ایمیل", text);
      text ? (this.full["ایمیل"] = text) : (this.full["ایمیل"] = "");
      this.user.email = text;
      return errors["ایمیل"];
    },

    finalValidate() {
      console.log(this.errors);
      console.log(this.currentUser);
      this.values = Object.values(this.full);
      this.isMatched = this.matched(this.user);
      console.log(this.values);
      if (
        JSON.stringify(this.errors) === "{}" &&
        this.isMatched &&
        !this.values.includes("")
      ) {
        return ".شما با موفقیت وارد شدید";
      } else {
        return ".ایمیل و یا نام کاربری شما صحیح نمی‌باشد";
      }
    },
    matched(obj) {
      return this.pastUser.some(function (el) {
        return el.password === obj.password && el.email === obj.email;
      });
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
.login-form__container {
  display: flex;
  flex-direction: column;
  gap: 1.3em;
  justify-content: center;
}
</style>