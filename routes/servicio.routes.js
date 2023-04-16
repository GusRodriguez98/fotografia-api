'Ruta: /api/cliente';

const { Router } = require('express');

const { getServicio, postServicio, putServicio, getServiciosActivos } = require('../controllers/servicio.controller');
const { validarCampos } = require('../middlewares/validarcampos.middleware');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/', validarJWT, getServicio);
router.get('/activos', validarJWT, getServiciosActivos);

router.post('/', validarJWT, postServicio);

router.put('/', validarJWT, putServicio);

module.exports = router;