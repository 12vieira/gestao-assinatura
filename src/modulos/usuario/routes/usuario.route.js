const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');

const router = express.Router();

// Rota para cadastro de usuário (não requer autenticação)
router.post('/usuarios', UsuarioController.cadastrar);

// Rota para perfil do usuário autenticado (requer autenticação)
router.get('/usuarios/me', UsuarioController.perfil);

module.exports = router;