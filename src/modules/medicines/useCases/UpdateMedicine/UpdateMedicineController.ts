import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { UpdateMedicineUseCase } from './UpdateMedicineUseCase';

export class UpdateMedicineController {
  constructor(private updateMedicineUseCase: UpdateMedicineUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { medicine_id: _id } = request.params;
      const { nome, descricao, categoria, preco } = request.body;

      const medicine = await this.updateMedicineUseCase.execute({
        _id,
        nome,
        descricao,
        categoria,
        preco,
      });

      return response.status(200).json(medicine);
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
