import { UsersRepository } from '../../repositories/implementations/UserRepository';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export default (): DeleteUserController => {
  const usersRepository = new UsersRepository();
  const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
  const deleteUserController = new DeleteUserController(deleteUserUseCase);

  return deleteUserController;
};
