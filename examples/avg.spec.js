import { avg } from "./avg";

describe("Función average", () => {
  it("Para un array formado por 1, 1, 1. El resultado debe ser 1", () => {
    expect(avg([1, 1, 1])).toEqual(1);
  });

  it("Para un array de elementos positivos, la media debe ser positiva", () => {
    expect(avg([1, 2, 3])).toBeGreaterThan(0);
  });

  it("Para un array de elementos negativos, la media debe ser negativa", () => {
    expect(avg([-1, -2, -3])).toBeLessThan(0);
  });

  it("Para un array vacío, el resultado sea NaN", () => {
    expect(avg([])).toBeNaN();
  });
});
