import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { authConfig } from '../../../../config/authConfig';
import { AppError } from '../../../../errors/AppError';
import { AuthenticateUserDTO } from '../../dtos/AuthenticateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ login, password }: AuthenticateUserDTO): Promise<any> {
    try {
      let user = await this.usersRepository.findByEmail(login);

      if (!user) {
        user = await this.usersRepository.findByAccessCode(login);

        if (!user) {
          throw new AppError('Email/Access_code/Password esta incorreto');
        }
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        throw new AppError('Email/Access_code/Password esta incorreto');
      }

      const token = sign({}, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
        subject: `${user._doc._id}`,
      });

      return {
        token,
      };
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
