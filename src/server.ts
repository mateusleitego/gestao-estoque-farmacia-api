import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import fileDocumentation from './config/documentation.json';
import { ensureErrorHandling } from './middlewares/ensureErrorHandling';
import './database';
import { routes } from './routes';

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(routes);
server.use(
  '/documentation',
  swaggerUi.serve,
  swaggerUi.setup(fileDocumentation)
);

server.use(ensureErrorHandling);

server.listen(process.env.PORT || 3333, () =>
  console.log('🚀 Servidor rodando')
);
