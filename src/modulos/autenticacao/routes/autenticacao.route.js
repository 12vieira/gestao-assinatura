const express = require("express");
const AutenticacaoController = require("../controllers/autenticacao.controller");

const router = express.Router();

// Rota de login
router.post("/login", AutenticacaoController.login);

// Rota para renovar o refresh token
router.post("/refresh-token", AutenticacaoController.refreshToken);

// Rota de logout
router.post("/sair", AutenticacaoController.sair);

module.exports = router;