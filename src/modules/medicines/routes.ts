import { Router } from 'express';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';

import createMedicineController from './useCases/CreateMedicine';
import getMedicineController from './useCases/GetMedicine';
import searchMedicineController from './useCases/SearchMedicine';
import updateMedicineController from './useCases/UpdateMedicine';
import deleteMedicineController from './useCases/DeleteMedicine';

export const medicineRouter = Router();

medicineRouter.use(ensureAuthenticated);

medicineRouter.post('/', (request, response) =>
  createMedicineController().handle(request, response)
);

medicineRouter.get('/', (request, response) =>
  getMedicineController().handle(request, response)
);

medicineRouter.get('/all', (request, response) =>
  searchMedicineController().handle(request, response)
);

medicineRouter.put('/:medicine_id', (request, response) =>
  updateMedicineController().handle(request, response)
);

medicineRouter.delete('/:medicine_id', (request, response) =>
  deleteMedicineController().handle(request, response)
);
