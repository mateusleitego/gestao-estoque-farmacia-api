import { hash } from 'bcryptjs';
import { AppError } from '../../../../errors/AppError';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ nome, email, password }: CreateUserDTO): Promise<String> {
    try {
      const userAlreadyExists = await this.usersRepository.findByEmail(email);

      if (userAlreadyExists) {
        throw new AppError('Usuário ja existente');
      }

      const passwordHash = await hash(password, 8);

      const access_code: String = await this.usersRepository.create({
        nome,
        email,
        password: passwordHash,
      });

      return access_code;
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
