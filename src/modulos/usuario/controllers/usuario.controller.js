const bcrypt = require('bcrypt');
const Usuario = require("../models/usuario.model");

class UsuarioController {
    // Cadastrar novo usuário
    static async cadastrar(req, res) {
        try {
            const { nome, email, senha, papel } = req.body;
            const senhaCriptografada = await bcrypt.hash(senha, 12);
            await Usuario.create({ nome, email, senha: senhaCriptografada, papel });
            res.status(201).json({ msg: 'Cadastro realizado com sucesso' });
        } catch (error) {
            res.status(500).json({ erro: "Erro ao cadastrar usuário.", erro: error.message });
        }
    }

    // Perfil do usuário autenticado
    static async perfil(req, res) {
        try {
            // O ID do usuário autenticado está em req.user.id (assumindo autenticação JWT)
            const usuarioId = req.usuario?.id;
            if (!usuarioId) {
                return res.status(401).json({ erro: "Usuário não autenticado." });
            }
            const usuario = await Usuario.findByPk(usuarioId, {
                attributes: { exclude: ["senha"] }
            });
            if (!usuario) {
                return res.status(404).json({ erro: "Usuário não encontrado." });
            }
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao buscar perfil do usuário.", erro: error.message });
        }
    }
}

module.exports = UsuarioController;