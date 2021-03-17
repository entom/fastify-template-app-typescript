import {Cart} from "../../models/cart";

const {test} = require('tap')

let cart: Cart = new Cart();

test('create cart', async (t: any) => {
  cart = new Cart();
  t.strictEqual(cart.getProducts().length, 0, 'returns number of 0 products')
})

test('add 2 products into cart', async (t: any) => {
  cart.add({price: 5, quantity: 1, title: 'Product 1'})
  cart.add({price: 10, quantity: 1, title: 'Product 2'})

  t.strictEqual(cart.getProducts().length, 2, 'returns number of 2 products')
})

test('calculate sum of cart', async (t: any) => {
  cart.clear()

  t.strictEqual(cart.calculateSum(), 0, 'returns value of 15')
})

test('remove product from', async (t: any) => {
  cart.remove(0)

  t.strictEqual(cart.calculateSum(), 0, 'returns number of 1 product')
})

test('clear cart products', async (t: any) => {
  cart.clear()

  t.strictEqual(cart.getProducts().length, 0, 'returns number of 0 products')
})

