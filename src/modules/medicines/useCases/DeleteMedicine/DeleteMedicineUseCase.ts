import { AppError } from '../../../../errors/AppError';
import { DeleteMedicineDTO } from '../../dtos/DeleteMedicineDTO';
import { IMedicinesRepository } from '../../repositories/IMedicinesRepository';
import { MedicineDocument } from '../../schemas/Medicine';

export class DeleteMedicineUseCase {
  constructor(private medicinesRepository: IMedicinesRepository) {}

  async execute({ _id }: DeleteMedicineDTO): Promise<void> {
    try {
      const medicineAlreadyExists = await this.medicinesRepository.findById(
        _id
      );

      if (!medicineAlreadyExists) {
        throw new AppError('Medicamento não existente');
      }

      await this.medicinesRepository.delete(_id);
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
