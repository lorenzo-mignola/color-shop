import Fastify, { FastifyInstance } from 'fastify';

const server: FastifyInstance = Fastify({});

// Declare a route
server.get('/', async () => ({ hello: 'asdf' }));

// Run the server!
const start = async () => {
  try {
    await server.listen(3030);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
