import Fastify from "fastify";

const app = () => {
    const fastify = Fastify({ logger: true })

    fastify.get('/', async (request, reply) => {
        reply.send({ hello: 'world' })
    })

    fastify.get('/insecure/:code', async (request, reply) => {
        const { code } = request.params
        reply.send({ result: eval(code) })
    })

    return fastify
}

export default app
