<template>
  <ReceiptTable :columns="columns" :rows="rows" />
</template>

<script>
import axios from "axios";
import ReceiptTable from "./ReceiptTable.vue";

export default {
  name: "UserProfileReceipt",
  components: {
    ReceiptTable,
  },
  mounted() {
    this.getMyOrders();
  },
  methods: {
    getMyOrders() {
      this.rows = [];
      axios
        .get("/api/v1/orders/")
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            let e = response.data[i];
            // this.rows.push(e.itmes);
          }
          console.log(this.rows);
          console.log(this.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      data: Object,
      columns: ["کد پیگیری", "کالا", "قیمت پرداخت شده", "آدرس ارسال شده"],
      rows: [
        {
          "کد پیگیری": "SHOP102030",
          کالا: "موس گیمینگ ریز",
          "قیمت پرداخت شده": "10/000",
          "آدرس ارسال شده": "تهران، تهران، امیرکبیر",
        },
        {
          "کد پیگیری": "SHOP102030",
          کالا: "موس گیمینگ ریز",
          "قیمت پرداخت شده": "10/000",
          "آدرس ارسال شده": "تهران، تهران، امیرکبیر",
        },

        {
          "کد پیگیری": "SHOP102030",
          کالا: "موس گیمینگ ریز",
          "قیمت پرداخت شده": "10/000",
          "آدرس ارسال شده": "تهران، تهران، امیرکبیر",
        },
        {
          "کد پیگیری": "SHOP102030",
          کالا: "موس گیمینگ ریز",
          "قیمت پرداخت شده": "10/000",
          "آدرس ارسال شده": "تهران، تهران، امیرکبیر",
        },
      ],
    };
  },
};
</script>
