import request from "supertest";
import app from "../app";
import User from "../models/User";

jest.mock("../models/User.js");

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
    req.session = {
      userId: null,
      regenerate: jest.fn((cb) => cb(null)),
    };
    next();
  };
});

// Mockeamos sessionManager para simplificar los tests
jest.mock("../lib/sessionManager", () => ({
  middleware: (req, res, next) => {
    req.session = {
      userId: null,
      regenerate: jest.fn((cb) => cb(null)),
    };
    next();
  },
  useSessionInViews: (req, res, next) => {
    res.locals.session = req.session || {};
    next();
  },
  guard: (req, res, next) => next(),
}));

describe("loginController", () => {
  // Limpiamos mocks antes de cada test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debe devolver un 200 al visitar la página de login", async () => {
    const response = await request(app).get("/login");

    expect(response.status).toBe(200);
  });

  it("debe mostrar formulario de login sin errores inicialmente", async () => {
    const response = await request(app).get("/login");

    expect(response.text).toContain("form");
    expect(response.text).not.toContain("Invalid credentials");
  });

  it("debe redirigir a home tras login exitoso", async () => {
    // Mock de usuario existente con contraseña correcta
    const mockUser = {
      id: "user123",
      email: "test@example.com",
      comparePassword: jest.fn().mockResolvedValue(true),
      addLoginRecord: jest.fn(),
      save: jest.fn().mockResolvedValue(true),
    };

    User.findOne = jest.fn().mockResolvedValue(mockUser);

    const response = await request(app).post("/login").type("form").send({
      email: "test@example.com",
      password: "password123",
    });

    expect(response.status).toBe(302);
    expect(response.headers.location).toBe("/");
    expect(User.findOne).toHaveBeenCalledWith({ email: "test@example.com" });
    expect(mockUser.comparePassword).toHaveBeenCalledWith("password123");
  });

  it("debe mostrar error con credenciales inválidas", async () => {
    // Mock de usuario existente con contraseña incorrecta
    const mockUser = {
      email: "test@example.com",
      comparePassword: jest.fn().mockResolvedValue(false),
    };

    User.findOne = jest.fn().mockResolvedValue(mockUser);

    const response = await request(app).post("/login").type("form").send({
      email: "test@example.com",
      password: "wrongpassword",
    });

    expect(response.status).toBe(200);
    expect(response.text).toContain("Invalid credentials");
  });

  it("debe mostrar error cuando el usuario no existe", async () => {
    // Mock de usuario no existente
    User.findOne = jest.fn().mockResolvedValue(null);

    const response = await request(app).post("/login").type("form").send({
      email: "nonexistent@example.com",
      password: "anypassword",
    });

    expect(response.status).toBe(200);
    expect(response.text).toContain("Invalid credentials");
  });

  it("debe redirigir a la URL especificada después del login exitoso", async () => {
    // Mock de usuario existente con contraseña correcta
    const mockUser = {
      id: "user123",
      email: "test@example.com",
      comparePassword: jest.fn().mockResolvedValue(true),
      addLoginRecord: jest.fn(),
      save: jest.fn().mockResolvedValue(true),
    };

    User.findOne = jest.fn().mockResolvedValue(mockUser);

    const response = await request(app).post("/login?redir=/agents/new").type("form").send({
      email: "test@example.com",
      password: "password123",
    });

    expect(response.status).toBe(302);
    expect(response.headers.location).toBe("/agents/new");
  });
  it("debe cerrar sesión y redirigir a home al hacer logout", async () => {
    const response = await request(app).get("/logout");

    expect(response.status).toBe(302);
    expect(response.headers.location).toBe("/");
  });
});
