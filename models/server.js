// Leyendo el server el flujo va hacia routes.

const express = require ('express');
const cors = require ('cors');
const { dbConnection } = require('../database/config');

// Por convención la clase Server siempre va con mayúscula.

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.productosPath = '/api/productos';


        //Middlewares
        this.middlewares();

        // Rutas de mi aplicación.
        this.routes();

        // Conectar a la base de datos.
        this.conectarDB()
    }

    async conectarDB(){
        await dbConnection()
    }

    // Cuando se usa "use", estoy frente a un Middleware.
    middlewares() {


        // CORS
        this.app.use( cors() )

        // Lectura y parseo de body.
        this.app.use( express.json() )

        // Directorio público(servir contenido estático).
        this.app.use(express.static('public'))

    }

    routes() {
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
        this.app.use( this.productosPath, require('../routes/productos'));
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
    

}

module.exports = Server;