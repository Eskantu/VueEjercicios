<template>
  <v-app class="container">
    <v-main>
      <Logo></Logo>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Logo from "./components/HelloWorld.vue";
export default {
  name: "App",

  data: () => ({}),
  components: {
    Logo,
  },
};
</script>
