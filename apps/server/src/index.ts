import Fastify, { FastifyInstance } from 'fastify';
import cors from 'fastify-cors';
import prisma from './prisma';
import registerRoutes from './routes';

const fastify: FastifyInstance = Fastify({ logger: true });

registerRoutes(fastify);

fastify.register(cors, {
  origin: '*'
});

const start = async () => {
  try {
    await fastify.listen(3030);
  } catch (err) {
    fastify.log.error(err);
    await prisma.$disconnect();
    process.exit(1);
  }
};

start();
