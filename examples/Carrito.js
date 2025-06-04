export class Carrito {
  items = 0;

  getTotalItems() {
    return this.items;
  }

  getTotalCheckout() {
    return 10;
  }

  addItem(item) {
    if (!item.price || !item.name)
      throw new Error("Item must have price and name");

    if (typeof item !== "object") {
      throw new Error("Item must be an object");
    }
    this.items++;
  }
}
