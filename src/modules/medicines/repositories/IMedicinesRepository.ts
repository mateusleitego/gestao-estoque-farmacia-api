import { CreateMedicineDTO } from '../dtos/CreateMedicineDTO';
import { UpdateMedicineDTO } from '../dtos/UpdateMedicineDTO';
import { MedicineDocument } from '../schemas/Medicine';

export interface IMedicinesRepository {
  create({
    nome,
    descricao,
    categoria,
    preco,
    validade,
  }: CreateMedicineDTO): Promise<MedicineDocument>;
  findByName(nome: string): Promise<MedicineDocument | null>;
  findById(_id: string): Promise<MedicineDocument | null>;
  findAll(): Promise<MedicineDocument[] | null>;
  update(data: UpdateMedicineDTO): Promise<MedicineDocument | null>;
  delete(_id: string): Promise<void>;
}
