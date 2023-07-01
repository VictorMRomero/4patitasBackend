const {response} = require('express');

const usuariosGet = (req, res = response) => {
    
    res.json({
        msg:'Get api desde controller'
    });
}

const usuariosPut = (req, res) => {
    res.json({
        msg:'Put api - controller'
    });
}

const usuariosPost = (req, res) => {
    res.json({
        msg:'Post api - controller'
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