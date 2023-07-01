const {response} = require('express');

const usuariosGet = (req, res = response) => {
    
    const query = req.query;


    res.json({
        msg:'Get api desde controller',
        query
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;



    res.json({
        msg:'Put api - controller',
        id
    });
}

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;


    res.json({
        msg:'Post api - controller',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg:'Delete api - controller'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}