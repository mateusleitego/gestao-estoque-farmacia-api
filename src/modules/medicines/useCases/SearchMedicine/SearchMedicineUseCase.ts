import { AppError } from '../../../../errors/AppError';
import { IMedicinesRepository } from '../../repositories/IMedicinesRepository';
import { MedicineDocument } from '../../schemas/Medicine';

export class SearchMedicineUseCase {
  constructor(private medicinesRepository: IMedicinesRepository) {}

  async execute(): Promise<MedicineDocument[] | null> {
    try {
      const medicines = await this.medicinesRepository.findAll();

      return medicines;
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
