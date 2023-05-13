import Fastify from 'fastify'

async function run() {
  const fastify = Fastify({ logger: true });

  fastify.get('/', function (request, reply) {
    reply.send({ time: Date.now() });
  });

  await fastify.listen({ port: 3000 });
  console.log('Successfully started server!');
}

;(async () => {
  await run();
})().catch((err) => {
  console.error(err, 'Error starting server');
  process.exit(1);
});
