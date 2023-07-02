const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = 'api/usuarios'

        //conectar db
        this.conectarDB();

        // Middlewares
        this.middlewares();

        //Lectura y parseo del codigo
        this.app.use(express.json());

        //Rutas de la aplicación
        this.routes()
    }
    //conectar a la base de datos


    middlewares(){
        //CORS
        this.app.use(cors());


        this.app.use(express.static('public'))
    }

    routes(){

        this.app.use('/api/usuarios', require('../routes/usuarios'))

    }

    async conectarDB() {
        await dbConnection()
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en: ${this.port}`)
        });
    }

}

module.exports = Server;