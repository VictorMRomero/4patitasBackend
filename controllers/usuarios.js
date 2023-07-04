const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');


const usuariosGet = async(req, res = response) => {
    const {limite = 5, desde = 0} = req.query;
    
    const usuarios = await Usuario.find()
        .skip(Number(desde))
        .limit(Number(limite));

    const total = await Usuario.find().countDocuments();

    res.json({
        total,
        usuarios
    });
}


//actualizar Usuario
const usuariosPut = async(req, res = response) => {

    const {id} = req.params;
    const {_id, password, correo, ...resto} = req.body;

    //validar contra base de datos
    if(password){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg:'put api- usuarios put',
        id,
        usuario
    })
    


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

const usuariosDelete = async(req, res) => {

    const {id} = req.params;
    
    //Fisicamente
    //const usuario = await Usuario.findByIdAndDelete(id);
    //estado
    const usuario = await Usuario.findByIdAndUpdate(id, {estado:false})


    res.json({usuario});


}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}