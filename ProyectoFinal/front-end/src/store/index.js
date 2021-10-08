/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
axios.defaults.baseURL = "https://app-mevn-eskantu.herokuapp.com/api";
Vue.use(VueAxios, axios)
export default new Vuex.Store({
  state: {
    notas: [],
    notaView: { nombre: "", description: "", activo: true, id: "" },
    info: { mensaje: '', show: false, esError: false },
    dialog: false,
    datlles: false
  },
  mutations: {
    setNotas(state, notas) {
      state.info = { mensaje: "Se obtuvieron " + notas.length + " notas", show: true, esError: false };
      state.dialog = false
      state.notaView = { nombre: "", description: "", activo: true, id: "" }
      state.notas = notas
    },
    setNota(state, params) {
      state.notaView = { nombre: params.data.nombre, description: params.data.description, activo: params.data.activo, id: params.data._id }
      state.datlles = params.detalle
      console.log(state.datlles)
      state.dialog = true
    },
    setError(state, error) {
      state.info = { mensaje: error.mensaje, show: true, esError: true };
    },
    cancelarAccion(state) {
      state.notaView = { nombre: "", description: "", activo: true, id: "" }
    },
    openCloseDialog(state, edit) {
      state.datlles = edit
      state.dialog = !state.dialog
    }
  },
  actions: {
    ObtenerNota({ commit }, object) {
      console.log(object)
      axios
        .get("/nota/" + object.id).then(res => { commit("setNota", { data: res.data, detalle: object.detalles }) })
        .catch(e => { commit("setError", e) });
    },
    ObtenerNotas({ commit }) {
      axios
        .get("/nota").then(res => { commit("setNotas", res.data) })
        .catch(e => { commit("setError", e) });
    },
    CrearNota({ commit, dispatch }, nota) {
      console.log(nota);
      if (nota.id != '') {
        axios.put("/nota/" + nota.id, nota).then(res => { dispatch("ObtenerNotas") }).catch(e => { commit("setError", e) })
      } else {
        axios.post("/nota", nota).then(res => { dispatch("ObtenerNotas") }).catch(e => { commit("setError", e) })
      }
    },
    EliminarNota({ commit, dispatch }, id) {
      console.log(id);
      axios.delete('nota/' + id).then(res => { dispatch("ObtenerNotas") }).catch(e => { commit("setError", e) })
    },
    CancelarAccion({ dispatch }) {
      dispatch("cancelarAccion")
    },
    OpenCloseDialog({ commit }, edit) {

      commit("openCloseDialog", edit)
    }
  },
  modules: {},
});
