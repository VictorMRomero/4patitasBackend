const { Router } = require('express');
const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete } = require('../controllers/usuarios');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { esRolValido, existeEmail, existeUsuarioId } = require('../helpers/db-validators');
const router = Router();


router.get('/',[
        
], usuariosGet);


router.put('/:id',[
        check('id', 'No es un id valido').isMongoId(),
        check('id').custom(existeUsuarioId),
        check('rol').custom(esRolValido),
        
        validarCampos
], usuariosPut);


router.post('/',[
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('correo', 'El correo es invalido').isEmail(),
        check('correo').custom(existeEmail),
        check('password', 'El password debe tener minimo 6').isLength({min:6}),
        check('rol').custom(esRolValido),
        validarCampos
]
 , usuariosPost);


router.delete('/:id', [
        check('id', 'No es un id valido').isMongoId(),
        check('id').custom(existeUsuarioId),        
        validarCampos
],usuariosDelete);


module.exports = router;