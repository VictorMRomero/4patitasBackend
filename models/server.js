const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth:     '/api/auth',
            usuarios: '/api/usuarios',
            categorias: '/api/categorias',
            productos:'/api/productos'

        }


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

        this.app.use('/api/usuarios', require('../routes/usuarios'));
        this.app.use('/api/categorias', require('../routes/categorias'));
        this.app.use('/api/productos', require('../routes/productos'));
        this.app.use(this.paths.auth, require('../routes/auth'));
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