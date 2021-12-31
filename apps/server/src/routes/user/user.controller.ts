import { FastifyInstance } from 'fastify';
import UserService from './user.service';

const userController = async (fastify: FastifyInstance) => {
  const userService = new UserService();

  fastify.get('/', async () => userService.getAll());
  fastify.get<{
    Params: { id: string };
  }>('/:id', async req => userService.getById(req.params.id));
};

export default userController;
