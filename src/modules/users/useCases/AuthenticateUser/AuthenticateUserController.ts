import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { login, password } = request.body;

      const token = await this.authenticateUserUseCase.execute({
        login,
        password,
      });

      return response.status(201).json(token);
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
