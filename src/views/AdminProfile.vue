<template>
  <div class="adminprofile__container">
    <h2>ادمین عزیز، خوش آمدید</h2>
    <tabs>
      <tab title="لیست کالاها"> </tab>
      <tab title="لیست دسته‌ها"> <admin-profile-categories/></tab>
      <tab title="رسیدها"> <admin-profile-receipt/> </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from "../components/Tab.vue";
import Tabs from "../components/Tabs.vue";
import AdminProfileReceipt from '../components/AdminProfileReceipt.vue'
import AdminProfileCategories from '../components/AdminProfileCategories.vue'

export default {
  name: "AdminProfile",
  components: {
    Tabs,
    Tab,
    AdminProfileReceipt,
    AdminProfileCategories,
  },
};
</script>

<style scoped>
.adminprofile__container {
  display: flex;
  margin-top: 15%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  width: 100%;
}
</style>
