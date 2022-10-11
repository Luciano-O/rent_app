import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/user';

export default class UsersController {
  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await UsersService.getById(Number(id))

    console.log(user);
    

    res.status(StatusCodes.OK).json(user)
  }
}