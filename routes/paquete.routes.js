'Ruta: /api/paquete';

const { Router } = require('express');

const { getPaquetes, crearPaquete, putPaquete, getPaquetesActivos } = require('../controllers/paquete.controller');
const { validarCampos } = require('../middlewares/validarcampos.middleware');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/',validarJWT, getPaquetes);
router.get('/activos',validarJWT, getPaquetesActivos);

router.post('/', validarJWT, crearPaquete);
router.put('/', validarJWT, putPaquete);

// router.get('/', validarJWT, getUsuario);

module.exports = router;