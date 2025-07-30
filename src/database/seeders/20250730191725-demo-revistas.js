"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("revista", [
      {
        id: uuidv4(),
        nome: "Revista Ciência Atual",
        descricao: "Publicação sobre os avanços recentes na ciência.",
        categoria: "Ciência",
        status: "ativa",
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        id: uuidv4(),
        nome: "Revista Tecnologia Hoje",
        descricao: "Foco nas inovações tecnológicas do momento.",
        categoria: "Tecnologia",
        status: "ativa",
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        id: uuidv4(),
        nome: "Revista Literatura Viva",
        descricao: "Publicação dedicada à literatura contemporânea.",
        categoria: "Literatura",
        status: "inativa",
        criado_em: new Date(),
        atualizado_em: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("revista", null, {});
  }
};