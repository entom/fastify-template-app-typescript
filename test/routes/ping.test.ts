const bPing = require('../../app.ts')

test('requests the "/ping" route', async () => {
  const app = bPing()
  const response = await app.inject({
    method: 'GET',
    url: '/ping'
  })
  expect(response.statusCode).toBe(200); //returns a status code of 200
});
