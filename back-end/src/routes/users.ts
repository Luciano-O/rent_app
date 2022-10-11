import 'express-async-errors';
import { Router } from 'express';
import UsersController from '../controllers/user';
import { NewUserValidate } from '../middlewares/NewUserValidate';

const usersRouter = Router();

const users = new UsersController()

usersRouter.get('/users/:id', users.getById)
usersRouter.post('/users', NewUserValidate, users.create)

export default usersRouter;