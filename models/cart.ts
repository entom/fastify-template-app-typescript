import {Product} from "./product";

export class Cart {
  private products: Array<Product>;

  constructor() {
    this.products = [];
  }

  clear(): void {
    this.products = [];
  }

  add(product: Product): void {
    this.products.push(product);
  }

  remove(index: number): void {
    this.products.splice(index, 1);
  }

  getProducts(): Array<Product> {
    return this.products;
  }
}
