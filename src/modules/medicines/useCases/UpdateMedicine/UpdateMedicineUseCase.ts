import { AppError } from '../../../../errors/AppError';
import { UpdateMedicineDTO } from '../../dtos/UpdateMedicineDTO';
import { MedicinesRepository } from '../../repositories/implementations/MedicinesRepository';
import { MedicineDocument } from '../../schemas/Medicine';

export class UpdateMedicineUseCase {
  constructor(private medicinesRepository: MedicinesRepository) {}

  async execute(data: UpdateMedicineDTO): Promise<MedicineDocument | null> {
    try {
      const { _id, nome } = data;

      const medicineAlreadyExists = await this.medicinesRepository.findById(
        _id
      );

      if (!medicineAlreadyExists) {
        throw new AppError('Medicamento não existente');
      }

      const medicineNameAlreadyExists =
        await this.medicinesRepository.findByName(nome);

      if (medicineNameAlreadyExists) {
        throw new AppError('Nome de medicamento ja existente');
      }

      await this.medicinesRepository.update(data);

      const medicine = await this.medicinesRepository.findById(_id);

      return medicine;
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
