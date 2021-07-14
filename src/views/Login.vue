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
      errors: {},
      secondaryErrors: {},
      hasPassword: "",
      hasEmail: "",
      pastUser: {
        email: "mehr.seno@gmail.com",
        password: "mehrnaz123",
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
      if (text) {
        this.hasPassword = text;
      }
      if (text == this.pastUser.password) {
        console.log("matched");
        delete this.secondaryErrors["رمزعبور"];
      } else {
        this.secondaryErrors["رمزعبور"] = "unmatched";
        console.log(this.secondaryErrors);
      }
      return errors["رمز عبور"];
    },

    validateEmail(text) {
      const { validateEmailField, errors } = useFormValidation();
      validateEmailField("ایمیل", text);
      if (text) {
        this.hasEmail = text;
      }
      if (text == this.pastUser.email) {
        console.log("matched");
        delete this.secondaryErrors["ایمیل"];
      } else {
        this.secondaryErrors["ایمیل"] = "unmatched";
        console.log(this.secondaryErrors);
      }
      return errors["ایمیل"];
    },

    finalValidate() {
      console.log(this.hasPassword);
      console.log(this.hasEmail);

      console.log(this.errors);
      console.log(this.secondaryErrors);
      if (
        JSON.stringify(this.errors) === "{}" &&
        JSON.stringify(this.secondaryErrors) === "{}"
        &&  this.hasPassword !== "" &&   this.hasEmail!== ""
      ) {
        return "succesful";
      } else {
        return " not succesfull";
      }
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