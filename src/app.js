import Fastify from "fastify";

const app = () => {
    const fastify = Fastify({ logger: true })

    fastify.get('/', async (request, reply) => {
        reply.send({ hello: 'world' })
    })
    return fastify
}

export default app
