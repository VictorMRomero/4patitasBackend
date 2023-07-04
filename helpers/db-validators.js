const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Producto = require('../models/producto')


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

//Existe usuario por id

const existeUsuarioId = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario){
        throw new Error('El id no existe')
    }
}
 

//existe producto by id
const existeProductoId = async(id) => {
    const existeProducto = await Producto.findById(id);
    if (!existeProducto){
        throw new Error('El id no existe')
    }
}




module.exports = {
    esRolValido,
    existeEmail,
    existeUsuarioId,
    existeProductoId
}