import {Cart} from "../../models/cart";

let cart: Cart = new Cart();

test('create cart', async () => {
  cart = new Cart();
  expect(cart.getProducts().length).toBe(0) //returns number of 0 products
})

test('add 2 products into cart', async () => {
  cart.add({price: 5, quantity: 1, title: 'Product 1'})
  cart.add({price: 10, quantity: 1, title: 'Product 2'})

  expect(cart.getProducts().length).toBe(2) //returns number of 2 products
})

test('calculate sum of cart', async () => {
  expect(cart.calculateSum()).toBe(15) //returns value of 15
})

test('remove product from', async () => {
  cart.remove(0)

  expect(cart.getProducts().length).toBe(1) //returns number of 1 product
})

test('calculate sum of cart', async () => {
  expect(cart.calculateSum()).toBe(10) //returns value of 15
})

test('clear cart products', async () => {
  cart.clear()

  expect(cart.getProducts().length).toBe(0) //returns number of 0 products
})
