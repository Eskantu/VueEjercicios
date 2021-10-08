<template>
  <v-dialog persistent v-model="dialog" width="700">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        {{ datlles == false ? "Nueva tarea" : "Detalles" }}
        {{ datlles }}
      </v-card-title>
      <v-form v-model="valid">
        <v-card-text class="pa-10">
          <v-text-field
            :readonly="datlles == true"
            :counter="maxnNameCounter"
            :rules="nameRules"
            required
            v-model="notaView.nombre"
            color="purple darken-2"
            label="Nombre"
            class="mb-5"
          ></v-text-field>
          <v-switch
            :readonly="datlles == true"
            v-if="notaView.id != ''"
            v-model="notaView.activo"
            label="Tarea"
          ></v-switch>
          <v-textarea
            :readonly="datlles == true"
            :counter="maxnDescriptionCounter"
            :rules="descriptionRules"
            required
            outlined
            v-model="notaView.description"
            name="input-7-1"
            label="Descripcion"
          ></v-textarea>
        </v-card-text>
      </v-form>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :color="datlles == false ? 'red' : 'primary'"
          text
          @click="OpenCloseDialog"
          >{{ datlles == false ? "Cancelar" : "Cerrar" }}</v-btn
        >
        <v-btn
          v-if="datlles == false"
          :disabled="!valid"
          color="primary"
          text
          @click="Crear"
          >Guardar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "DetailsViewCreateNota",
  data() {
    return {
      valid: false,
      nameRules: [
        (v) => !!v || "El nombre es requerido",
        (v) => v.length >= 5 || "El nombre debe tener al menos 5 caracteres",
      ],
      descriptionRules: [
        (v) => !!v || "La descripcion es requerida",
        (v) =>
          v.length >= 25 || "La descripcion debe tener al menos 25 caracteres",
      ],
      maxnNameCounter: 0,
      maxnDescriptionCounter: 0,
    };
  },
  methods: {
    ...mapActions(["CrearNota", "CancelarAccion", "OpenCloseDialog"]),
    Crear() {
      this.CrearNota(this.notaView);
    },
  },
  computed: {
    ...mapState(["notaView", "dialog", "datlles"]),
  },
};
</script>
