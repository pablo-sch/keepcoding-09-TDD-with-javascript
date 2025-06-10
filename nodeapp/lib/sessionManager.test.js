import { guard, sessionManager } from "./sessionManager.js";

describe("sessionManager", () => {
  it("Deberia exportar guard como funcion", () => {
    expect(typeof guard).toBe("function");
  });
});
