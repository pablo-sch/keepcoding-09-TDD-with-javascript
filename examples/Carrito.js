export class Carrito {
  // items = 0;

  items = [];

  // Aproximación A
  totalCheckout = 0;

  getTotalItems() {
    return this.items.length;
  }

  getTotatCheckout() {
    // return 10;
    // return this.items * 10;
    // return this.items == 1 ? 10 : 20;
    return this.totalCheckout;
  }

  addItem(item) {
    // if ( typeof item !== 'object' ) throw new Error('Item must be an object');
    // if (
    //     !item.price ||
    //     !item.name
    // ) {
    //     throw new Error('Item must have price and name');
    // }
    this.checkItem(item);
    this.items.push(item);
    this.totalCheckout += item.price;
  }

  checkItem(item) {
    if (typeof item !== "object") throw new Error("Item must be an object");
    if (!item.price || !item.name) {
      throw new Error("Item must have price and name");
    }
  }

  removeItem() {
    return [];
  }
}
