import {FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions} from "fastify";

const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          status: {type: 'string'}
        }
      }
    }
  }
}

async function routes(fastify: FastifyInstance, options: FastifyServerOptions) {
  fastify.get('/status', opts, async (request: FastifyRequest, reply: FastifyReply) => {
    return {status: 'ok'}
  })
}

module.exports = routes
