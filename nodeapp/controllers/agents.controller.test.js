import request from "supertest";
import app from "../app.js";
import { guard, middleware } from "../lib/sessionManager";

//We can mock internal functions+++++++++++++++++++++++++++++++
jest.mock("../lib/sessionManager", () => ({
  guard: jest.fn((req, res, next) => {
    // Simulate that the user is not authenticated
    res.redirect(`/login?redir=${req.url}`);

    // All middlewares call next();
    next();
  }),
  middleware: jest.fn((req, res, next) => next()),
  useSessionInViews: jest.fn((req, res, next) => next()),
}));

//#######################################################################################################
describe("AgentsController", () => {
  //=========================================================================
  it("should redirect to the login view if no session exists", async () => {
    expect.assertions(2);
    // Make a request to our app
    const response = await request(app)
      // on the /agents/new route
      .get("/agents/new");

    // We expect a redirection to login
    expect(response.status).toBe(302);
    expect(response.headers.location).toBe("/login?redir=/agents/new");
  });

  //=========================================================================
  it("should call guard before allowing access to the route", async () => {
    expect.assertions(1);
    const response = await request(app).get("/agents/new");

    // The guard middleware should be called
    expect(guard).toHaveBeenCalled();
  });
});
