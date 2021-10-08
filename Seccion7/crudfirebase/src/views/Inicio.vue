<template>
  <div>
    <h1>Lista de tareas</h1>
    <router-link to="agregar">
      <button class="btn btn-success btn-block">Agregar</button>
    </router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="item of tareas" :key="item.id">
        {{ item.id }}.- {{ item.name }}
        <div class="float-right">
          <router-link
            class="btn btn-warning btn-sm"
            :to="{ name: 'editar', params: { id: item.id } }"
          >
            Editar
          </router-link>
          <button class="btn btn-danger btn-sm" @click="deleteTarea(item.id)">
            Eliminar
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Inicio",
  methods: {
    ...mapActions(["getTareas", "deleteTarea"]),
  },
  created() {
    this.getTareas();
  },
  computed: {
    ...mapState(["tareas", "edit"]),
  },
};
</script>
