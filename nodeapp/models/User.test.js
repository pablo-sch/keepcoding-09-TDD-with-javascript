import request from "supertest";
import app from "../app";
import { guard, middleware } from "../lib/sessionManager";

// Podemos mockear funciones internas
jest.mock("../lib/sessionManager", () => ({
  guard: jest.fn((req, res, next) => {
    // Simular que el usuario no esta autenticado
    res.redirect(`/login?redir=${req.url}`);

    // Todos los middlewares llaman a next();
    next();
  }),
  middleware: jest.fn((req, res, next) => next()),
  useSessionInViews: jest.fn((req, res, next) => next()),
}));

describe("AgentsController", () => {
  it("Debería redirigir a la vista de login si no existe una sesión", async () => {
    expect.assertions(2);
    // Hacer una request a nuestra app
    const response = await request(app)
      // en la ruta /agents/new
      .get("/agents/new");

    // Esperamos una redirección a login
    expect(response.status).toBe(302);
    expect(response.headers.location).toBe("/login?redir=/agents/new");
  });

  it("debería llamar al guard antes de permitir el acceso a la ruta", async () => {
    expect.assertions(1);
    const response = await request(app).get("/agents/new");

    // El middleware de guard se debe llamar
    expect(guard).toHaveBeenCalled();
  });
});
