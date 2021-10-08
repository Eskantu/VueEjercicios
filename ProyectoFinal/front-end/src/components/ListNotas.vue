<template>
  <v-container class="mt-6" grid-list-md>
    <v-layout>
      <v-flex>
        <Tarea :nota="item" v-for="item in notas" :key="item._id"> </Tarea>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Tarea from "./Tarea";
import { mapActions, mapState } from "vuex";
export default {
  name: "ListNotas",
  components: {
    Tarea,
  },
  created() {
    this.ObtenerNotas();
  },
  methods: {
    ...mapActions(["ObtenerNotas"]),
  },
  computed: {
    ...mapState(["notas"]),
  },
};
</script>
