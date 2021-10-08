<template>
  <v-card class="pa-5 mb-6">
    <v-card-title>
      <h1 class="ml-0">{{ nota.nombre }}</h1>
      <v-chip
        class="ma-2"
        v-bind:color="nota.activo ? 'teal' : 'red'"
        label
        text-color="white"
      >
        <v-icon left> mdi-label </v-icon>
        {{ nota.activo ? "Activo" : "No activo" }}
      </v-chip>
    </v-card-title>
    <v-card-subtitle>
      <em>{{ nota._id }}</em>
    </v-card-subtitle>
    <v-card-text>
      <p>
        {{ nota.description }}
      </p>
      <v-btn @click="EliminarNota(nota._id)" color="error">Eliminar</v-btn>
      <v-btn
        @click="ObtenerNota({ id: nota._id, detalles: false })"
        color="warning"
        class="ml-3"
        >Editar</v-btn
      >
      <v-btn
        @click="ObtenerNota({ id: nota._id, detalles: true })"
        color="primary"
        class="ml-3"
        >Detalles</v-btn
      >
    </v-card-text>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Tarea",
  props: ["nota"],
  components: {},
  methods: {
    ...mapActions(["EliminarNota", "ObtenerNota"]),
  },
};
</script>
