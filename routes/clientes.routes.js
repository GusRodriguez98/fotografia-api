'Ruta: /api/cliente';

const { Router } = require('express');

const { getClientes, crearCliente, putCliente, getClientesActivos } = require('../controllers/clientes.controller');
const { validarCampos } = require('../middlewares/validarcampos.middleware');
const { validarJWT } = require('../middlewares/validarJWT.middleware');
const ensureHttps = require('../middlewares/ensureHttps');

const router = Router();

router.get('/', validarJWT, getClientes);

router.post('/', ensureHttps, validarJWT, crearCliente);
router.put('/', ensureHttps, validarJWT, putCliente);

router.get('/activos', ensureHttps, validarJWT, getClientesActivos);

module.exports = router;