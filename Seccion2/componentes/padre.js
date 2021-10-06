Vue.component('padre', {
    template:
        `
    <div class="p-5 bg-dark text-white">
    <h2>Componente padre <strong>{{numeroPadre}}
    </strong>
    </h2>
    <button @click="numeroPadre++" class="btn btn-danger">+</button>
{{nombrePadre}}
    <hijo v-on:nombreHijo="nombrePadre=$event" v-bind:numero='numeroPadre'></hijo>
    </div>
    `,
    data() {
        return {
            numeroPadre: 0,
            nombrePadre: ''
        }
    },
})