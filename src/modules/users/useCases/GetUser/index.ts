import { UsersRepository } from '../../repositories/implementations/UserRepository';
import { GetUserController } from './GetUserController';
import { GetUserUseCase } from './GetUserUseCase';

export default (): GetUserController => {
  const usersRepository = new UsersRepository();
  const getUserUseCase = new GetUserUseCase(usersRepository);
  const getUserController = new GetUserController(getUserUseCase);

  return getUserController;
};
