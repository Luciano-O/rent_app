import 'express-async-errors';
import { Router } from 'express';
import RentsController from '../controllers/rent';

const rentsRouter = Router();

const rents = new RentsController();

rentsRouter.post('/rent', rents.create);

export default rentsRouter;