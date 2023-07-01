const express = require('express');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routes()
    }

    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello word')
        });
        this.app.get('*', (req, res) => {
            res.send('404')
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en: ${this.port}`)
        });
    }

}

module.exports = Server;