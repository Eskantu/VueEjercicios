import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    frutas: [{
      nombre: 'Manzana', cantidad: 0, id: 1
    }, {
      nombre: 'Naranja', cantidad: 0, id: 2
    }, {
      nombre: 'Pera', cantidad: 0, id: 3
    }]
  },
  mutations: {
    aumentar(state, id) {
      state.frutas.forEach(element => {
        if (element.id === id) {
          element.cantidad++
        }
      });
    },
    reiniciar(state) {
      state.frutas.forEach(element => {
        element.cantidad = 0;
      });
    }
  },
  actions: {},
  modules: {},
});
