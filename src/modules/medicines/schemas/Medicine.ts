import mongoose, { Document, Schema } from 'mongoose';

export type MedicineDocument = Document & {
  nome: string;
  descricao: string;
  categoria: string;
  preco: number;
  validade: Date;
  created_at: Date;
};

const schema = new Schema<MedicineDocument>(
  {
    nome: {
      type: String,
      required: true,
    },

    descricao: {
      type: String,
      required: true,
    },

    categoria: {
      type: String,
      required: true,
    },

    preco: {
      type: Number,
      required: true,
    },

    validade: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<MedicineDocument>('Medicine', schema);
