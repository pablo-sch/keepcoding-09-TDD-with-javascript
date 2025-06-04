import { sum } from "./sum";

describe("Función sum", () => {
  //afterEach("", () => {
  describe("Suma de valores positivos", () => {
    //1 + 2 -> 3
    test("sumar 1 + 2 es igual a 3", () => {
      expect(sum(1, 2)).toBe(3);
    });

    //1 + 2 -> 3 (Error)
    test.skip("sumar 1 + 2 es igual a 3", () => {
      expect(sum(1, 2)).toBe(2);
    });

    //0 + 0 -> 0
    test("Sumar 0 + 0 es igual a 0", () => {
      expect(sum(0, 0)).toBe(0);
      expect(sum(0, 0)).toEqual(0);
      expect(sum(0, 0)).not.toEqual(1);
    });

    //0 + 1 -> 1
    test("Sumar 0 + 1 es igual a 1", () => {
      expect(sum(0, 1)).toBe(1);
    });
  });

  describe("Suma de valores negativos", () => {
    //1 + -3 -> -2
    test("Sumar -1 + -3 es igual a -4", () => {
      expect(sum(-1, -3)).toBe(-4);
    });

    // Valorar 3 combinaciones de numeros. Asegurar que el valor es NEGATIVO -1 -1 > NEGATIVO. -1 -4 NEGATIVO. ETC.

    //test.todo("Sumar dos valores negativos es igual a un valor negativo");
    //test.skip("Sumar dos valores negativos es igual a un valor negativo");

    test("Sumar dos valores negativos es igual a un valor negativo", () => {
      expect.assertions(4);
      expect(sum(-1, -1)).not.toBeGreaterThan(0);
      expect(sum(-1, -4)).toBeLessThan(0);
      expect(sum(-2, -6)).toBeLessThan(0);
      expect(sum(-2, -6)).toBeNegative();
    });

    test("Sumar dos valores negativos cualesquiera es igual a un valor negativo", () => {
      for (let i = 0; i++; i < 3) {
        const a = Math.random() * -1;
        const b = Math.random() * -1;
        expect(sum(a, b)).toBeLessThanOrEqual(0);
      }
    });
  });

  describe("Suma con valores decimales", () => {
    //test.todo("Sumar 0.1 + 0.2 es 0.3")

    test("Sumar 0.1 + 0.2 es 0.3", () => {
      expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
    });
  });

  describe("Suma con valores no numéricos", () => {
    it.skip('Sumar 1 y "a" debe devolver un error', () => {
      expect(sum(1, "a")).toThrow("Must Be a number");
    });
  });
  //});
});
