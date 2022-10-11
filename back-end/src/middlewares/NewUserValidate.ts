import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as Joi from 'joi';

export const NewUserValidate = (req: Request, res: Response, next: NextFunction) => {
  const infos = req.body
  const newUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    name: Joi.string().min(5).required(),
  })

  const test = newUserSchema.validate(infos);
  if(test.error) {
    return res.status(StatusCodes.BAD_REQUEST).json(test.error.message)
  }

  next()
}