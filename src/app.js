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

    fastify.get('/number/:num', async (request, reply) => {
        const { num } = request.params
        let result = false
        if (num % 2 == 0) {
            result = true
        }
        reply.send({ result: result })
    })

    fastify.get('/string/:str', async (request, reply) => {
        const { str } = request.params
        let length = 0
        if (str.length === 0) {
            length = 0
        } else if(str.length === 1) {
            length = 1
        } else if(str.length === 2) {
            length = 2
        } else {
            length = 3
        }
        reply.send({ length: length })
    })

    return fastify
}

export default app
