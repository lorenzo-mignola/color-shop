import { Controller, GET } from 'fastify-decorators';
import prisma from '../../prisma';

@Controller({ route: '/users' })
export default class UserController {
  @GET({ url: '/' })
  async helloHandler() {
    const allUsers = await prisma.user.findMany();

    return { data: allUsers };
  }
}
