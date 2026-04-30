// test/integration/health.test.js
const request = require("supertest");
const createApp = require("../../src/app");

describe("GET /health", () => {
  test("deve retornar status ok", async () => {
    const app = createApp();
    const response = await request(app).get("/health").expect(200);
    expect(response.body).toEqual({
      status: "ok",
    });
  });
});
