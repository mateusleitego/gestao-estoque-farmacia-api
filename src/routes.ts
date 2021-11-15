import { Router } from 'express';
import { medicineRouter } from './modules/medicines/routes';
import { userRouter } from './modules/users/routes';

export const routes = Router();

routes.use('/users', userRouter);
routes.use('/medicines', medicineRouter);
