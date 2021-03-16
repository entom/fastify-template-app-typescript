import fastify, {FastifyInstance} from 'fastify'

const server: FastifyInstance = fastify()

server.register(require('./routes/api/status'), {prefix: '/api'})
server.register(require('./routes/ping'))

server.listen(8080, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
