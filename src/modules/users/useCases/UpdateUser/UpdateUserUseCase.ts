import { AppError } from '../../../../errors/AppError';
import { UpdateUserDTO } from '../../dtos/UpdateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { UserDocument } from '../../schemas/User';

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ _id, nome, email }: UpdateUserDTO): Promise<UserDocument> {
    try {
      const userAlreadyExists = await this.usersRepository.findById(_id);

      if (!userAlreadyExists) {
        throw new AppError('Usuário ou Email não existente');
      }

      await this.usersRepository.update({ _id, nome, email });

      const user = await this.usersRepository.findByEmail(email);

      return user;
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
