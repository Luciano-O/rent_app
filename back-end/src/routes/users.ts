import 'express-async-errors';
import { Router } from 'express';
import UsersController from '../controllers/user';
import { newUserValidate } from '../middlewares/NewUserValidate';
import { loginValidate } from '../middlewares/LoginValidate';

const usersRouter = Router();

const users = new UsersController()

/**
 * @swagger
 *  tags:
 *      name: Users
 *      description: Endpoints de usuários
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  - email
 *                  - name
 *              properties:
 *                  id:
 *                      type: number
 *                  email:
 *                      type: string
 *                  name:
 *                      type: string
 *                  password:
 *                      type: string
 *              example:
 *                  email: exemplo@exemplo.com
 *                  password: 12345
 *                  name: abcde
 */

/**
 * @swagger
 *  /users/{id}:
 *    get:
 *      tags: [Users]
 *      description: Enpoint que retorna a informaçōes de determinado usuário
 *      parameters:
 *        - in: path
 *          name: id
 *          type: string
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  email:
 *                    type: string
 *                  name:
 *                    type: string
 *                  products:
 *                    type: array
 *                    items:
 *                        type: object
 *                        $ref: '#/components/schemas/Products'
 *                        properties:
 *                          months:
 *                            type: number
 */

usersRouter.get('/users/:id', users.getById)

/**
 * @swagger
 *  /users:
 *    post:
 *      tags: [Users]
 *      description: Endpoint para cadastrar um usuário
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  token:
 *                    type: string
 *        400:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 */
usersRouter.post('/users', newUserValidate, users.create)

/**
 * @swagger
 *  /login:
 *    post:
 *      tags: [Users]
 *      description: Endpoint para logar com um usuário
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - password
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *              example:
 *                email: exemplo@exemplo.com
 *                password: 10923
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  token:
 *                    type: string
 *        400:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *        404:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 */
usersRouter.post('/login', loginValidate, users.login)

export default usersRouter;