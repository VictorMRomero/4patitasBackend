const { Router } = require('express');
const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete } = require('../controllers/usuarios');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const Role = require('../models/role')
const router = Router();


router.get('/', usuariosGet);


router.put('/:id', usuariosPut);


router.post('/',[
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('correo', 'El correo es invalido').isEmail(),
        check('password', 'El password debe tener minimo 6').isLength({min:6}),
        check('rol').custom( async (rol = '') => {
                const existeRol = await Role.findOne({rol});
                if(!existeRol){
                        throw new Error (`El rol ${rol} no esta registrado`)
                }
        }),
        validarCampos
]
 , usuariosPost);


router.delete('/', usuariosDelete);


module.exports = router;