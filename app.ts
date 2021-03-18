import fastify from 'fastify'
import helmet from 'fastify-helmet'

function build(opts = {}) {
  const app = fastify(opts)

  app.register(require('point-of-view'), {
    engine: {
      ejs: require('ejs')
    }
  })

  app.register(helmet, {
    contentSecurityPolicy: false
  })

  app.register(require('fastify-compress'), {
    global: true,
    encodings: ['deflate', 'gzip']
  })

  app.register(require('./routes/api/status'), {prefix: '/api'})
  app.register(require('./routes/ping'))

  return app
}

module.exports = build
