import {Product} from "./product";

export class Cart {
  private products: Array<Product>;

  constructor() {
    this.products = [];
  }

  clear() {
    this.products = [];
  }

  add(product: Product) {
    this.products.push(product);
  }

  remove(index: number) {
    this.products.splice(index, 1);
  }

  getProducts() {
    return this.products;
  }
}
