import Vue from "vue";
import Vuex from "vuex";
// import { uuid } from "vue-uuid";
import router from "@/router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tareas: [],
    tareasEdit: [],
    tareaItem: {},
    editFlag: false,
  },
  mutations: {
    setTareas(state, tareasList) {
      state.tareas = tareasList;
    },
    setTarea(state, tarea) {
      state.tareaItem = tarea;
    },
    setFlag(state, list) {
      state.tareasEdit = list;
      state.editFlag = true;
      state.tareaItem = {};
    },
  },
  actions: {
    async getTareas({ commit }) {
      if (this.state.editFlag) {
        commit("setTareas", this.state.tareasEdit);
      } else {
        this.state.tareasEdit = GET();
        commit("setTareas", this.state.tareasEdit);
      }
    },
    editarTarea({ commit }, tarea) {
      let list = EditTarea(tarea, this.state.tareasEdit);
      commit("setFlag", list);
      router.push({ name: "inicio" });
    },
    getTarea({ commit }, id) {
      commit("setTarea", GETid(id));
    },
    addTarea({ commit }, nombre) {
      let data = AddTarea(nombre, this.state.tareasEdit);
      commit("setFlag", data);
      router.push({ name: "inicio" });
    },
    deleteTarea({ commit, dispatch }, id) {
      let data = DeleteTarea(id, this.state.tareasEdit);
      commit("setFlag", data);
      dispatch("getTareas");
    },
  },
  modules: {},
});

function GET() {
  const tareasList = [
    {
      id: 0,
      name: "Hacer tarea",
    },
    {
      id: 1,
      name: "Comprar pan",
    },
    {
      id: 2,
      name: "arreglar moto",
    },
  ];
  return tareasList;
}

function GETid(id) {
  const list = GET();
  return list.filter((item) => item.id == id)[0];
}

function EditTarea(tarea, list) {
  const index = list.findIndex((item) => item.id == tarea.id);
  list[index].name = tarea.name;
  return list;
}

function AddTarea(tarea, list) {
  let idMax = 0;
  list.forEach((data) => {
    if (data.id > idMax) {
      idMax = data.id;
    }
  });
  idMax++;
  list.push({ id: idMax, name: tarea.item });
  return list;
}

function DeleteTarea(id, list) {
  console.log(id);
  console.log(list);
  return list.filter((item) => item.id != id);
}
