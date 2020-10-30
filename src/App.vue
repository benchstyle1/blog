<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import "normalize-css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import MainLayout from "@/layouts/MainLayout.vue";
import DetailLayout from "@/layouts/DetailLayout.vue";

export default {
  name: "App",
  components: {
    MainLayout,
    DetailLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style></style>
