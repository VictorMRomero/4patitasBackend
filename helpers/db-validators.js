const Role = require('../models/role');
const Usuario = require('../models/usuario');


//Validar el Rol
const esRolValido =  async (rol = '') => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
            throw new Error (`El rol ${rol} no esta registrado`)
    }
}

//Validar existe correo 
const existeEmail = async(correo) => {
    const existe = await Usuario.findOne({correo});
    if (existe){
        throw new Error('El correo ya esta registrado')
    
    }
}



module.exports = {
    esRolValido,
    existeEmail
}