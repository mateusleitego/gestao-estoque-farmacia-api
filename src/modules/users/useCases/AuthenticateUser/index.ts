import { UsersRepository } from '../../repositories/implementations/UserRepository';
import { AuthenticateUserController } from './AuthenticateUserController';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export default (): AuthenticateUserController => {
  const usersRepository = new UsersRepository();
  const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
  const authenticateController = new AuthenticateUserController(
    authenticateUserUseCase
  );

  return authenticateController;
};
