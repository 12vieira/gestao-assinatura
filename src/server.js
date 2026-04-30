const dotenv = require("dotenv");
const sequelize = require("./config/configDb");
const createApp = require("./app");
dotenv.config();
const app = createApp();
const port = process.env.PORTA || 3000;
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("A conexão foi estabelecida com sucesso.");
  } catch (error) {
    console.error("Não é possível conectar ao banco de dados:", error.message);
  }
  console.log(`Servidor executando na porta ${port}`);
});
