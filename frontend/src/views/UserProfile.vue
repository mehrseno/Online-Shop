<template>
  <div class="userProfile__container">
    <div class="header">
      <span class="welcome">هادی عزیز، خوش آمدید|</span>
      <span>  موجودی حساب شما {{ amount }}</span>
      <span class="inc_amount">افزایش موجودی</span>
    </div>
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

export default {
  name: "UserProfile",
  components: {
    SubmitButton,
    UserProfileForm,
    UserProfileReceipt,
    Tabs,
    Tab,
  },
  data() {
    return {
      amount: 10000,
    };
  },
};
</script>

<style scoped>

.inc_amount {
  font-weight: bold;
  padding: 10px;
  background: var(--complementary-color);
  border-radius: 30px;
  margin-right: 10px;
}

.header {
  margin-top: 100px;
}

.welcome {
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
