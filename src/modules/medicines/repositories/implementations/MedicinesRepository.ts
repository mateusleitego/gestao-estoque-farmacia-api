import { CreateMedicineDTO } from '../../dtos/CreateMedicineDTO';
import { UpdateMedicineDTO } from '../../dtos/UpdateMedicineDTO';
import Medicine, { MedicineDocument } from '../../schemas/Medicine';
import { IMedicinesRepository } from '../IMedicinesRepository';

export class MedicinesRepository implements IMedicinesRepository {
  private repository = Medicine;

  async create({
    nome,
    descricao,
    categoria,
    preco,
    validade: { dia, mes, ano },
  }: CreateMedicineDTO): Promise<MedicineDocument> {
    const medicine = await this.repository.create({
      nome,
      descricao,
      categoria,
      preco,
      validade: new Date(ano, mes, dia),
    });

    return medicine;
  }

  async findByName(nome: string): Promise<MedicineDocument | null> {
    const medicine = await this.repository.findOne({ nome });

    return medicine;
  }

  async findById(_id: string): Promise<MedicineDocument | null> {
    const medicine = await this.repository.findOne({ _id });

    return medicine;
  }

  async findAll(): Promise<MedicineDocument[] | null> {
    const medicines = await this.repository.find();

    return medicines;
  }

  async update({
    _id,
    nome,
    descricao,
    categoria,
    preco,
  }: UpdateMedicineDTO): Promise<MedicineDocument | null> {
    const medicine = await this.repository.findByIdAndUpdate(
      { _id },
      { nome, descricao, categoria, preco }
    );

    return medicine;
  }

  async delete(_id: string): Promise<void> {
    await this.repository.findByIdAndDelete({ _id });
  }
}
