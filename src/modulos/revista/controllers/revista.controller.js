const Revista = require("../models/revista.model");

class RevistaController {
    // Listar revistas
    static async listarRevistas(req, res) {
        try {
            const revistas = await Revista.findAll();
            res.json(revistas);
        } catch (err) {
            res.status(500).json({ error: "Erro ao listar revistas." });
        }
    }

    // Detalhe da revista
    static async detalharRevista(req, res) {
        try {
            const revista = await Revista.findByPk(req.params.id);
            if (!revista) return res.status(404).json({ error: "Revista não encontrada." });
            res.json(revista);
        } catch (err) {
            res.status(500).json({ error: "Erro ao buscar revista." });
        }
    }

    // Criar revista
    static async criarRevista(req, res) {
        try {
            const revista = await Revista.create(req.body);
            res.status(201).json(revista);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    // Atualizar revista
    static async atualizarRevista(req, res) {
        try {
            const revista = await Revista.findByPk(req.params.id);
            if (!revista) return res.status(404).json({ error: "Revista não encontrada." });
            await revista.update(req.body);
            res.json(revista);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    // Excluir revista
    static async excluirRevista(req, res) {
        try {
            const revista = await Revista.findByPk(req.params.id);
            if (!revista) return res.status(404).json({ error: "Revista não encontrada." });
            await revista.destroy();
            res.status(204).json({msg: 'Revista excluida com sucesso'});
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = RevistaController;
