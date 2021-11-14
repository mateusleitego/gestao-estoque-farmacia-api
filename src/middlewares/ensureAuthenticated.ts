import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { authConfig } from '../config/authConfig';
import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/users/repositories/implementations/UserRepository';

export const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppError('Token não informado', 401);
    }

    const [, token] = authHeader.split(' ');

    const { sub: user_id } = verify(token, authConfig.secret);

    request.user = {
      id: String(user_id),
    };

    next();
  } catch (error) {
    throw new AppError('Token invalido', 401);
  }
};
