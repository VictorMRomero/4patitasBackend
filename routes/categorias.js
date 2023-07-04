const { Router } = require('express');
const { categoriasGet } = require('../controllers/categorias');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();



router.get('/', categoriasGet);

module.exports = router;