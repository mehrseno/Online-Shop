<template>
  <div class="UserProfile-form__container">
    <custom-field
      class="name"
      type="text"
      :placeholder="user.name"
      :require="true"
      label="نام"
      :validate="validateName"
    />
    <custom-field
      class="familyName"
      :type="text"
      :placeholder="user.lastname"
      :require="true"
      label="نام خانوادگی"
      :validate="validateName"
    />
    <custom-field
      class="pass"
      type="password"
      placeholder="رمز عبور خود را وارد کنید..."
      :require="true"
      label="رمز عبور"
      input_widht="41rem"
      :validate="validatePass"
    />

    <custom-field
      class="address"
      :type="text"
      :placeholder="user.address"
      :require="true"
      label="آدرس"
      input_widht="41rem"
      height="4.6rem"
      :validate="validateAddress"
    />

    <!-- <Subform
      class="name"
      input__type="text"
      name="نام"
      input__placeholder="هادی"
      input__class="small__input"
      label__class="small__label"
    /> -->
    <!-- <Subform
      class="familyName"
      input__type="text"
      name="نام خانوادگی"
      input__placeholder="طباطبایی"
      input__class="small__input"
      label__class="small__label"
    /> -->
    <!-- 
    <Subform
      class="pass"
      input__type="password"
      input__pattern=".{6,}"
      name="رمز عبور"
      input__placeholder="رمز عبور خود را وارد کنید..."
      input__class="medium__input"
      label__class="small__label"
    /> -->

    <!-- <Subform
      class="address"
      input__type="text"
      name="آدرس"
      input__class="large__input"
      label__class="large__label"
      input__placeholder=""
    /> -->

    <SubmitButton
      type="submit"
      class="submit"
      submit="ویرایش اطلاعات"
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
import Subform from "./Subform.vue";
import CustomField from "./CustomField.vue";
import useFormValidation from "@/modules/useFormValidation";
import Modal from "../components/Modal.vue";

export default {
  name: "UserProfileForm",
  components: { SubmitButton, Subform, CustomField, Modal },
  data() {
    return {
      user: {
        name: "hadi",
        lastname: "taba",
        address: "تهران، تهران، امیرکبیر",
      },
      isModalVisible: false,
      modalMassage: "",
    };
  },
  methods: {
    validateName(text) {
      const { validateNameField, errors } = useFormValidation();
      validateNameField("نام", text);
      return errors["نام"];
    },
    validatePass(text) {
      const { validatePass, errors } = useFormValidation();
      validatePass("رمز عبور", text);
      return errors["رمز عبور"];
    },
    validateAddress(text) {
      const { validAddress, errors } = useFormValidation();
      validAddress("آدرس", text);
      return errors["آدرس"];
    },
    showModal() {
      this.isModalVisible = true;
      this.modalMassage = this.finalValidate();
    },
    closeModal() {
      this.isModalVisible = false;
    },
    finalValidate() {
      const { errors } = useFormValidation();
      let message = "";
      for (var key in errors) {
        var value = errors[key];
        message += `\n${value}`;
      }
      if (message === "") {
        message = "اطلاعات بروز شد";
      }
      return message;
    },
  },
};
</script>
<style scoped>
.name {
  grid-area: first;
}
.familyName {
  grid-area: second;
}

.pass {
  grid-area: third;
}
.address {
  grid-area: fourth;
}

.submit {
  grid-area: fifth;
}

.UserProfile-form__container {
  justify-items: center;
  align-content: center;
  display: grid;
  row-gap: 20px;
  column-gap: 10px;
  grid-template-areas:
    "first second"
    "third third"
    "fourth fourth"
    "fifth fifth";
}
</style>
