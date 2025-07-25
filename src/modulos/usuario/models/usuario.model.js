const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/configDb");

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/i,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "E-mail invalido!",
        },
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "A senha não pode estar vazia.",
        },
      },
    },
    papel: {
      type: DataTypes.ENUM("assinante", "funcionario", "admin"),
      allowNull: false,
      validate: {
        isIn: {
          args: [["assinante", "funcionario", "admin"]],
          msg: 'O papel deve ser "assinante", "funcionario" ou "admin".',
        },
        notEmpty: {
          msg: 'O campo "papel" não pode estar vazio.',
        },
      },
    },
  },
  {
    tableName: 'usuario',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em',
  }
);

module.exports = Usuario;