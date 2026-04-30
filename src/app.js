const express = require("express");
const usuarioRoute = require("./modulos/usuario/routes/usuario.route");
const autenticacaoRoute = require("./modulos/autenticacao/routes/autenticacao.route");
const revistaRoute = require("./modulos/revista/routes/revista.route");
function createApp() {
  const app = express();
  app.use(express.json());
  //rota de saúde para verificar se a aplicação está rodando
  app.get("/health", (req, res) => {
    return res.status(200).json({ status: "ok" });
  });
  app.use(usuarioRoute);
  app.use(autenticacaoRoute);
  app.use(revistaRoute);
  return app;
}
module.exports = createApp;
