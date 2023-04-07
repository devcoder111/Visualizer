<template>
  <Visualizer />
</template>

<script>
import Visualizer from "../components/visualizer.vue";
export default {
  name: "App",

  components: {
    Visualizer,
  },

  mounted() {
    console.log("Visualizer view mounted", this.$route);
  },
};
</script>
