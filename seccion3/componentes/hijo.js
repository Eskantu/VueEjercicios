Vue.component("hijo", {
    template: `
    <div>
    <button @click="aumentar">+</button>
    <button @click="disminuir(2)">-</button>
    <h1>numero {{numero}}</h1>
    <button @click="ObtenerCursos">Obtener data</button>
    <ul v-for="item of cursos">
    <li>{{item.nombre}}</li>
    </ul>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero', 'cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir']),
        ...Vuex.mapActions(['ObtenerCursos',])
    }
});