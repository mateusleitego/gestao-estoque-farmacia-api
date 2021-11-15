import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { GetMedicineUseCase } from './GetMedicineUseCase';

export class GetMedicineController {
  constructor(private getMedicineUseCase: GetMedicineUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id, nome, descricao, categoria, preco, validade } =
        await this.getMedicineUseCase.execute({
          nome: `${request.query.nome}`,
        });

      return response
        .status(200)
        .json({ id, nome, descricao, categoria, preco, validade });
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
