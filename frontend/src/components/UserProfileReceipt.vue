<template>
  <!-- <ReceiptTable :columns="columns" :rows="rows" /> -->
  <div class="Receipt__container">
    <table class="Receipt">
      <thead>
        <div class="x">
          <tr>
            <th scope="col">کدپیگیری</th>
            <th scope="col">کالا</th>
            <th scope="col">قیمت پرداخت شده</th>
            <th scope="col">آدرس ارسال شده</th>
          </tr>
        </div>
      </thead>
      <tbody>
        <div class="x" v-for="re in items" :key="re.id">
          <tr :key="item.id" v-for="item in re.items">
            <th scope="row">{{ re.id }}-{{ item.product.id }}</th>
            <th scope="row">{{ item.product.name }}</th>
            <th scope="row">{{ item.quantity * item.product.price }}</th>
            <th scope="row">{{ re.address }}</th>
          </tr>
        </div>
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
      console.log("in get my orders");
      // this.rows = [];
      this.items = [];
      axios
        .get("/api/v1/orders/")
        .then((response) => {
          console.log(response.data);
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
      items: this.items,
    };
  },
};
</script>

<style scoped>
.Receipt thead {
  width: 100%;
}
.Receipt tbody {
  width: 100%;
  /* width: 800px; */
}
.x {
  width: 100%;
  /* background: black; */
}
.Receipt tr {
  background: brown;
  width: 100%;
}
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
  color: var(--subtext-dark-color);
  color: brown;
  text-align: justify;
  border-bottom: 2px solid var(--primary-background);
  font-size: 14px;
  padding-right: 50px;
}
.Receipt th {
  width: 33%;
  background-color: var(--element-background);
  padding: 20px 0px;
  color: rgb(181, 183, 189);
  border-bottom: 2px solid var(--primary-background);
  text-align: justify;
  padding-right: 50px;
}
</style>
