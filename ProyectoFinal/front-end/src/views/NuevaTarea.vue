<template>
  <div>
    <v-btn @click="OpenCloseDialog(false)" class="ma-15" color="green"
      >Nueva tarea</v-btn
    >
    <DetailsViewCreateNota></DetailsViewCreateNota>
  </div>
</template>

<script>
import DetailsViewCreateNota from "@/components/DetailsViewCreateNota.vue";
import { mapActions } from "vuex";
export default {
  name: "NuevaTarea",
  methods: {
    ...mapActions(["OpenCloseDialog"]),
  },
  components: { DetailsViewCreateNota },
};
</script>
