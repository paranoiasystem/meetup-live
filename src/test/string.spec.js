import t from 'tap'
import app from '../app.js'

t.test('GET `/string` route #1', async t => {
    const fastify = app()

    t.plan(3)

    t.teardown(async () => {
        await fastify.close()
    })

    const response = await fastify.inject({
        method: 'GET',
        url: '/string/a'
    })

    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    t.same(JSON.parse(response.payload), { length: 1 })
})

t.test('GET `/string` route #2', async t => {
    const fastify = app()

    t.plan(3)

    t.teardown(async () => {
        await fastify.close()
    })

    const response = await fastify.inject({
        method: 'GET',
        url: '/string/ab'
    })

    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    t.same(JSON.parse(response.payload), { length: 2 })
})

t.test('GET `/string` route #3', async t => {
    const fastify = app()

    t.plan(3)

    t.teardown(async () => {
        await fastify.close()
    })

    const response = await fastify.inject({
        method: 'GET',
        url: '/string/abcd'
    })

    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    t.same(JSON.parse(response.payload), { length: 3 })
})

t.test('GET `/string` route #3', async t => {
    const fastify = app()

    t.plan(3)

    t.teardown(async () => {
        await fastify.close()
    })

    const response = await fastify.inject({
        method: 'GET',
        url: '/string/'
    })

    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    t.same(JSON.parse(response.payload), { length: 0 })
})