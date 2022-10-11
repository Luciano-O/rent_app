import 'express-async-errors';
import { Router } from 'express';
import UsersController from '../controllers/user';

const usersRouter = Router();

const users = new UsersController()

usersRouter.get('/users/:id', users.getById)

export default usersRouter;