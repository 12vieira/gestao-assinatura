const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const  sequelize  = require("./src/config/configDb");

const app = express();
const port = process.env.PORTA;

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("A conexão foi estabelecida com sucesso.");
  } catch (error) {
    console.error("Não é possível conectar ao banco de dados:", error.message);
  }
  console.log(`Servidor executando na porta ${port}`);
});
