import 'express-async-errors';
import { Router } from 'express';
import UsersController from '../controllers/user';
import { newUserValidate } from '../middlewares/NewUserValidate';
import { loginValidate } from '../middlewares/LoginValidate';

const usersRouter = Router();

const users = new UsersController()

usersRouter.get('/users/:id', users.getById)
usersRouter.post('/users', newUserValidate, users.create)
usersRouter.post('/login', loginValidate, users.login)

export default usersRouter;