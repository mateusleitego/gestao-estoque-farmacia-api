import { CreateMedicineDTO } from '../../dtos/CreateMedicineDTO';
import { AppError } from '../../../../errors/AppError';
import { IMedicinesRepository } from '../../repositories/IMedicinesRepository';
import { MedicineDocument } from '../../schemas/Medicine';

export class CreateMedicineUseCase {
  constructor(private medicinesRepository: IMedicinesRepository) {}

  async execute({
    nome,
    descricao,
    categoria,
    preco,
    validade,
  }: CreateMedicineDTO): Promise<MedicineDocument> {
    try {
      const medicineAlreadyExists = await this.medicinesRepository.findByName(
        nome
      );

      if (medicineAlreadyExists) {
        throw new AppError('Medicamento ja existente');
      }

      const medicine = await this.medicinesRepository.create({
        nome,
        descricao,
        categoria,
        preco,
        validade,
      });

      return medicine;
    } catch (error) {
      //@ts-ignore
      throw new AppError(`${error.message}`, 500);
    }
  }
}
