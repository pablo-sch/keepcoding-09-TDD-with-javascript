import { Carrito } from "./Carrito";

describe("Testing de la clase Carrito", () => {
  const sushiItem = {
    price: 10,
    name: "sushiItem",
  };

  const waterItem = {
    price: 1.5,
    name: "waterItem",
  };

  let carrito;
  beforeEach(() => {
    carrito = new Carrito();
  });

  describe("Testing de getTotalItems y addItem", () => {
    it("Carrito debe tener una fución llamada getTotalItems que devuelva 0 a la inicialización del carrito", () => {
      // const carrito = new Carrito();
      expect(carrito.getTotalItems()).toEqual(0);
    });

    it("Carrito.getTotalItems debe devolver 1 despues de añadir un elemento al carrito.", () => {
      // const carrito = new Carrito();
      // carrito.addItem({ price: 1, name: 'sushiItem' });
      carrito.addItem(sushiItem);
      expect(carrito.getTotalItems()).toEqual(1);
    });

    it("Carrito.getTotalItems debe devolver 2 despues de añadir 1 elemento al carrito dos veces.", () => {
      // carrito.addItem({ price: 1, name: 'sushiItem' });
      // carrito.addItem({ price: 1, name: 'sushiItem' });
      carrito.addItem(sushiItem);
      carrito.addItem(sushiItem);
      expect(carrito.getTotalItems()).toEqual(2);
    });

    describe("Gestión de errores", () => {
      it("Carrito.addItem debe devolver un error si se añade un item sin precio.", () => {
        expect(() => carrito.addItem({ name: "sushiItem" })).toThrow();
      });

      it("Carrito.addItem debe devolver un error si se añade un item sin nombre.", () => {
        expect(() => carrito.addItem({ price: 1 })).toThrow();
      });

      it("Carrito.addItem debe devolver un error diciendo 'Item must have price and name' si el item no contiene nombre o precio.", () => {
        expect(() => carrito.addItem({ price: 1 })).toThrow(
          "Item must have price and name"
        );
        expect(() => carrito.addItem({ name: "sushiItem" })).toThrow(
          "Item must have price and name"
        );
      });

      it("Carrito.addItem debe devolver un error diciendo 'Item must be an object' si el item no es un objeto.", () => {
        expect(() => carrito.addItem("sushiItem")).toThrow(
          "Item must be an object"
        );
      });
    });
  });

  describe("Testeando getTotalCheckout", () => {
    it("Carrito.getTotatCheckout debe devolver 10 despues de añadir 1 sushiItem", () => {
      carrito.addItem(sushiItem);
      expect(carrito.getTotatCheckout()).toEqual(10);
    });

    it("Carrito.getTotatCheckout debe devolver 20 despues de añadir 2 sushiItem", () => {
      carrito.addItem(sushiItem);
      carrito.addItem(sushiItem);
      expect(carrito.getTotatCheckout()).toEqual(20);
    });

    it("Carrito.getTotatCheckout debe devolver 11,5 despues de añadir 1 sushiItem i 1 waterItem", () => {
      carrito.addItem(sushiItem);
      carrito.addItem(waterItem);
      expect(carrito.getTotatCheckout()).toEqual(11.5);
    });

    it("Debe devolver 0 si el carrito esta vacío", () => {
      expect(carrito.getTotatCheckout()).toEqual(0);
    });
  });

  describe("Testeando addItem (detail)", () => {
    it("Debe contener el item añadido en la propiedad carrito.items", () => {
      carrito.addItem(sushiItem);
      expect(carrito.items).toPartiallyContain(sushiItem);
    });

    it("Carrito.items debe ser un array vacío si no añadimos ningun elemento", () => {
      expect(carrito.items).toBeEmpty();
    });

    it("Carrito debe llamar a una función checkItem antes de añadirlo al carrito.", () => {
      const spy = jest.spyOn(carrito, "checkItem");
      carrito.addItem(sushiItem);
      // expect(jest.spyOn(carrito, 'checkItem')).toHaveBeenCalled(); Es lo mismo que definir una variable.
      expect(spy).toHaveBeenCalled();
    });

    it("Carrito debe llamar una única vez a checkItem cuando añadimos un elemento", () => {
      const spy = jest.spyOn(carrito, "checkItem");
      carrito.addItem(sushiItem);
      expect(spy).toHaveBeenCalledOnce();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("Carrito debe llamar a una función checkItem con el valor del item a añadir", () => {
      const spy = jest.spyOn(carrito, "checkItem");
      carrito.addItem(sushiItem);
      expect(spy).toHaveBeenCalledWith(sushiItem);
    });
  });

  describe("Testeando removeItem", () => {
    it("Carrito.removeItem debe devolver un array vacio despues de añadir un elemento y eliminarlo", () => {
      carrito.addItem(waterItem);
      expect(carrito.removeItem(waterItem)).toHaveLength(0);
    });

    it("Carrito.removeItem debe devolver un array con un elemento cuando añadimos dos elementos distintos y eliminamos uno", () => {
      carrito.addItem(sushiItem);
      carrito.addItem(waterItem);
      expect(carrito.removeItem(waterItem)).toHaveLength(1);
    });

    it("Carrito.items debe contener un elemento después de añadir dos elementos distintos y eliminar uno", () => {
      carrito.addItem(sushiItem);
      carrito.addItem(waterItem);
      carrito.removeItem(waterItem);
      expect(carrito.items).toHaveLength(1);
    });

    it("Carrito.items debe ser un array con DOS elementos si añadimos dos sushiItem y un waterItem y eliminamos un sushiItem", () => {
      carrito.addItem(sushiItem);
      carrito.addItem(sushiItem);
      carrito.addItem(waterItem);
      carrito.removeItem(sushiItem);
      expect(carrito.items).toHaveLength(2);
    });
  });
});
