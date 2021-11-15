export type CreateMedicineDTO = {
  nome: string;
  descricao: string;
  categoria: string;
  preco: number;
  validade: {
    dia: number;
    mes: number;
    ano: number;
  };
};
