import { FastifyInstance } from 'fastify';
import colorController from './color/color.controller';
import userController from './user/user.controller';

const registerRoutes = (fastify: FastifyInstance) => {
  fastify.register(userController, {
    prefix: '/users'
  });
  fastify.register(colorController, {
    prefix: '/color'
  });
};

export default registerRoutes;
