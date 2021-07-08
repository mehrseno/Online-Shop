<template>
  <div class="Receipt__container">
    <table class="Receipt">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(column, index) in columns" :key="index">
            {{ row[column] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    columns: Array,
    rows: Array,
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
