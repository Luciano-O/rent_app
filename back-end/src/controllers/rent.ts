import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import RentsService from '../services/rent';

class RentsController {
  async create(req: Request, res: Response) {
    const rent = req.body;
    await RentsService.create(rent)

    return res.status(StatusCodes.OK).json({message: "OK!"})
  }
}

export default RentsController