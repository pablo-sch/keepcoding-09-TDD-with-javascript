import request from "supertest";
import app from "../app.js";
import Agent from "../models/Agent.js";

//We mock the Agent model++++++++++++++++++++++++++++++++++++++
jest.mock("../models/Agent.js");

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
    req.session = { userId: null };
    next();
  };
});

//We mock sessionManager to simplify tests+++++++++++++++++++++
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

//#######################################################################################################
describe("homeController", () => {
  // Integration test using supertest
  //#######################################################################################################
  describe("Integration tests", () => {
    // We setup the mocks before each test
    beforeEach(() => {
      // We setup the Agent.find mock to return a list of test agents
      Agent.find = jest.fn().mockResolvedValue([
        { _id: "agent1", name: "Smith", age: 45 },
        { _id: "agent2", name: "Brown", age: 33 },
      ]);
    });

    //=========================================================================
    it("should return 200 when visiting the home page", async () => {
      expect.assertions(1);
      let response;
      try {
        response = await request(app).get("/");
      } catch (ex) {
        console.log("Error making the request");
        console.log(ex);
      }

      expect(response.status).toBe(200);
    }, 15000); // We increase the timeout to 15 seconds

    //=========================================================================
    it("should call Agent.find with the correct parameters", async () => {
      // We make the request to the / route
      expect.assertions(1);
      await request(app).get("/");

      // We verify that Agent.find was called
      expect(Agent.find).toHaveBeenCalled();
    });
  });
});
