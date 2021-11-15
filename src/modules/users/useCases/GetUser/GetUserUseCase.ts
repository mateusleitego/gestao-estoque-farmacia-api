import { AppError } from '../../../../errors/AppError';
import { GetUserDTO } from '../../dtos/GetUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { UserDocument } from '../../schemas/User';

export class GetUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ access_code }: GetUserDTO): Promise<UserDocument> {
    try {
      const user = await this.usersRepository.findByAccessCode(access_code);

      if (!user) {
        throw new AppError('Usuário ou Access_Code não existente');
      }

      return user;
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
