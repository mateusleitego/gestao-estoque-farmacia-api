import { MedicinesRepository } from '../../repositories/implementations/MedicinesRepository';

import { SearchMedicineController } from './SearchMedicineController';
import { SearchMedicineUseCase } from './SearchMedicineUseCase';

export default (): SearchMedicineController => {
  const medicinesRepository = new MedicinesRepository();
  const searchMedicineUseCase = new SearchMedicineUseCase(medicinesRepository);
  const searchMedicineController = new SearchMedicineController(
    searchMedicineUseCase
  );

  return searchMedicineController;
};
