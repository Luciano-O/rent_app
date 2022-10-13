import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsService from '../services/product';

class ProductsController {
  async getAll(req: Request, res: Response) {
    const products = await ProductsService.getAll()

    res.status(StatusCodes.OK).json(products)
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params
    const product = await ProductsService.getById(Number(id))

    res.status(StatusCodes.OK).json(product)
  }
}

export default ProductsController;