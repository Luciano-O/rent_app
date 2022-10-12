import 'express-async-errors';
import { Router } from 'express';
import RentsController from '../controllers/rent';
import validateToken from '../middlewares/TokenValidate';

const rentsRouter = Router();

const rents = new RentsController();

/**
 * @swagger
 *  tags:
 *      name: Rents
 *      description: Endpoints de aluguéis
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Rents:
 *        type: object
 *        required:
 *          - userId
 *          - productId
 *          - months
 *        properties:
 *          userId:
 *            type: number
 *          productId:
 *            type: number
 *          months:
 *            type: number
 *        example:
 *          userId: 1
 *          productId: 2
 *          months: 12
 */


/**
 * @swagger
 *  /rents:
 *    post:
 *      tags: [Rents]
 *      description: Endpoint para cadastrar um aluguél
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Rents'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 */

rentsRouter.post('/rent', validateToken, rents.create);

export default rentsRouter;