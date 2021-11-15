import { AppError } from '../../../../errors/AppError';
import { DeleteUserDTO } from '../../dtos/DeleteUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ _id }: DeleteUserDTO): Promise<void> {
    try {
      const userAlreadyExists = await this.usersRepository.findById(_id);

      if (!userAlreadyExists) {
        throw new AppError('Usuário ou Email não existente');
      }

      await this.usersRepository.delete({ _id });
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
