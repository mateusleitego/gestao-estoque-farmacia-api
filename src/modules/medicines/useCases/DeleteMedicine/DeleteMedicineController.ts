import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { DeleteMedicineUseCase } from './DeleteMedicineUseCase';

export class DeleteMedicineController {
  constructor(private deleteMedicineUseCase: DeleteMedicineUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { medicine_id: _id } = request.params;

      await this.deleteMedicineUseCase.execute({ _id });

      return response.status(200).send();
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
