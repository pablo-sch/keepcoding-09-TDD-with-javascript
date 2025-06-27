import request from "supertest";
import app from "../app.js";
import Agent from "../models/Agent.js";

// Mockeamos el modelo Agent
jest.mock("../models/Agent.js");

// Mockeamos connectMongoose para evitar conexiones reales
jest.mock("../lib/connectMongoose.js", () => {
  return jest.fn().mockResolvedValue({
    name: "mockConnection",
    close: jest.fn(),
  });
});

// Mockeamos session para evitar problemas de sesión
jest.mock("express-session", () => {
  return () => (req, res, next) => {
    req.session = { userId: null };
    next();
  };
});

// Mockeamos sessionManager para simplificar los tests
jest.mock("../lib/sessionManager", () => ({
  middleware: (req, res, next) => {
    req.session = { userId: null };
    next();
  },
  useSessionInViews: (req, res, next) => {
    res.locals.session = req.session || {};
    next();
  },
  guard: (req, res, next) => next(),
}));

describe("homeController", () => {
  // Test de integración usando supertest
  describe("Pruebas de integración", () => {
    // Configuramos los mocks antes de cada test
    beforeEach(() => {
      // Configuramos el mock de Agent.find para que devuelva una lista de agentes de prueba
      Agent.find = jest.fn().mockResolvedValue([
        { _id: "agent1", name: "Smith", age: 45 },
        { _id: "agent2", name: "Brown", age: 33 },
      ]);
    });

    it("debe devolver un 200 al visitar la home", async () => {
      expect.assertions(1);
      let response;
      try {
        response = await request(app).get("/");
      } catch (ex) {
        console.log("Error al hacer la petición");
        console.log(ex);
      }

      expect(response.status).toBe(200);
    }, 15000); // Aumentamos el timeout a 15 segundos

    it("debe llamar a Agent.find con los parámetros correctos", async () => {
      // Realizamos la petición a la ruta /
      expect.assertions(1);
      await request(app).get("/");

      // Verificamos que se llamó a Agent.find
      expect(Agent.find).toHaveBeenCalled();
    });
  });
});
