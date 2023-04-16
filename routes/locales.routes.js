'Ruta: /api/locales';

const { Router } = require('express');

const { getLocales, getLocalesActivos, postLocal, putLocal } = require('../controllers/local.controller');
const { validarCampos } = require('../middlewares/validarcampos.middleware');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/', validarJWT, getLocales);
router.get('/activos', validarJWT, getLocalesActivos);

router.post('/', validarJWT, postLocal);

router.put('/', validarJWT, putLocal);

module.exports = router;