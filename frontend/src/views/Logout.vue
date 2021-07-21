<template> </template>

<script>
import axios from "axios";
export default {
  created() {
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userid");
    this.$store.commit("removeToken");
    this.$store.commit("clearCart");
    this.$router.push("/");
  },
};
</script>

<style></style>
