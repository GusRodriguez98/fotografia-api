'Ruta: /api/auth';

const { Router } = require('express');

const { login, crearUsuario, getUsuario } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validarcampos.middleware');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/', login);

router.get('/crear', crearUsuario);

router.get('/', validarJWT, getUsuario);

module.exports = router;