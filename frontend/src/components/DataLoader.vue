<template>
  <div>
    <div v-if="loading">
      <slot style="margin: auto 0 ;" name="loading">
        <Spinner />
      </slot>
      <slot name="loading-message">Loading your data...</slot>
    </div>
    <slot name="error" v-else-if="error">{{ error }}</slot>
    <slot v-else :data="data" />
  </div>
</template>

<script>
import _ from "lodash";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      error: null,
      isDebouncing: true,
    };
  },
  components: {
    Spinner,
  },
  created() {
    this.findData();
    this.updateEndpoint = _.debounce(function() {
      this.findData();
    }, 300);
  },
  watch: {
    endpoint: function() {
      this.updateEndpoint();
    },
  },
  methods: {
    
    async findData() {
      try {
        this.error = null;
        this.loading = true;
        let results = await this.axios.get(this.endpoint);
        this.$emit('recieveData', results.data)
      } catch (e) {
        console.log(e);
        this.error = "This resource is not loading";
      }
      this.loading = false;
    },
  },
  props: {
    endpoint: {
      type: String,
      required: true,
    },
    authToken: {
      type: String,
      required: false,
    },
  },
};
</script>
