const { response } = require("express");

const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');


const login = async(req, res = response) => {

    const {correo, password} = req.body;

    try{

        //verificar si el email existe
        const usuario = await Usuario.findOne({correo});
        if(!usuario){
            return res.status(400).json({
                msg:'El usuario/contraseña no son correctos -'
            })
        }

        //si el usuario esta activo
        if(!usuario.estado){
            return res.status(400).json({
                msg:'El usuario/contraseña no son correctos - estado: false'
            })
        }

        //verificar la contraseña
        const contraValida = bcryptjs.compareSync(password, usuario.password);  
        if(!contraValida){
            return res.status(400).json({
                msg:'El usuario/contraseña no son correctos - contraseña: false'
            })
        }
        console.log(usuario.rol)
        if(usuario.rol != "ADMIN_ROLE"){
            return res.status(400).json({
                msg:'El usuario no es admin'
            })
        }



        res.json({
            usuario,
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg:"Hable con el admin"
        });
    }

}


module.exports = {
    login
}