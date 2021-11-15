import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, email, password } = request.body;

      const code = await this.createUserUseCase.execute({
        nome,
        email,
        password,
      });

      return response.status(201).json({ Access_code: code });
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
