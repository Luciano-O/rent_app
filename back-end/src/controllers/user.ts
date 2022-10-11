import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/user';

export default class UsersController {
  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await UsersService.getById(Number(id))

    res.status(StatusCodes.OK).json(user)
  }

  async create(req: Request, res: Response) {
    const user = req.body;
    const token = await UsersService.create(user)

    res.status(StatusCodes.OK).json({token})
  }

  async login(req: Request, res: Response) {
    const user = req.body;
    const token = await UsersService.login(user)

    res.status(StatusCodes.OK).json({token})
  }
}