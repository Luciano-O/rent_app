import { formatProducts } from '../utils';
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
}

