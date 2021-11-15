import { MedicinesRepository } from '../../repositories/implementations/MedicinesRepository';
import { UpdateMedicineController } from './UpdateMedicineController';
import { UpdateMedicineUseCase } from './UpdateMedicineUseCase';

export default (): UpdateMedicineController => {
  const medicinesRepository = new MedicinesRepository();
  const updateMedicineUseCase = new UpdateMedicineUseCase(medicinesRepository);
  const updateMedicineController = new UpdateMedicineController(
    updateMedicineUseCase
  );

  return updateMedicineController;
};
