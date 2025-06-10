import crypto from "crypto";

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

    // Aproximación con cantidad
    // if (this.items.some(i => i.name === item.name)) {
    //     const findItem = this.items.find(i => i.name === item.name);
    //     findItem.qt += 1;
    // } else {
    //     this.items.push({
    //         ...item,
    //         qt: 1
    //     });
    // }

    this.items.push({
      ...item,
      id: crypto.randomUUID(),
    });
    // this.items.push(item);
    this.totalCheckout += item.price;
  }

  checkItem(item) {
    if (typeof item !== "object") throw new Error("Item must be an object");
    if (!item.price || !item.name) {
      throw new Error("Item must have price and name");
    }
  }

  removeItem(item) {
    // this.items = this.items.filter( i => i.name !== item.name );
    // return this.items;

    // Aproximación con cantidad
    // const findItem = this.items.find(i => i.name === item.name);
    // if (findItem.qt === 1) {
    //     // Elimino el elemento
    //     this.items = this.items.filter( i => i.name !== item.name );
    // } else {
    //     // Reducimos qt
    //     findItem.qt -= 1;
    // }

    // Aproximación con ID
    const findItem = this.items.find((i) => i.name === item.name);
    this.items = this.items.filter((i) => i.id != findItem.id);
    return this.items;
  }
}
