 <template>
  <tr v-for="reciept in reciepts" :key="reciept.id">
    <reciept :reciept="reciept" />
  </tr>
</template>
<script>
import Reciept from "./Reciept.vue";

export default {
  name: "Reciepts",
  props: {
    reciepts: Array,
  },
  components: {
    Reciept,
  },
};
</script>

