import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { SearchMedicineUseCase } from './SearchMedicineUseCase';

export class SearchMedicineController {
  constructor(private searchMedicineUseCase: SearchMedicineUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const medicines = await this.searchMedicineUseCase.execute();

      return response.status(200).json(medicines);
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
