const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware')

const router = express.Router();

// Rota para cadastro de usuário (não requer autenticação)
router.post('/usuarios', UsuarioController.cadastrar);

// Rota para perfil do usuário autenticado (requer autenticação)
router.get('/usuarios/me',AutenticacaoMiddleware.autenticarToken, UsuarioController.perfil);

module.exports = router;