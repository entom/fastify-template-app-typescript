const {test} = require('tap')
const b = require('../../app')

test('requests the "/ping" route', async (t: any) => {
  const app = b()

  const response = await app.inject({
    method: 'GET',
    url: '/ping'
  })
  t.strictEqual(response.statusCode, 200, 'returns a status code of 200')
})
