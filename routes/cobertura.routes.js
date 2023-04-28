'Ruta: /api/cobertura';

const { Router } = require('express');

const { getCoberturas, crearCobertura, pasarEdicion, pasarFinalizado, contarCoberturasPorEstado, anularCobertura, actualizarCobertura } = require('../controllers/cobertura.controller');
const { validarCampos } = require('../middlewares/validarcampos.middleware');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/',validarJWT, getCoberturas);
router.get('/estados',validarJWT, contarCoberturasPorEstado);

// router.get('/activos',validarJWT, getPaquetesActivos);

router.post('/', validarJWT, crearCobertura);
router.put('/edicion', validarJWT, pasarEdicion);
router.put('/finalizado', validarJWT, pasarFinalizado);
router.put('/anular', validarJWT, anularCobertura);
router.put('/', validarJWT, actualizarCobertura);

// router.get('/', validarJWT, getUsuario);

module.exports = router;