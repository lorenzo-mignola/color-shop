import { FastifyInstance } from 'fastify';

const generateColor = () =>
  // eslint-disable-next-line no-bitwise
  `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;

const colorController = async (fastify: FastifyInstance) => {
  fastify.get('/', async () => generateColor());
};

export default colorController;
