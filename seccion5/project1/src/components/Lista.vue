<template>
  <div>
    <ul class="list-group">
      <li
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
        v-for="item of arrayOrdenado"
        :key="item.id"
        @click="aumentar(item.id)"
      >
        {{ item.id }}.- {{ item.nombre }}
        <span class="badge bg-primary rounded-pill">{{ item.cantidad }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"]),
    arrayOrdenado() {
      return this.frutas.slice().sort((a, b) => b.cantidad - a.cantidad);
    },
  },
  methods: {
    ...mapMutations(["aumentar"]),
  },
};
</script>