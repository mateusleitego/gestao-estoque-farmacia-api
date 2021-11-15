import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id: _id } = request.params;
      const { nome, email } = request.body;

      const user = await this.updateUserUseCase.execute({ _id, nome, email });

      return response.status(200).json({ nome: user.nome, email: user.email });
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
