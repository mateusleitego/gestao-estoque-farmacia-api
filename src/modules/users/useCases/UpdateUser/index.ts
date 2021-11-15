import { UsersRepository } from '../../repositories/implementations/UserRepository';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export default (): UpdateUserController => {
  const usersRepository = new UsersRepository();
  const updateUserUseCase = new UpdateUserUseCase(usersRepository);
  const updateUserController = new UpdateUserController(updateUserUseCase);

  return updateUserController;
};
