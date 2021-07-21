<template>
  <!-- <ReceiptTable :columns="columns" :rows="rows" /> -->
  <div class="Receipt__container">
    <table class="Receipt">
      <thead>
        <tr>
          <th scope="col">کدپیگیری</th>
          <th scope="col">کالا</th>
          <th scope="col">قیمت پرداخت شده</th>
          <th scope="col">آدرس ارسال شده</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.id" v-for="item in items">
          <th scope="row">{{ item.items[0].product.id }}</th>
          <th scope="row">{{ item.items[0].product.name }}</th>
          <th scope="row">{{ item.paid_amount }}</th>
          <th scope="row">{{ item.address }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
// import ReceiptTable from "./ReceiptTable.vue";

export default {
  name: "UserProfileReceipt",
  // components: {
  //   ReceiptTable,
  // },
  mounted() {
    this.getMyOrders();
  },
  methods: {
    getMyOrders() {
      // this.rows = [];
      this.items = [];
      axios
        .get("/api/v1/orders/")
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            let e = response.data[i];
            this.items.push(e);

          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      data: Object,
    };
  },
};
</script>

<style scoped>
.Receipt__container {
  background-color: var(--element-background);
  padding-top: 10px;
  padding-bottom: 50px;
  width: 1000px;
  /* height: 320px; */
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.Receipt {
  border-collapse: collapse;
  width: 95%;
  height: 50%;
}

.Receipt td {
  padding: 10px 0px;
  background-color: var(--element-background);
  /* color: var(--subtext-dark-color); */
  color: brown;
  text-align: justify;
  border-bottom: 2px solid var(--primary-background);
  font-size: 14px;
  padding-right: 50px;
}
.Receipt th {
  padding: 20px 0px;
  background-color: var(--element-background);
  color: rgb(181, 183, 189);
  border-bottom: 2px solid var(--primary-background);
  text-align: justify;
  padding-right: 50px;
}
</style>
