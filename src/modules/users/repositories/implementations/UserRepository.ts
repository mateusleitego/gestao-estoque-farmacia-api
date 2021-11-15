import crypto from 'crypto';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import { DeleteUserDTO } from '../../dtos/DeleteUserDTO';
import { UpdateUserDTO } from '../../dtos/UpdateUserDTO';
import User from '../../schemas/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository = User;

  async create({ nome, email, password }: CreateUserDTO): Promise<String> {
    const access_code = crypto.randomBytes(4).toString('hex');

    await this.repository.create({ access_code, nome, email, password });

    return access_code;
  }

  async findById(_id: string): Promise<any> {
    const user = await this.repository.findOne({ _id });

    return user;
  }

  async findByEmail(email: string): Promise<any> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findByAccessCode(access_code: string): Promise<any> {
    const user = await this.repository.findOne({ access_code });

    return user;
  }

  async update({ _id, nome, email }: UpdateUserDTO): Promise<any> {
    const user = await this.repository.findByIdAndUpdate(
      { _id },
      { email, nome }
    );

    return user;
  }

  async delete({ _id }: DeleteUserDTO): Promise<void> {
    await this.repository.findByIdAndDelete({ _id });
  }
}
