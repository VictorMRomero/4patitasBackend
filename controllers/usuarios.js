const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

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

const usuariosPost = async(req, res) => {

    const {nombre, apellido, telefono, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, apellido, telefono, correo, password, rol});


    //hash de la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en DB
    await usuario.save();


    res.json({
        msg:'Post api - controller',
        usuario
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