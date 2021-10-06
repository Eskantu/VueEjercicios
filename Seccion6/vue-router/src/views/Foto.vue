<template>
  <div>
    <h1>Galeria de fotos</h1>

    <router-link
      :to="{ name: 'foto', params: { id: item } }"
      v-for="(item, index) of fotosArray"
      :key="index"
    >
      <button>Foto {{ item }}</button>
    </router-link>

    <Fotografia></Fotografia>
    <button @click="home">Home</button>
    <button @click="Anterior">Anterior</button>
    <button @click="Siguente">Siguente</button>
  </div>
</template>

<script>
import Fotografia from "../components/Fotografia.vue";
export default {
  name: "Foto",
  components: { Fotografia },
  data() {
    return {
      fotosArray: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    Anterior() {
      this.$router.go("-1");
    },
    Siguente() {
      this.$router.go("1");
    },
  },
};
</script>