import request from "supertest";
import app from "../app.js";
import User from "../models/User";

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
jest.mock("../models/User.js");

//We mock connectMongoose to avoid real connections++++++++++++
jest.mock("../lib/connectMongoose.js", () => {
  return jest.fn().mockResolvedValue({
    name: "mockConnection",
    close: jest.fn(),
  });
});

//We mock session to avoid session issues++++++++++++++++++++++
jest.mock("express-session", () => {
  return () => (req, res, next) => {
    req.session = {
      userId: null,
      regenerate: jest.fn((cb) => cb(null)),
    };
    next();
  };
});

//We mock sessionManager to simplify the tests+++++++++++++++++
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

//#######################################################################################################
describe("loginController", () => {
  // Clear mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  //=========================================================================
  it("should return 200 when visiting the login page", async () => {
    const response = await request(app).get("/login");

    expect(response.status).toBe(200);
  });

  //=========================================================================
  it("should show login form without errors initially", async () => {
    const response = await request(app).get("/login");

    expect(response.text).toContain("form");
    expect(response.text).not.toContain("Invalid credentials");
  });

  //=========================================================================
  it("should redirect to home after successful login", async () => {
    // Mock an existing user with correct password
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

  //=========================================================================
  it("should show error with invalid credentials", async () => {
    // Mock an existing user with incorrect password
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

  //=========================================================================
  it("should show error when user does not exist", async () => {
    // Mock non-existent user
    User.findOne = jest.fn().mockResolvedValue(null);

    const response = await request(app).post("/login").type("form").send({
      email: "nonexistent@example.com",
      password: "anypassword",
    });

    expect(response.status).toBe(200);
    expect(response.text).toContain("Invalid credentials");
  });

  //=========================================================================
  it("should redirect to specified URL after successful login", async () => {
    // Mock an existing user with correct password
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

  //=========================================================================
  it("should logout and redirect to home", async () => {
    const response = await request(app).get("/logout");

    expect(response.status).toBe(302);
    expect(response.headers.location).toBe("/");
  });
});

//#######################################################################################################
describe.only("TDD Exercise", () => {
  //=========================================================================
  it("should record a new login upon successful login", async () => {
    const mockUser = {
      id: "user123",
      email: "test@example.com",
      comparePassword: jest.fn().mockResolvedValue(true),
      addLoginRecord: jest.fn(),
      save: jest.fn().mockResolvedValue(true),
    };
    User.findOne = jest.fn().mockResolvedValue(mockUser);

    await request(app).post("/login").type("form").send({
      email: "test@example.com",
      password: "password123",
    });

    expect(mockUser.addLoginRecord).toHaveBeenCalled();
    expect(mockUser.save).toHaveBeenCalled();
  });
});
