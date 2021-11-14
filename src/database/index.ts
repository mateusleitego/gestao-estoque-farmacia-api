import { hash } from 'bcryptjs';
import mongoose from 'mongoose';
import { AppError } from '../errors/AppError';
import User from '../modules/users/schemas/User';

const mongoConnection = async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGO_URL}`, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('🚀 Conexão com MongoDB');
      });
  } catch (error) {
    throw new AppError('❌️ Erro ao conectar com o MongoDB', 500);
  } finally {
    // Mock Admin
    const admin = await User.findOne({
      access_code: 'admin',
      email: 'admin@gadmin.com',
    });

    if (!admin) {
      await User.create({
        nome: 'ADM',
        email: 'admin@gadmin.com',
        password: await hash('123456789', 8),
        access_code: 'admin',
        isAdmin: true,
      });
      console.log('🚀 Admin criado');
    }
  }
};

mongoConnection();
