'Ruta: /api/cliente';

const { Router } = require('express');

const { getClientes, crearCliente, putCliente, getClientesActivos } = require('../controllers/clientes.controller');
const { validarCampos } = require('../middlewares/validarcampos.middleware');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/', validarJWT, getClientes);

router.post('/', validarJWT, crearCliente);
router.put('/', validarJWT, putCliente);

router.get('/activos', validarJWT, getClientesActivos);

module.exports = router;