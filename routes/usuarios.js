const { Router } = require('express');
const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete } = require('../controllers/usuarios');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { esRolValido, existeEmail } = require('../helpers/db-validators');
const router = Router();


router.get('/', usuariosGet);


router.put('/:id', usuariosPut);


router.post('/',[
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('correo', 'El correo es invalido').isEmail(),
        check('correo').custom(existeEmail),
        check('password', 'El password debe tener minimo 6').isLength({min:6}),
        check('rol').custom(esRolValido),
        validarCampos
]
 , usuariosPost);


router.delete('/', usuariosDelete);


module.exports = router;