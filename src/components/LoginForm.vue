<template>
  <div class="login-form__container">
    <custom-field
      class="mail"
      type="email"
      label="ایمیل"
      placeholder="ایمیل خود را وارد کنید..."
      :require="true"
      :validate="validateEmail"
      :ModalValidation="secondaryValidateEmail"
    />
    <custom-field
      class="name"
      type="password"
      label="رمزعبور"
      placeholder="رمز عبور خود را وارد کنید..."
      :require="true"
      :validate="validatePass"
      :ModalValidation="secondaryValidatePass"
    />
    <!-- <Subform
      class="mail"
      name="ایمیل"
      input__vModel="email"
      input__type="email"
      input__class="small__input ltr__input"
      label__class="small__label"
      input__placeholder="...ایمیل خود را وارد کنید"
    /> -->
    <!-- <Subform
      class="name"
      name="رمز عبور"
      input__vModel="password"
      input__type="password"
      input__placeholder="...رمز عبور خود را وارد کنید"
      input__class="small__input ltr__input"
      label__class="small__label"
      input__pattern=".{6,}"
    /> -->
  </div>
</template>

<script>
import useFormValidation from "@/modules/useFormValidation";
import CustomField from "./CustomField.vue";
import Subform from "./Subform.vue";
export default {
  name: "LoginForm",
  components: { Subform, CustomField },
  props: { FinalValidate: Function },
  data() {
    return {
      // user__list: [
      //   { email: "mehr.seno@gmail.com", password: "mehrnaz123" },
      //   { email: "m.seno@gmail.com", password: "mehrnaz12345" },
      // ],
      errors: {},
      secondary__errors: {},
      past_user: {
        email: "mehr.seno@gmail.com",
        password: "mehrnaz123",
      },
    };
  },
  methods: {
    validatePass(text) {
      const { validatePass, errors } = useFormValidation();
      console.log(validatePass);
      validatePass("رمز عبور", text);
      console.log(text);
      if (text == this.past_user.password) {
        console.log("matched");
        delete this.secondary__errors["رمزعبور"];
      } else {
        this.secondary__errors["رمزعبور"] = "unmatched";
        console.log(this.secondary__errors);
      }

      return errors["رمز عبور"];
    },

    validateEmail(text) {
      const { validateEmailField, errors } = useFormValidation();
      validateEmailField("ایمیل", text);
      if (text == this.past_user.email) {
        console.log("matched");
        delete this.secondary__errors["ایمیل"];
      } else {
        this.secondary__errors["ایمیل"] = "unmatched";
        console.log(this.secondary__errors);
      }
      return errors["ایمیل"];
    },

    FinalValidate() {
      if (this.errors || this.secondary__errors) {
        return "not succesful";
      } else if (!this.error && !this.secondary_error) {
        return "succesfull";
      }
    },
  },
};
</script>

<style scoped>
.login-form__container {
  display: flex;
  flex-direction: column;
  gap: 1.3em;
  justify-content: center;
}
</style>