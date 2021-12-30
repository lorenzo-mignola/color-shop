import Fastify, { FastifyInstance } from 'fastify';
import { bootstrap } from 'fastify-decorators';
import { resolve } from 'path';
import prisma from './prisma';

const server: FastifyInstance = Fastify({});

server.register(bootstrap, {
  directory: resolve(__dirname, 'routes'),
  mask: /\.controller\./
});

// Run the server!
const start = async () => {
  try {
    await server.listen(3030);
  } catch (err) {
    server.log.error(err);
    await prisma.$disconnect();
    process.exit(1);
  }
};

start();
