import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { DeleteUserDTO } from '../dtos/DeleteUserDTO';
import { UpdateUserDTO } from '../dtos/UpdateUserDTO';

export interface IUsersRepository {
  create({ nome, email, password }: CreateUserDTO): Promise<String>;
  findById(_id: string): Promise<any>;
  findByEmail(email: string): Promise<any>;
  findByAccessCode(access_code: string): Promise<any>;
  update({ _id, nome, email }: UpdateUserDTO): Promise<any>;
  delete({ _id }: DeleteUserDTO): Promise<void>;
}
