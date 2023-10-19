import app from './app.js'

const fastify = app()

await fastify.listen({ port: 3000, host: '0.0.0.0' })