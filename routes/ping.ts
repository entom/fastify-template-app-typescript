import {FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions} from "fastify";

const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {type: 'string'}
        }
      }
    }
  }
}

async function routes(fastify: FastifyInstance, options: FastifyServerOptions) {
  fastify.get('/ping', opts, async (request: FastifyRequest, reply: FastifyReply) => {
    return 'pong'
  })
}

module.exports = routes
