import { Router } from 'express';
import { userRouter } from './modules/users/routes';

export const routes = Router();

routes.use('/users', userRouter);
