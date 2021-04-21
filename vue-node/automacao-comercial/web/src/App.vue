<template>
  <div id="app" style="margin-top:0%">
    <RegisterClient />
  </div>
</template>

<script>
import RegisterClient from "./components/RegisterClient.vue";

export default {
  name: "app",
  components: {
    RegisterClient
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
