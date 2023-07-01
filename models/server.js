const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = 'api/usuarios'

        // Middlewares
        this.middlewares();

        //Lectura y parseo del codigo
        this.app.use(express.json());

        //Rutas de la aplicación
        this.routes()
    }

    middlewares(){
        //CORS
        this.app.use(cors());


        this.app.use(express.static('public'))
    }

    routes(){

        this.app.use('/api/usuarios', require('../routes/usuarios'))

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en: ${this.port}`)
        });
    }

}

module.exports = Server;