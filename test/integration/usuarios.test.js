// test/integration/usuarios.test.js
const request = require("supertest");
const createApp = require("../../src/app");

describe("POST /usuarios", () => {
  test("deve cadastrar usuário válido", async () => {
    const app = createApp();
    const response = await request(app)
      .post("/usuarios")
      .send({
        nome: "Matheus Vieira",
        email: "matheus@email.com",
        senha: "123456",
        papel: "assinante",
      })
      .expect(201);
    expect(response.body).toEqual({
      msg: "Cadastro realizado com sucesso",
    });
  });
});
