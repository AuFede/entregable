const { Schema, model } = require('mongoose')


const ProductoSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'Introduzca el título de la Obra'],
        unique: true
    },
    autor: {
        type: String,
        required: [true, 'Introduza un nombre de referencia del Autor'],
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
        required: [true,'Para obtener la descripción, introduzca alguna palabra válida'],
    }
    
})

module.exports = model('Producto', ProductoSchema)