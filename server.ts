import {FastifyInstance} from "fastify";

const server: FastifyInstance = require('./app')({
  logger: {
    level: 'info',
    prettyPrint: true
  }
})

server.listen(8080, (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
})
