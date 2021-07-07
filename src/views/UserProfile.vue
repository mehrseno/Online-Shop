<template>
  <div class="userProfile__container">
    <h2>هادی عزیز، خوش آمدید</h2>
    <Tabs>
      <tab title="پروفایل">
        <UserProfileForm />
      </tab>
      <tab title="رسیدها">
        <UserProfileReceipt />
      </tab>
    </Tabs>
  </div>
</template>
<script>
import Tab from "../components/Tab.vue";
import Tabs from "../components/Tabs.vue";
import SubmitButton from "../components/SubmitButton.vue";
import UserProfileForm from "../components/UserProfileForm.vue";
import UserProfileReceipt from "../components/UserProfileReceipt.vue";

// import ReceiptProfile from "../components/ReceiptProfile.vue"
export default {
  name: "UserProfile",
  components: {
    SubmitButton,
    UserProfileForm,
    UserProfileReceipt,
    Tabs,
    Tab,
  },
};
</script>

<style scoped>

Tabs {

}
h2 {
  color: var(--text-dark-color);
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 50px;
}

.userProfile__container {
  background-color: var(--primary-background);
  /* color: #fff; */
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
