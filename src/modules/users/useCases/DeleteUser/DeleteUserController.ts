import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id: _id } = request.params;

      await this.deleteUserUseCase.execute({ _id });

      return response.status(200).send();
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
