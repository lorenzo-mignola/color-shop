import Fastify, { FastifyInstance } from 'fastify';
import prisma from './prisma';
import user from './routes/user/user.controller';

const server: FastifyInstance = Fastify({ logger: true });

server.register(user, {
  prefix: '/users'
});

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
