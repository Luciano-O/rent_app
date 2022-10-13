import 'express-async-errors';
import { Router } from 'express';
import ProductsController from '../controllers/product';

const productsRouter = Router();

const products = new ProductsController();

/**
 * @swagger
 *  tags:
 *      name: Products
 *      description: Endpoints de produtos
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Products:
 *              type: object
 *              required:
 *                  - price
 *                  - name
 *                  - description
 *                  - image
 *              properties:
 *                  id:
 *                      type: number
 *                  price:
 *                      type: number
 *                  name:
 *                      type: string
 *                  image:
 *                      type: string
 *                  description:
 *                      type: string
 *              example:
 *                  name: iPhone 13
 *                  price: 275.80
 *                  image: abcde
 *                  description: desc
 */

/**
 * @swagger
 *  /products:
 *    get:
 *      tags: [Products]
 *      description: Enpoint que retorna todos os produtos
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Products'
 */
productsRouter.get('/products', products.getAll);

/**
 * @swagger
 *  /products/{id}:
 *    get:
 *      tags: [Products]
 *      description: Enpoint que retorna um produto com base em seu id
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Products'
 */
productsRouter.get('/products/:id', products.getById);

export default productsRouter;