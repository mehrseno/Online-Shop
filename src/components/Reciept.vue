 <template>
  <div>
    <td>{{ reciept.code }}</td>
    <td>{{ reciept.name }}</td>
    <td>{{ reciept.price }}تومان</td>
    <td>{{ reciept.address }}</td>
  </div>
</template>
 
<script>
export default {
  name: "Reciept",
  props: {
    reciept: Object,
  },
};
</script>

<style scoped>
td {
  padding: 10px 0px;
  background-color: var(--element-background);
  color: var(--subtext-dark-color);
  text-align: justify;
  border-bottom: 2px solid var(--primary-background);
  font-size: 14px;
  padding-right: 50px;
}
</style>