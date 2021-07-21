<template> </template>

<script>
import axios from "axios";
import { getAPI } from "../axios-api";
export default {
  created() {
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userid");
    this.$store.commit("removeToken");
    this.$router.push("/");
  },
};
</script>

<style></style>
