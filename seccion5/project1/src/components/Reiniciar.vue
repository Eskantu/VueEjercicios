<template>
  <div>
    <button @click="reiniciar" class="btn btn-danger btn-block">
      Reiniciar
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Reiniciar",
  methods: {
    ...mapMutations(["reiniciar"]),
  },
};
</script>