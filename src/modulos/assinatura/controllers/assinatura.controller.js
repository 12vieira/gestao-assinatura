const Assinatura = require("../models/assinatura.model");

class AssinaturaController {
    // Listar assinaturas do usuário
    static async listarPorUsuario(req, res) {
        try {
            const { usuarioId } = req.params;
            const assinaturas = await Assinatura.findAll({ where: { usuarioId } });
            res.json(assinaturas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Detalhes da assinatura
    static async detalhes(req, res) {
        try {
            const { id } = req.params;
            const assinatura = await Assinatura.findByPk(id);
            if (!assinatura) return res.status(404).json({ error: "Assinatura não encontrada" });
            res.json(assinatura);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Criar assinatura
    static async criar(req, res) {
        try {
            const { usuarioId, revistaId, data_inicio, data_fim, status } = req.body;
            const novaAssinatura = await Assinatura.create({
                usuarioId,
                revistaId,
                data_inicio,
                data_fim,
                status,
            });
            res.status(201).json(novaAssinatura);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Atualizar assinatura
    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { data_inicio, data_fim, status } = req.body;
            const assinatura = await Assinatura.findByPk(id);
            if (!assinatura) return res.status(404).json({ error: "Assinatura não encontrada" });

            assinatura.data_inicio = data_inicio ?? assinatura.data_inicio;
            assinatura.data_fim = data_fim ?? assinatura.data_fim;
            assinatura.status = status ?? assinatura.status;

            await assinatura.save();
            res.json(assinatura);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Cancelar assinatura
    static async cancelar(req, res) {
        try {
            const { id } = req.params;
            const assinatura = await Assinatura.findByPk(id);
            if (!assinatura) return res.status(404).json({ error: "Assinatura não encontrada" });

            assinatura.status = "cancelada";
            await assinatura.save();
            res.json(assinatura);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = AssinaturaController;