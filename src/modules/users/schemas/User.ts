import mongoose, { Document, Schema } from 'mongoose';

export type UserDocument = Document & {
  access_code: string;
  email: string;
  nome: string;
  password: string;
  isAdmin: boolean;
  created_at: Date;
};

const schema = new Schema<UserDocument>(
  {
    access_code: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },

    nome: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<UserDocument>('User', schema);
