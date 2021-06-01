<template>
  <div class="userProfile__container">
    <h2>هادی عزیز خوش آمدی</h2>
    <h1>تب</h1>
    <UserProfileForm />
    <SubmitButton
      type="submit"
      class="search-wrapper__submit"
      submit="&nbsp &nbsp &nbsp&nbspویراش اطلاعات &nbsp &nbsp &nbsp"
    />
  </div>
</template>
<script>
import SubmitButton from "../components/SubmitButton.vue";
import UserProfileForm from "../components/UserProfileForm.vue";
// import ReceiptProfile from "../components/ReceiptProfile.vue"
export default {
  name: "UserProfile",
  components: {
    SubmitButton,
    UserProfileForm,
    // ReceiptProfile
  },
};
</script> 

<style scoped>
h2 {
  color: rgb(14, 186, 197);
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 50px;
}

.userProfile__container {
  background-color: rgb(231, 232, 236);
  color: #fff;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 30px;
  align-items: center;
  margin-top: 65px;
}
</style>

