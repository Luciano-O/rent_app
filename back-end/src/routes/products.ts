import 'express-async-errors';
import { Router } from 'express';
import ProductsController from '../controllers/product';

const productsRouter = Router();

const products = new ProductsController();

productsRouter.get('/products', products.getAll);

export default productsRouter;