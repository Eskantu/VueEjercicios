<template>
  <div id="app" class="container">
    <Cabecera></Cabecera>
    <Lista></Lista>
    <Reiniciar></Reiniciar>
  </div>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
import Lista from "./components/Lista.vue";
import Reiniciar from "./components/Reiniciar.vue";
export default {
  name: "App",
  components: {
    Cabecera,
    Lista,
    Reiniciar,
  },
};
</script>


