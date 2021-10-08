<template>
  <v-app>
    <v-app-bar color="deep-purple accent-4" app dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Eskantu</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/75.jpg"></v-img>
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3 headline">@Eskantu</p>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
  }),
};
</script>
