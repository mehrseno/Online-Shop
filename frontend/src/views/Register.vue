<template>
  <div class="register__container">
    <h2>فروشگاه - ثبت‌نام</h2>

    <div class="register-form__container">
      <custom-field
        class="name"
        type="text"
        placeholder="user.name"
        :require="true"
        label="نام"
        :validate="validateName"
      />
      <custom-field
        class="familyName"
        :type="text"
        placeholder="user.lastname"
        :require="true"
        label="نام خانوادگی"
        :validate="validateFamilyName"
      />
      <custom-field
        class="mail"
        type="email"
        placeholder="ایمیل خود را وارد کنید..."
        :require="true"
        label="ایمیل"
        :validate="validateEmail"
      />
      <custom-field
        class="pass"
        type="password"
        placeholder="رمز عبور خود را وارد کنید..."
        :require="true"
        label="رمز عبور"
        :validate="validatePass"
      />

      <custom-field
        class="address"
        :type="text"
        placeholder="user.address"
        :require="true"
        label="آدرس"
        input_widht="41rem"
        height="4.6rem"
        :validate="validateAddress"
      />

      <!-- <Subform
      class="name"
      name="نام"
      input__type="text"
      input__class="small__input"
      label__class="small__label"
      input__placeholder="نام خود را وارد کنید..."
    />
    <Subform
      class="familyName"
      name="نام خانوادگی"
      input__type="text"
      input__class="small__input"
      label__class="small__label"
      input__placeholder="نام خانوادگی خود را وارد کنید..."
    />

    <Subform
      class="mail"
      name="ایمیل"
      input__type="email"
      input__class="small__input ltr__input"
      label__class="small__label"
      input__placeholder="...ایمیل خود را وارد کنید"
    />
    <Subform
      class="pass"
      name="رمز عبور"
      input__class="small__input ltr__input "
      label__class="small__label"
      input__type="password"
      input__pattern=".{6,}"
      input__placeholder="...رمز عبور خود را وارد کنید"
    />

    <Subform
      class="address"
      input__type="text"
      name="آدرس"
      input__class="large__input"
      label__class="large__label extra__padding "
      input__placeholder="آدرس خود را وارد کنید..."
    /> -->
    </div>

    <SubmitButton
      type="submit"
      class="search-wrapper__submit"
      submit="ثبت‌نام"
      @show="showModal()"
    />
    <modal
      v-show="isModalVisible"
      @close="closeModal"
      :modalMassage="modalMassage"
    />
  </div>
</template>

<script>
import SubmitButton from "../components/SubmitButton.vue";
import RegisterForm from "../components/RegisterForm.vue";
import CustomField from "../components/CustomField.vue";
import useFormValidation from "@/modules/useFormValidation";
import Subform from "../components/Subform.vue";
import Modal from "../components/Modal.vue";
export default {
  name: "Register",
  components: {
    SubmitButton,
    RegisterForm,
    Subform,
    CustomField,
    Modal,
  },
  props: {
    modalMassage: String,
  },
  data() {
    return {
      isModalVisible: false,
      modalMassage: "",
      isExist: "",
      errors: {},
      values: {},
      secondaryErrors: {},
      full: { ایمیل: "", رمزعبور: "", نام: "", آدرس: "", "نام خانوادگی": "" },
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

    validateName(text) {
      const { validateNameField, errors } = useFormValidation();
      validateNameField("نام", text);
      text ? (this.full["نام"] = text) : (this.full["نام"] = "");
      return errors["نام"];
    },
    validateFamilyName(text) {
      const { validateNameField, errors } = useFormValidation();
      validateNameField("نام", text);
      text
        ? (this.full["نام خانوادگی"] = text)
        : (this.full["نام خانوادگی"] = "");
      return errors["نام"];
    },
    validatePass(text) {
      const { validatePass, errors } = useFormValidation();
      validatePass("رمز عبور", text);
      text ? (this.full["رمزعبور"] = text) : (this.full["رمزعبور"] = "");
      return errors["رمز عبور"];
    },
    validateAddress(text) {
      const { validAddress, errors } = useFormValidation();
      validAddress("آدرس", text);
      text ? (this.full["آدرس"] = text) : (this.full["آدرس"] = "");
      return errors["آدرس"];
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
      this.isExist = this.Exist(this.user);
      this.values = Object.values(this.full);
      console.log(this.values);
      console.log(this.errors);
      console.log(this.isExist);
      if (
        JSON.stringify(this.errors) === "{}" &&
        !this.isExist &&
        !this.values.includes("")
      ) {
        return "ثبت‌نام شما با موفقیت انجام شد.";
      } else if (
        JSON.stringify(this.errors) !== "{}" ||
        this.values.includes("")
      ) {
        return " لطفا اطلاعات  را کامل و به درستی تکمیل نمایید.";
      } else {
        return "این حساب قبلا ثبت شده است.";
      }
    },
    Exist(obj) {
      return this.pastUser.some(function (el) {
        return el.email === obj.email;
      });
    },
  },
};
</script>

<style scoped>
h2 {
  color: rgb(14, 186, 197);
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
.register__container {
  background-color: rgb(231, 232, 236);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
  width: 100%;
  gap: 30px;
  height: 100vh;
  align-items: center;
  /* margin-top: 30px; */
}
.name {
  grid-area: first;
}
.familyName {
  grid-area: second;
}
.mail {
  grid-area: third;
}
.pass {
  grid-area: fourth;
}
.address {
  grid-area: fifth;
}

.register-form__container {
  display: grid;
  /* justify-content: center; */
  /* align-content: center; */
  row-gap: 20px;
  column-gap: 10px;
  grid-template-areas:
    "first second"
    "third fourth"
    "fifth fifth";
}
</style>
