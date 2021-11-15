import { MedicinesRepository } from '../../repositories/implementations/MedicinesRepository';
import { GetMedicineController } from './GetMedicineController';
import { GetMedicineUseCase } from './GetMedicineUseCase';

export default (): GetMedicineController => {
  const medicinesRepository = new MedicinesRepository();
  const getMedicineUseCase = new GetMedicineUseCase(medicinesRepository);
  const getMedicineController = new GetMedicineController(getMedicineUseCase);

  return getMedicineController;
};
