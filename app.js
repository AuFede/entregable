// El flujo va desde nuestra app hacia nuestro server en "modelo".

require('dotenv').config()

const Server = require('./models/server');

const server = new Server()

server.listen();
