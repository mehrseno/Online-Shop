<template>
  <div class="register__container">
    <h2>فروشگاه - ثبت‌نام</h2>

    <div class="register-form__container">
      <custom-field
        class="name"
        type="text"
        v-model="user.name"
        placeholder="نام خود را وارد کنید..."
        :require="true"
        label="نام"
        :validate="validateName"
      />
      <custom-field
        class="familyName"
        :type="text"
        v-model="user.lastname"
        placeholder="نام خانوادگی خود را وارد کنید..."
        :require="true"
        label="نام خانوادگی"
        :validate="validateFamilyName"
      />
      <custom-field
        class="mail"
        type="email"
        v-model="user.email"
        placeholder="ایمیل خود را وارد کنید..."
        :require="true"
        label="ایمیل"
        :validate="validateEmail"
      />
      <custom-field
        class="pass"
        type="password"
        v-model="user.password"
        placeholder="رمز عبور خود را وارد کنید..."
        :require="true"
        label="رمز عبور"
        :validate="validatePass"
      />

      <custom-field
        class="address"
        :type="text"
        v-model="user.address"
        placeholder="آدرس خود را وارد کنید..."
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
    <!-- phase 2 - fake register  -->

    <!-- <SubmitButton
      type="submit"
      class="search-wrapper__submit"
      submit="ثبت‌نام"
      @show="showModal()"
    /> -->
    <SubmitButton
      type="submit"
      class="search-wrapper__submit"
      submit="ثبت‌نام"
      @show="register()"
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
import { toast } from "bulma-toast";
import axios from "axios";

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
        name: "",
        lastname: "",
        email: "",
        password: "",
        address: "",
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
      this.user.password = text;
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
      return this.pastUser.some(function(el) {
        return el.email === obj.email;
      });
    },
    register() {
      // check the validation
      if (
        JSON.stringify(this.errors) === "{}" &&
        !Object.values(this.full).includes("")
      ) {
        const formData = {
          // firstname: this.user.name,
          // lastname: this.user.lastname,
          username: this.user.email,
          password: this.user.password,
          // address: this.user.address,
        };

        axios
          .post("api/v1/users/", formData)
          .then((response) => {
            toast({
              message: "Account created, please log in!",
              type: "is-success",
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: "top-right",
            });
            this.$router.push("/login");
          })
          .catch((error) => {
            if (error.response) {
              for (const prop in error.response.data) {
                toast({
                  message: error.response.data[prop],
                  type: "is-success",
                  dismissible: true,
                  pauseOnHover: true,
                  duration: 2000,
                  position: "top-right",
                });
              }
            } else if (error.message) {
              console.log(error.message);
            }
          });
      } else {
        this.isModalVisible = true;
        this.modalMassage = " لطفا اطلاعات  را کامل و به درستی تکمیل نمایید.";
        console.log(this.full);
      }
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
