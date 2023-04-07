<template>
  <v-app>
    <v-main>
      <router-link to="/about">about</router-link>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import visualizer from "./components/visualizer.vue";

export default {
  name: "App",

  components: {
    // visualizer,
  },

  mounted() {
    console.log("App.vue mounted", this.$route);
  },
};
</script>
<style>
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  background: #7cb0f4;
  border-radius: 7px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #dbe2ed;
}
</style>
