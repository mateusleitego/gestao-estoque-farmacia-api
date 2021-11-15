import { AppError } from '../../../../errors/AppError';
import { GetMedicineDTO } from '../../dtos/GetMedicineDTO';
import { IMedicinesRepository } from '../../repositories/IMedicinesRepository';
import { MedicineDocument } from '../../schemas/Medicine';

export class GetMedicineUseCase {
  constructor(private medicinesRepository: IMedicinesRepository) {}

  async execute({ nome }: GetMedicineDTO): Promise<MedicineDocument> {
    try {
      const medicine = await this.medicinesRepository.findByName(nome);

      if (!medicine) {
        throw new AppError('Medicamento não existente');
      }

      return medicine;
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
