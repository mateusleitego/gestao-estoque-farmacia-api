import { Router } from 'express';

import authenticateUserController from './useCases/AuthenticateUser';
import createUserController from './useCases/CreateUser';
import getUserController from './useCases/GetUser';
import updateUserController from './useCases/UpdateUser';
import deleteUserController from './useCases/DeleteUser';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';

export const userRouter = Router();

userRouter.post('/authenticate', (request, response) =>
  authenticateUserController().handle(request, response)
);

userRouter.use(ensureAuthenticated);

userRouter.post('/', (request, response) =>
  createUserController().handle(request, response)
);

userRouter.get('/:access_code', (request, response) =>
  getUserController().handle(request, response)
);

userRouter.put('/:id', (request, response) =>
  updateUserController().handle(request, response)
);

userRouter.delete('/:id', (request, response) =>
  deleteUserController().handle(request, response)
);
