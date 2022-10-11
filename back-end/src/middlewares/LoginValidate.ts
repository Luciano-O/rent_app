import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as Joi from 'joi';
import HttpException from '../shared/http.exception';

export const loginValidate = (req: Request, res: Response, next: NextFunction) => {
  const infos = req.body
  const newUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  })

  const test = newUserSchema.validate(infos);
  if(test.error) {
    throw new HttpException(StatusCodes.BAD_REQUEST, test.error.message)
  }

  next()
}