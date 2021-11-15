import { MedicinesRepository } from '../../repositories/implementations/MedicinesRepository';
import { CreateMedicineController } from './CreateMedicineController';
import { CreateMedicineUseCase } from './CreateMedicineUseCase';

export default (): CreateMedicineController => {
  const medicinesRepository = new MedicinesRepository();
  const createMedicineUseCase = new CreateMedicineUseCase(medicinesRepository);
  const createMedicineController = new CreateMedicineController(
    createMedicineUseCase
  );

  return createMedicineController;
};
