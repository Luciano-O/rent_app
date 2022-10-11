import { formatProducts, generateJWT } from '../utils';
import * as bcrypt from 'bcryptjs'
import seq from '../database/models';
import Products from '../database/models/productsModel';
import Users from "../database/models/usersModel";
import IUser from '../interfaces/IUser';

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

    const { id } = await Users.create({
      name: user.name,
      email: user.email,
      password: hash
    })

    const token = generateJWT(id, user.email, user.name)

    return token
  }
}

