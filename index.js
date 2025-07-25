const express = require("express");
const dotenv = require("dotenv");
const  sequelize  = require("./src/config/configDb");
const usuarioRoute = require('./src/modulos/usuario/routes/usuario.route')
const autenticacaoRoute = require('./src/modulos/autenticacao/routes/autenticacao.route')
const revistaRoute = require('./src/modulos/revista/routes/revista.route')
dotenv.config();

const app = express();
const port = process.env.PORTA;

app.use(express.json())

app.use(usuarioRoute)
app.use(autenticacaoRoute)
app.use(revistaRoute)



app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("A conexão foi estabelecida com sucesso.");
    await sequelize.sync({force: false, alter: false})
    console.log('Tabelas sincronizadas!')
  } catch (error) {
    console.error("Não é possível conectar ao banco de dados:", error.message);
  }
  console.log(`Servidor executando na porta ${port}`);
});
