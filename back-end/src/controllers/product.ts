import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsService from '../services/product';

class ProductsController {
  async getAll(req: Request, res: Response) {
    const products = await ProductsService.getAll()

    res.status(StatusCodes.OK).json(products)
  }
}

export default ProductsController;