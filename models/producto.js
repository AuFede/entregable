const { Schema, model } = require('mongoose')


const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Acá poner algo'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    precio: {
        type: Number,
        default: 0
    },
    descripción: {
        type: String,
        required: ['Acá va la descripción']
    }
    
})

module.exports = model('Producto', ProductoSchema)