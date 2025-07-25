const express = require('express');
const AssinaturaController = require('../controllers/assinatura.controller');

const router = express.Router();

// Listar assinaturas do usuário
router.get('/usuario/:usuarioId', AssinaturaController.listarPorUsuario);

// Detalhes da assinatura
router.get('/:id', AssinaturaController.detalhes);

// Criar assinatura
router.post('/', AssinaturaController.criar);

// Atualizar assinatura
router.put('/:id', AssinaturaController.atualizar);

// Cancelar assinatura
router.patch('/:id/cancelar', AssinaturaController.cancelar);

module.exports = router;