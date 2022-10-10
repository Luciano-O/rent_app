import Products from '../database/models/productsModel';
import Users from "../database/models/usersModel";

export default class UsersService {
  static async getById(id: number) {
    const user = await Users.findByPk(id, 
      {include: {
        model: Products
      }})

    return user
  }
}

