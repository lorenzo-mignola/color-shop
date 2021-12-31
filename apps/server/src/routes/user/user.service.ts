// import { Service } from 'fastify-decorators';
import prisma from '../../prisma';

// @Service()
export default class UserService {
  async getAll() {
    return prisma.user.findMany();
  }

  async getById(id: string) {
    return prisma.user.findUnique({ where: { address: id } });
  }
}
