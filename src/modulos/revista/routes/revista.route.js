const express = require("express");
const RevistaController = require("../controllers/revista.controller"); // Ajuste o caminho se necessário
const AutorizacaoMiddleware = require("../../../middleware/autorizacao.middleware"); // Ajuste o caminho se necessário
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware')
const router = express.Router();

// Listar revistas - apenas 'assinante'
router.get("/revistas", AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(["assinante"]), RevistaController.listarRevistas)

// Detalhar revista - apenas 'assinante'
router.get("/revistas/:id", AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(["assinante"]),RevistaController.detalharRevista);

// Criar revista - apenas 'funcionário'
router.post("/revistas", AutenticacaoMiddleware.autenticarToken,  AutorizacaoMiddleware.autorizar(["funcionario"]), RevistaController.criarRevista);


// Atualizar revista - apenas 'funcionário'
router.put( "/revistas/:id", AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(["funcionario"]),RevistaController.atualizarRevista);

// Excluir revista - apenas 'funcionário'
router.delete("/revistas/:id", AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(["funcionario"]), RevistaController.excluirRevista);

module.exports = router;
