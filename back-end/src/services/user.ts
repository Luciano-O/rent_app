import { formatProducts, generateJWT } from '../utils';
import * as bcrypt from 'bcryptjs'
import Products from '../database/models/productsModel';
import Users from "../database/models/usersModel";
import IUser from '../interfaces/IUser';
import HttpException from '../shared/http.exception';
import { StatusCodes } from 'http-status-codes';

export default class UsersService {
  static async getById(id: number) {
    const user = await Users.findByPk(id,
      {include: {
        model: Products
      }}) as IUser

    const finalUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      products: formatProducts(user.products)
    }

    return finalUser
  }

  static async create(user: Users) {
    const hash = bcrypt.hashSync(user.password, 10)

    const createdUser = await Users.create({
      name: user.name,
      email: user.email,
      password: hash
    })

    const token = generateJWT(createdUser.id, user.email, user.name)

    return {
      token,
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email
    }
  }

  static async login(user: Users) {
    const atualUser = await Users.findOne({where: { email: user.email}}) as Users

    if(!atualUser) throw new HttpException(StatusCodes.NOT_FOUND, "Usuário não existe!")

    const compare = bcrypt.compareSync(user.password, atualUser.password)

    if(compare === false) throw new HttpException(StatusCodes.BAD_REQUEST, "Senha incorreta!")

    const token = generateJWT(atualUser.id, atualUser.email, atualUser.name)

    return {
      token,
      id: atualUser.id,
      name: atualUser.name,
      email: atualUser.email
    }
  }
}

