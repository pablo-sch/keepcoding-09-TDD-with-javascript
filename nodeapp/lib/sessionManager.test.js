import { guard, middleware, useSessionInViews } from "./sessionManager.js";

describe("sessionManager", () => {
  it("Deberia exportar guard como funcion", () => {
    expect(typeof guard).toBe("function");
  });

  it("Deberia exportar middleware como funcion", () => {
    expect(typeof middleware).toBe("function");
  });

  it("Deberia exportar useSessionInViews como funcion", () => {
    expect(typeof useSessionInViews).toBe("function");
  });

  it("useSessionInViews deberia llamar siempre a la funcion next", () => {
    const next = jest.fn();
    const req = {};
    const res = { locals: {} };
    useSessionInViews(req, res, next);
    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
  });
});
