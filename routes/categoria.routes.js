'Ruta: /api/categoria';

const { Router } = require('express');

const { getCategoriaById, postCategoria, putCategoria, getCategoriasByIdActivas } = require('../controllers/categoria.controller');
const { validarCampos } = require('../middlewares/validarcampos.middleware');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/',validarJWT, getCategoriaById);
router.get('/activas',validarJWT, getCategoriasByIdActivas);

router.get('/', validarJWT, postCategoria);
router.get('/', validarJWT, putCategoria);

// router.get('/', validarJWT, getUsuario);

module.exports = router;