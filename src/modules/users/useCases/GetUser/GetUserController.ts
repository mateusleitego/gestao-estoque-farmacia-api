import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { GetUserUseCase } from './GetUserUseCase';

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { access_code } = request.params;

      const { nome, email, isAdmin } = await this.getUserUseCase.execute({
        access_code,
      });

      return response.status(200).json({ nome, email, isAdmin });
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
