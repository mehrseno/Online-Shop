
  <template>
  <div class="Receipt__container">
    <table class="Receipt">
      <thead>
        <tr>
          <th>کد پیگیری</th>
          <th>کالا</th>
          <th>قیمت پرداخت شده</th>
          <th>آدرس ارسال شده</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.code }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}تومان</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          code: "SHOP102030",
          name: "موس گیمینگ ریز",
          price: "10/000",
          address: "تهران، تهران، امیرکبیر",
        },
        {
          code: "SHOP102030",
          name: "موس گیمینگ ریز",
          price: "10/000",
          address: "تهران، تهران، امیرکبیر",
        },
        {
          code: "SHOP102030",
          name: "موس گیمینگ ریز",
          price: "10/000",
          address: "تهران، تهران، امیرکبیر",
        },
        {
          code: "SHOP102030",
          name: "موس گیمینگ ریز",
          price: "10/000",
          address: "تهران، تهران، امیرکبیر",
        },
        {
          code: "SHOP102030",
          name: "موس گیمینگ ریز",
          price: "10/000",
          address: "تهران، تهران، امیرکبیر",
        },
      ],
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
  height: 320px;
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
  text-align: justify;
  border-bottom: 2px solid var(--primary-background);
  font-size: 14px;
  padding-right:50px ;
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
