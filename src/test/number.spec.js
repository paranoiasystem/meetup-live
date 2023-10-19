import t from 'tap'
import app from '../app.js'

t.test('GET `/insecure` route', async t => {
    const fastify = app()

    t.plan(3)

    t.teardown(async () => {
        await fastify.close()
    })

    const response = await fastify.inject({
        method: 'GET',
        url: '/number/3'
    })

    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    t.same(JSON.parse(response.payload), { result: false })
})