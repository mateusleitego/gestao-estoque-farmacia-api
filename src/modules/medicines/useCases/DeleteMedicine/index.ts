import { MedicinesRepository } from '../../repositories/implementations/MedicinesRepository';
import { DeleteMedicineController } from './DeleteMedicineController';
import { DeleteMedicineUseCase } from './DeleteMedicineUseCase';

export default (): DeleteMedicineController => {
  const medicinesRepository = new MedicinesRepository();
  const deleteMedicineUseCase = new DeleteMedicineUseCase(medicinesRepository);
  const deleteMedicineController = new DeleteMedicineController(
    deleteMedicineUseCase
  );

  return deleteMedicineController;
};
