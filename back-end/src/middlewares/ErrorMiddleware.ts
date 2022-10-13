import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exception';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as HttpException;
  if(message === 'Validation error') return res.status(status || 500).json({ message: 'Email ja cadastrado' });
  res.status(status || 500).json({ message });
};

export default errorMiddleware;
