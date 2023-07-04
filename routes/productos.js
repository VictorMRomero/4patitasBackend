const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { productosGet, productosPost, productosPut, productosDelete } = require('../controllers/productos');
const { existeProductoId } = require('../helpers/db-validators');
const {check} = require('express-validator');
const router = Router();



router.get('/', productosGet);

router.put('/:id',[
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeProductoId),
    
    validarCampos
], productosPut)


router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    check('stock', 'El stock es obligatorio').not().isEmpty(),

    validarCampos

], productosPost);


router.delete('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeProductoId),        
    validarCampos
],productosDelete);

module.exports = router;