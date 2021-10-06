

const app = new Vue({
    el: '#app',
    data() {
        return {
            title: 'hola mundo con vue',
            frutas: [{ nombre: 'Pera', cantidad: 10 }, { nombre: 'Manzana', cantidad: 0 }, { nombre: 'Guyaba', cantidad: 0 }],
            nuevaFruta: '',
            total: 0,
            fondo: 'bg-warning',
            color: false,
            mensaje: 'Hola desde vue',
            contador: 0,
        }

    },
    methods: {
        agregarFruta() {
            this.frutas.push({ nombre: this.nuevaFruta, cantidad: 0 })
            this.nuevaFruta = ''
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0
            for (item of this.frutas) {
                this.total += item.cantidad
            }
            return this.total
        },
        invertido() {
            return this.mensaje.split('').reverse().join('')
        },
        colorProgress() {
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >= 20
            }
        }
    },
    beforeCreate() {
        console.log('before created')
    },
})