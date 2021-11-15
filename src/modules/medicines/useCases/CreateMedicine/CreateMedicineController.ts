import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { CreateMedicineUseCase } from './CreateMedicineUseCase';

export class CreateMedicineController {
  constructor(private createMedicineUseCase: CreateMedicineUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, descricao, categoria, preco, validade } = request.body;

      const medicine = await this.createMedicineUseCase.execute({
        nome,
        descricao,
        categoria,
        preco,
        validade,
      });

      return response.status(201).json({ medicine });
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
